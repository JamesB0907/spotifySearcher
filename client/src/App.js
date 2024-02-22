import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3">
          <FormControl
            placeholder='Search For Artist'
            type='input'
            onKeyDown={event => {
              if (event.key == "Enter") {
                console.log("Pressed Enter");
              }
            }}
            onChange={<></>}
          />
        </InputGroup>
      </Container>
    </div>
  );
}

export default App;
