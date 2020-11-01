import React, { ReactNode, useState } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import { Button, Jumbotron, Toast } from 'react-bootstrap';
import Cards from './components/Cards';
interface Props {
  children: ReactNode;
}

const ExampleToast = ({ children }: Props) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};
function App() {
  return (
    <Container className="p-1">
    {/* <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
    </Jumbotron>
    <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast> */}
      <Cards />
  </Container>
  );
}

export default App;
