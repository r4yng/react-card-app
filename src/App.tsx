import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Cards from './components/Cards';

function App() {
  return (
    <Container className="p-1">
      <Cards />
  </Container>
  );
}

export default App;
