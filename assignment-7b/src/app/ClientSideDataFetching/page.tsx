"use client";
import React, { useEffect } from "react";
import { useState } from "react";

export default function ClientSidePage() {
  let [users, setUsers] = useState([]);
  async function getUsers() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    return data;
  }
  // let users = await getUsers();
  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);
  return (
    <div>
      <h1>server-side</h1>
      {users.map((user: any) => {
        return (
          <div key={user.id}  className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <h2>{user.id}</h2>
            <img
              src={user.image}
              alt={user.title}
               className="w-full h-48 object-cover"
            //   style={{
            //     width: "300px",
            //     height: "300px",
            //     objectFit: "contain",
            //     borderRadius: "10px",
            //     marginBottom: "20px",
            //   }}
            />
            <div className="p-4">
            <h3 className="">{user.title}</h3>
            <p className="">{user.price}</p>
            <p className="">{user.description}</p>
            <h4>{user.category}</h4>
            <p className="">
              {" "}
              <strong>Rate:</strong>
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              {user.rating.rate} <strong>Count:</strong> ({user.rating.count})
            </p>
            </div>
            </div>
            </div>
          </div>
        );
      })}
      
    </div>
    
  );
}
