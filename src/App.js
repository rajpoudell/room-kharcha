import React, { useState } from 'react';
import "./index.css";
import "./responsive.css";

const App = () => {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString();
  const currentDateString = currentDate.toDateString();



  const [product, setProduct] = useState("");
  const [paisa, setPaisa] = useState("");
  const [allItems, setAllItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  

  const handleAddItem = () => {
    if (product === "" || paisa === "") {
      alert("Empty Inputs");
    } else {
      const newItem = {
        product: product,
        paisa: paisa
      };

      const updatedItems = [...allItems, newItem];
      setAllItems(updatedItems);

      const newTotalPrice = updatedItems.reduce((acc, item) => acc + parseInt(item.paisa), 0);
      setTotalPrice(newTotalPrice);

      setProduct("");
      setPaisa("");
      console.log(updatedItems);
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...allItems];
    const deletedItem = updatedItems.splice(index, 1)[0];

    // Update total price by subtracting the paisa of the deleted item
    const newTotalPrice = totalPrice - parseInt(deletedItem.paisa);
    setTotalPrice(newTotalPrice);

    setAllItems(updatedItems);
  };

  return(
    <div className='main'>
      <div className="main--innerblock">
        <div className="main--center">
          <div className="center--firstline">
            <input
              type="text"
              placeholder='item'
              id='input1'
              value={product}
              className='inputs'
              onChange={(e) => setProduct(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder='kharcha vako paisa'
              id='input2'
              value={paisa}
              className='inputs'
              onChange={(e) => setPaisa(e.target.value)}
              required
            />
            <button id='btn' onClick={handleAddItem}>Add</button>
            <div className="center--showkharcha">
              <p>Total Kharcha</p>
              <p>{totalPrice}</p>
            </div>
          </div>
          {allItems.length !== 0 && allItems.map((data, i) => {
            return (
              <div className="main--appendchild" key={i}>
                <p>-</p>
                <p>{data.product}</p>
                <p>Rs.{data.paisa}</p>
                <p className='miti'>{currentTime + currentDateString} </p>
                <p id='delete' onClick={() => handleDeleteItem(i)}>x</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
