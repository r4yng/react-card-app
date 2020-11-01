import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { Card, Col, Form, Row } from "react-bootstrap";
import { APIResponse } from "../models/APIResponse";
import { IProps, IState } from "../models/Cards";

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
        "https://api.elderscrollslegends.io/v1/cards?pageSize=100";
      const {
        data: { cards, _links },
      } = await axios.get<APIResponse>(url);
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

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, error, items } = this.state;
    const filteredItems = filter.trim() === '' ? items : items.filter(item => item.name.includes(filter));

    if (error) {
      return <div>Error: {error}</div>;
    } else {
      return (
        <>
          <Form.Control
            className="mb-2 mr-sm-2"
            id="searchInput"
            placeholder="SearchName"
            value={filter}
            onChange={this.handleChange}
          />
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadCards}
            hasMore={this.state.hasMoreItems}
            loader={
              <div className="loader" key={0}>
                Loading...
              </div>
            }
          >
            <Row>
              {filteredItems.map((item, index) => (
                <Col key={index} xl={2} lg={3} md={4} sm={6}>
                  <Card key={item.name}>
                    <Card.Img
                      variant="top"
                      src={item.imageUrl}
                      style={{ maxWidth: "200px" }}
                    />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>Text: {item.text}</Card.Text>
                      <Card.Text>Set: {item.setName}</Card.Text>
                      <Card.Text>Type: {item.type}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        </>
      );
    }
  }
}

export default CardsComponent;
