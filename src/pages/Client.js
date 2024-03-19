import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { DEL_CLIENT, EDIT_CLIENT } from "../redux/reducers/actionTypes";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Client = () => {
  const client = useSelector((state) => state.client.client);

  const dis = useDispatch();
  console.log(client);
  const nav = useNavigate();

  const delClient = (id) => {
    dis({ type: DEL_CLIENT, id: id });
  };

  return (
    <div className="container">
      <div className="client">
        {client.map((el) => (
          <div className="black">
            <img src={el.img} alt="" />
            <h1>{el.name}</h1>
            <span>{el.age}</span>
            <MdDelete onClick={() => delClient(el.id)} className="delete" />
            <FaEdit
              className="edit"
              onClick={() => {
                nav(`/edit`);
                dis({
                  type: EDIT_CLIENT,
                  pay: {
                    img: el.img,
                    name: el.name,
                    age: el.age,
                    id: el.id,
                  },
                });
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Client;
