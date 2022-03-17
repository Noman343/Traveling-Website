import React from "react";

function Person(props) {
  return (
    <div>
      <div className="card m-2 shadow" style={{ width: "15rem" }}>
        <img
          className="card-img-top"
          src={props.user.avatar_url}
          alt="avatar"
        />
        <div className="card-body">
          <h6 className="card-title text-capitalize">{props.user.login}</h6>
          <p className="card-text">{props.user.type}</p>
          <a className="btn btn-primary" href={props.user.html_url}>
            Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Person;
