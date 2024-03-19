import React, { useState } from "react";
import { useDispatch  } from "react-redux";
import { ADD_CLIENT } from "../redux/reducers/actionTypes";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState("");

  const nav = useNavigate()
 
  const dispatch = useDispatch();
  const addClient = () => {
    let newClient = {
      name: name,
      age: age,
      img: img,
      id: Date.now(),
    }
    dispatch({ type: ADD_CLIENT, pay: newClient });
  };
  return (
    <div className="container">
      <div className="home">
        <h1 style={{ color: "rgb(62, 62, 164)", fontSize: "45px" }}>TO DO</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name..."
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="Age..."
        />
        <input
          onChange={(e) => setImg(e.target.value)}
          type="img"
          placeholder="Img..."
        />
        <button onClick={addClient}>add client</button>
      </div>
    </div>
  );
};
export default Home;
