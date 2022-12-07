import React, { useRef, useState } from "react";
import axios from "axios";
import "./Form.style.css";
const Form = ({ bName, method }) => {
  const [message, setMessage] = useState("");
  const getTitle = useRef(null);
  const getBody = useRef(null);
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  const inputData = () => {
    let title = getTitle.current.value;
    let body = getBody.current.value;

    if (title == "" || body == "") {
      setMessage("Isi Data Terlebih Dahulu");
    } else {
      if (method == "post") {
        Post(title, body);
      } else if (method == "put") {
        Put(title, body);
      } else if (method == "patch") {
        Patch(title, body);
      }
    }
  };

  const Post = async (title, body) => {
    try {
      const res = await axios.post(baseUrl, {
        title: title,
        body: body,
      });

      if (res.status == 201) {
        setMessage("Berhasil Post Data");
      }

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const Put = async (title, body) => {
    try {
      const res = await axios.put(`${baseUrl}/1`, {
        title: title,
        body: body,
      });

      if (res.status == 200) {
        setMessage("Berhasil Update dengan PUT");
      }

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const Patch = async (title, body) => {
    try {
      const res = await axios.patch(`${baseUrl}/1`, {
        title: title,
        body: body,
      });

      if (res.status == 200) {
        setMessage("Berhasil  Update dengan PATCH");
      }

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Form-wrap">
      <input type="text" ref={getTitle} placeholder={"title"} />
      <textarea type="text" ref={getBody} placeholder={"description"} />
      <button
        onClick={() => {
          inputData();
        }}
      >
        {bName}
      </button>
      {message == 0 ? "" : <p className="message">{message}</p>}
    </div>
  );
};

export default Form;
