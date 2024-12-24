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
    <div className="bg-blue-300 py-10  min-h-screen">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 place-content-center ">
        {users.map((user: any) => {
          return (
            <div
              key={user.id}
              className="bg-gray-800 text-white rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={user.image}
                alt={user.title}
                className="w-full h-48 object-contain bg-white  rounded-lg"
                //   style={{
                //     width: "300px",
                //     height: "300px",
                //     objectFit: "cover",
                //     borderRadius: "10px",
                //     marginBottom: "20px",
                //   }}
              />
              <div className="p-4 text-white">
                <h3 className="text-2xl font-extrabold">{user.title}</h3>
                <h4 className="font-medium hover:underline opacity-[80%]">
                  {user.category}
                </h4>
                <p className="font-bold text-xl">Price:${user.price}</p>
                <p className="font-semibold opacity-[80%]">
                  {user.description}
                </p>

                <p className="opacity-[50%]">
                  {" "}
                  <strong>Rate:</strong>
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-yellow-500">⭐</span>
                  {user.rating.rate} <strong>Count:</strong> (
                  {user.rating.count})
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
