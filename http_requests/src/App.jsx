import { useState, useEffect } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import useFetch from "./hooks/useFetch";

function App() {
  const {response, error, loading} = useFetch({url: "application/json", method: "GET"})

  const userList = response?.items.map(user=>(
    {
      firstName: user.firstName,
      lastName: user.lastName,
      id: user._uuid,
    } 
  )) || []

  //GET request

  const onFormSubmit = (firstName, lastName) => {
    // POST request
    fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify([{ firstName, lastName }]),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Response Failed");
        return res.json();
      })
      // .then((data) => {
      //   setUserList((prev) => [
      //     {
      //       firstName: data.items[0].firstName,
      //       lastName: data.items[0].lastName,
      //       id: data.items[0]._uuid,
      //     },
      //     ...prev,
      //   ]);
      // })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <UserForm onFormSubmit={onFormSubmit} />

      {userList.map((user) => (
        <div key={user.id} style={{ border: "1px solid gray" }}>
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
