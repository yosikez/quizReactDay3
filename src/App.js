import logo from "./logo.svg";
import "./App.css";
import Form from "./Component/Form/Form";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Users from "./Component/Users/Users";
function App() {
  const baseUrl = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const getId = useRef(null);
  const getUsers = async () => {
    try {
      const res = await axios.get(baseUrl);

      if (res.status == 200) {
        setUsers(res.data);
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Delete = async () => {
    let id = getId.current.value;

    if (id == "") {
      setMessage("Isi Data Terlebih Dahulu");
    } else {
      try {
        const res = await axios.delete(`${baseUrl}/${id}`);

        if (res.status == 200) {
          setMessage(`Berhasil delete data dengan ${id}`);
        }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="get">Get Data</h2>
        <div className="card">
          {users.map((user) => (
            <Users user={user} />
          ))}
        </div>

        <br />
        <div className="wrap">
          <div className="form">
            <h2>Post</h2>
            <Form bName={"Post"} method={"post"} />
          </div>
          <div className="form">
            <h2>Put</h2>
            <Form bName={"Put"} method={"put"} />
          </div>
          <div className="form">
            <h2>Patch</h2>
            <Form bName={"Patch"} method={"patch"} />
          </div>

          <div className="form">
            <h2>Delete</h2>
            <div className="delete">
              <input type="text" placeholder="id" ref={getId} />
              <button onClick={Delete}>Delete</button>
              {message == 0 ? "" : <p className="message">{message}</p>}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
