import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";

export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);
  const [updater, setUpdater] = useState(true);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        setFriends(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, [updater]);

  const updateHelper = () => {
    setUpdater(!updater);
  };

  return (
    <div>
      <h1>Friends</h1>
      {friends.map(friend => {
        return (
          <div key={friend.id}>
            {friend.name} | {friend.age}
          </div>
        );
      })}
      <AddFriend refresh={updateHelper} />
    </div>
  );
}
