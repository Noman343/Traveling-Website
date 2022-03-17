import React, { useState } from "react";
import axios from "axios";
import Person from "./person";
function Tourists() {
  // const [output, setOutput] = useState([]);

  // const url = "https://dummyapi.io/data/v1/user";
  // const headers = {
  //   "app-id": "62299f0e34fc83b1292b05d9",
  //   "Content-Type": "application/json",
  // };
  // var userlist = [];
  // axios
  //   .get(url, { headers })
  //   .then((response) => {
  //     userlist = response?.data?.data;
  //     console.log(userlist);
  //     setOutput(userlist);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // var userComponent = output.map((user) => {
  //   return <Person key={user.id} user={user} />;
  // });
  const [users, setUsers] = useState([]);

  let userlist = []
  axios.get("https://api.github.com/users").then((response)=>{
    userlist = response.data
           setUsers(userlist)
  },[]).catch((error)=>{
    console.log(error)
  })

      var userComponent = users.map((user)=>{
      return  <Person key={user.id} user={user}/>
    })

  return (
    <>
    <h1 className="text-center display-1">Our Tourists....<i className="fab fa-typo3"></i></h1>
    <div className="container d-flex justify-content-center flex-wrap">
      {userComponent}
    </div>
    </>
  );
}

export default Tourists;
