import React, { Component } from "react";


const UserTechList = (props) => {
    const data = props.data;
    let list = []; // mentee, mentor
    for (let key in data) {
      if (data[key] === "true") {
        list.push(key);
      }
    }
    return (
      <div className="container">
        <ul className="usertech-list">
          {list.length === 0
            ? "Please select your ...."
            : list.map((val, index) => <li key={index}>{val}</li>)}
        </ul>
      </div>
    );
}

export default UserTechList;
