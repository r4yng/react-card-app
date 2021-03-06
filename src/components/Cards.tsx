import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { APIResponse } from "../models/APIResponse";
import { ICard } from "../models/Cards";
import "./Cards.css";
import SearchBar from "./SearchBar";
import Card from "./Card";

interface Props {}

interface State {
  filter: string;
  error: string | null;
  items: ICard[];
  nextUrl: string | null;
  hasMoreItems: boolean;
}

class CardsComponent extends React.Component<Props, State> {
  state = {
    filter: "",
    error: null,
    items: [] as ICard[],
    nextUrl: null,
    hasMoreItems: true,
  };

  loadCards = async () => {
    try {
      const url =
        this.state.nextUrl || (process.env.REACT_APP_BASE_URL as string);
      let params;
      if (!this.state.nextUrl) {
        params = { params: { pageSize: 20 } };
      }
      const {
        data: { cards, _links },
      } = await axios.get<APIResponse>(url, params);

      // set card data from response
      const items = cards.map(({ name, text, imageUrl, type, set }) => ({
        name,
        text,
        imageUrl,
        type,
        setName: set.name,
      }));
      this.setState((previousState) => ({
        items: [...previousState.items, ...items],
        nextUrl: _links.next,
        hasMoreItems: _links.next !== undefined,
      }));
    } catch (error) {
      this.setState({ error });
    }
  };

  handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, error, items, nextUrl, hasMoreItems } = this.state;
    const filteredItems =
      filter.trim() === ""
        ? items
        : items.filter(({ name }) => new RegExp(`${filter}`, "i").test(name));
    let noFilteredItems;
    if (filteredItems.length === 0 && nextUrl) {
      noFilteredItems = <div>No Names Found</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }
    return (
      <>
        <SearchBar
          filterText={filter}
          onChange={this.handleFilterChange}
        ></SearchBar>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadCards}
          hasMore={hasMoreItems && filter === ""}
          loader={
            <div className="loader" key={0}>
              Loading...
            </div>
          }
        >
          <div className="card-container">
            {filteredItems.map((item, index) => (
              <Card key={index} data={item} />
            ))}
            {noFilteredItems}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default CardsComponent;
