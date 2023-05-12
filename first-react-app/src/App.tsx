import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';

function App() { 
  let items = ['New York', 'Tokyo', 'San Francisco', 'Paris', 'London']
  let schools = ['Academic City', 'Ashesi', 'KNUST']
  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  const [alertVisible, setAlertVisibility] = useState(false);
 
  return (
    <div>
      {alertVisible && <Alert>Congrats, you clicked 'Submit'</Alert>}
        <Button onClick={() => setAlertVisibility(true)}>
          Submit
        </Button>
        <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>
        <ListGroup items={schools} heading='Schools' onSelectItem={handleSelectItem}/>
      </div>
  );
}

export default App;
