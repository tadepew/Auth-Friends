import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = props => {
  const [addFriend, setAddFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });

  //   useEffect(() => {
  //     axiosWithAuth()
  //       .post("/api/friends")
  //       .then(res => {
  //         console.log(res);
  //         setAddFriend(res.data);
  //       })
  //       .catch(err => console.log(err));
  //   }, []);

  const handleChanges = e => {
    return setAddFriend({ ...addFriend, [e.target.name]: e.target.value });
  };

  const addToFriends = e => {
    e.preventDefault();
    console.log(addFriend);
    axiosWithAuth()
      .post("/api/friends", addFriend)
      .then(res => {
        console.log(res);
        props.refresh();
      })
      .catch(err => console.log(err));
    setAddFriend({
      name: "",
      age: "",
      email: ""
    });
  };

  return (
    <div>
      <form onSubmit={addToFriends}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={addFriend.name}
          onChange={handleChanges}
        />
        <input
          type="number"
          name="age"
          placeholder="age"
          value={addFriend.age}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={addFriend.email}
          onChange={handleChanges}
        />
        <button>Add friend</button>
      </form>
    </div>
  );
};

export default AddFriend;
