import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from 'react-bootstrap';
import { useState, useEffect } from 'react';

const CLIENT_ID = '';
const CLIENT_SECRET = '';

function App() {
  const [searchInput, setSearchInput] = useState('');
  return (
    <div className='App'>
      <Container>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='Search For Artist'
            type='input'
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                console.log('Pressed Enter');
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button
            onClick={() => {
              console.log('Clicked Button');
            }}
          >
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className='mx-2 row row-cols-4'>
          <Card>
            <Card.Img src='#' />
            <Card.Body>
              <Card.Title>Album Name Here</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
