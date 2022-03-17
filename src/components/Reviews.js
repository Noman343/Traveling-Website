import React, { useState } from "react";
import "./reviews.css";

var data = [
  {
    id:"2212",
    name: "What a place, the history, architecture and culture is wonderful. So many sites to see, one more amazing then the next. A must see if you are going to visit the great cities of the world.",
  },{
    id:"2213",
    name:"Tour was fantastic and the guide was even better! Regie could tell us facts all day about all of our sites. He was also so fun and make sure everyone felt welcome and a part of the group! Would definitely recommend to anyone looking to travel! "
  }
];

export default function Reviews() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState(data);
  const [toggle, setToggle] = useState(true);
  const [edited, SetEdited] = useState(null);

  // $4$$44$$$4$ ADD Function $$$4444$$4$4
  const addItem = () => {
    if (input === "") {
      alert("Add something");
    } else if (input && !toggle) {
      setItem(
        item.map((elem) => {
          if (elem.id === edited) {
            return { ...elem, name: input };
          }
          return elem;
        })
      );
      setToggle(true);
      setInput("");
      SetEdited(null);
    } else {
      const allInputData = { id: new Date().getTime().toString(), name: input };
      setItem([...item, allInputData]);
      setInput("");
    }
  };

  // $4$$44$$$4$ DELETE Function $$$4444$$4$4
  const deleteItem = (index) => {
    const updatedItems = item.filter((elem) => {
      return index !== elem.id;
    });
    setItem(updatedItems);
  };

  const editItem = (id) => {
    let newEditItem = item.find((elem) => {
      return elem.id === id;
    });
    setToggle(false);
    setInput(newEditItem.name);
    SetEdited(id);
  };

  // $4$$44$$$4$ FOR REMOVING ALL $$$4444$$4$4
  const removeall = () => {
    setItem([]);
  };

  return (
    <>
      <div className="container-fluid text-center min-vh-100 reviewCon">
        <div>
          <h1 className="p-3">Leave a message for us....!</h1>
          <div>
            <input
              type="text"
              className="w-50 reviewInputBox m-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {toggle ? (
              <button className="btn btn-sm bg-primary" onClick={addItem}>Add</button>
            ) : (
              <i className="fas fa-edit btn" onClick={addItem}></i>
            )}
          </div>
          <div>
            {item.map((elem) => {
              return (
                <div className="container added-cont">
                  <div key={elem.id} className="card added-card">
                    <div className="card-body">
                      <h6>{elem.name}</h6>
                      <div>
                        <i
                          className="bi bi-pencil-square btn card-link"
                          onClick={() => editItem(elem.id)}
                        ></i>

                        <i
                          className="bi bi-trash-fill btn card-link"
                          onClick={() => deleteItem(elem.id)}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="btn btn-md btn-outline-light m-3"
            onClick={removeall}
          >
            Remove All
          </button>
        </div>
      </div>
    </>
  );
}
