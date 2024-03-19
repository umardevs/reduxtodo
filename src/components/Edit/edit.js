import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_EDIT } from "../../redux/reducers/actionTypes";

const Edit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState("");
  const [id, setId] = useState("");

  const dispatch = useDispatch();

  const editClient = useSelector((state) => state.client.Edit);

  function saveClient() {
    setName(editClient.name)
    setAge(editClient.age)
    setImg(editClient.img)
    setId(editClient.id)
  }

  useEffect(() => {
    saveClient();
  }, []);

  return (
    <div className="container">
      <div className="home">
        <h1 style={{ color: "rgb(62, 62, 164)", fontSize: "45px" }}>TO DO</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name..."
          value={name}
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="Age..."
          value={age}
        />
        <input
          onChange={(e) => setImg(e.target.value)}
          type="img"
          placeholder="Img..."
          value={img}
        />
        <button onClick={()=>{
            dispatch({type:SAVE_EDIT,pay:[{name,age,img,id}]})
        }}>save client</button>
      </div>
    </div>
  );
};
export default Edit;
