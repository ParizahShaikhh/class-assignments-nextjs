import React from "react";

export default async function ServerSidePage() {
  async function getUsers(){
    let response = await fetch('https://simple-books-api.glitch.me/books/');
    let data = await response.json();
    return data;
}
let users = await getUsers();
  return (
    <div>
      <h1>server-side</h1>
      {
        users.map((user:any)=>{
          return (
            <div key={user.id}>
              <h2>{user.id}</h2>
              <h3>{user.name}</h3>
              <p>{user.type}</p>
              <p>{user.available}</p>
              {/* <h4>{user.category}</h4> */}
            </div>
          )
        })
      }
    </div>
  );
}
