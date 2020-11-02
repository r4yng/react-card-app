import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { APIResponse } from "../models/APIResponse";
import { IProps, IState } from "../models/Cards";
import "./Cards.css";
import { SearchBar } from "./SearchBar";
import { Card } from "./Card";

class CardsComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      filter: "",
      error: null,
      items: [],
      nextUrl: null,
      hasMoreItems: true,
    };
  }

  loadCards = async () => {
    try {
      const url =
        this.state.nextUrl ||
        "https://api.elderscrollslegends.io/v1/cards?pageSize=20";
      const {
        data: { cards, _links },
      } = await axios.get<APIResponse>(url);

      // set card data from response
      const items = cards.map(({ name, text, imageUrl, type, set }) => ({
        name,
        text,
        imageUrl,
        type,
        setName: set.name,
      }));
      this.setState({
        items: [...this.state.items, ...items],
        nextUrl: _links.next,
        hasMoreItems: _links.next !== undefined,
      });
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
        <SearchBar filterText={filter} onChange={this.handleFilterChange}></SearchBar>
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
