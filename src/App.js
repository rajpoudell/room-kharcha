import React, { useEffect, useState } from 'react';
import "./index.css";

const App = () => {
  var inputs1 = document.getElementById("input1")
  var inputs2 = document.getElementById("input2")
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString();
  const currentDateString = currentDate.toDateString();

  const [allItems, setAllItems] = useState([]);
  const [product, setProduct] = useState("");
  const [paisa, setPaisa] = useState("");

  const handleAddItem = () => {
    const newItem = {
      product: product,
      paisa: paisa
    };
    if (inputs1.value==="" && inputs2.value==="" ) {
      alert("Empty Inputs")
    }
    else{

      setAllItems([...allItems, newItem]);
      setProduct("");
      setPaisa("");
      console.log(allItems)
    }
    
  };
  const handleDeleteItem = (index) => {
    const updatedItems = [...allItems];
    updatedItems.splice(index, 1);
    setAllItems(updatedItems);
  };
//all code for total kharcha into page
const paisaArray = Object.entries(allItems);
console.log(paisaArray);


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
              <p></p>
            </div>
          </div>
          {allItems.length !== 0 && allItems.map((data, i) => {
            return (
              <div className="main--appendchild" key={i}>
                <p>*</p>
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
