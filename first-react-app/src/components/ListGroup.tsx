// import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ['New York', 'Tokyo', 'San Francisco', 'Paris', 'London'];
  // items = []

  // Click event handler
  const handleEvent = (event: MouseEvent) => console.log(event)
  return (
      <>
        <h1>List</h1>
        {items.length == 0 && <p>No items found</p>};
        <ul className="list-group">
          {items.map((item, index) => (
            <li className="list-group-item flush" key={item} onClick={handleEvent}
            >
              {item}
            </li>
          ))}
        </ul>
      </>
  );
}

export default ListGroup;