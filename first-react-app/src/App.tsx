import ListGroup from './components/ListGroup';

function App() { 
  let items = ['New York', 'Tokyo', 'San Francisco', 'Paris', 'London']
  let schools = ['Academic City', 'Ashesi', 'KNUST']
  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return <div>
      <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>
      <ListGroup items={schools} heading='Schools' onSelectItem={handleSelectItem}/>
    </div>;
}

export default App;
