import React, { useState } from "react";
import axios from "axios";
import Person from "./person";
function Tourists() {
  const [users, setUsers] = useState([]);

  let userlist = [];
  axios
    .get("https://api.github.com/users")
    .then((response) => {
      userlist = response.data;
      setUsers(userlist);
    }, [])
    .catch((error) => {
      console.log(error);
    });

  var userComponent = users.map((user) => {
    return <Person key={user.id} user={user} />;
  });

  return (
    <>
      <h1 className="text-center display-1">
        Our Tourists....<i className="fab fa-typo3"></i>
      </h1>
      <div className="container d-flex justify-content-center flex-wrap">
        {userComponent}
      </div>
    </>
  );
}

export default Tourists;
