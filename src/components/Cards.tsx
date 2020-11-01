import React from "react";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";
import { APIResponse } from "../models/APIResponse";
import { IProps, IState } from "../models/Cards";

class CardsComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const page = 1;
    try {
      const response = await axios.get<APIResponse>(
        "https://api.elderscrollslegends.io/v1/cards",
        {
          params: {
            page,
            pageSize: 20,
          },
        }
      );

      this.setState({
        isLoaded: true,
        items: response.data.cards.map(
          ({ name, text, imageUrl, type, set }) => ({
            name,
            text,
            imageUrl,
            type,
            setName: set.name,
          })
        ),
      });
    } catch (error) {
      this.setState({ isLoaded: true, error });
    }
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Row>
            {items.map((item, index) => (
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
          <Row>HelloTEST</Row>
        </>
      );
    }
  }
}

export default CardsComponent;
