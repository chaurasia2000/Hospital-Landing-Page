import React, { useState, useEffect } from "react";
import axios from "axios";
import './practice.css';

const Practice = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container" id="practicecon">
        <h2 className="fw-bold" id="h2prac">What Our Customers Say</h2>
        <div className="row mt-5 d-flex card-container">
        {posts.map((post) => (
        <div className="col-sm-6 card-inner" key={post.id}>
          <div className="row mb-2 p-3">
            <div className="">
              <div className="row  rounded  flex-md-row mb-4 shadow-lg h-md-250 position-relative">
                <div className="p-4 position-static">
                  <p className="card-text mb-auto">{post.Reviews}</p>
                </div>
                <div className="profile">
                  <img className="profile-img" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADIQAAICAQIFAQYFBAMAAAAAAAABAgMEETEFEiFBURMiMmFxgaFCUpHB0SNisfAUgqL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAccnJrxoc1ktPCW7A7akPI4lj0ax155/liVOXxC3I1itYV/lXf5kQCfbxa+b0rUa18OrIk77rPftm/+xzAAdQAMptPVNp/Dod683Jq9y6WniXUjgC1o4u+ivr+sP4LOjJqyI61TT03XdHlzMZOMlKLcZLugPWAqMLiu0Mn6T/ktotSSaeqfgDIAAAAAAccq+OPU7Jvou3lgc87Mhi16yWs37sfJ5+62d83OyWsn3F1s77XZY9ZS+3wNAAAAAAAAAAAAAAATeH50saSjLWVTe3j5EIAerhONkFKDTi+qaNih4VmehNVWP+nJ9G/wsvUBkAAYexQcUyfXv5YP2IPRfF9y14lf6GLKSftS9mJ50AAAAAAAHSmiy9/049Fu3sBzBYw4Z0/qW9f7UbPhkO1k/sBWAl3YFtabj7aXjcibbgAAAAAAveEZPrU+nN+3X90UR3w7nj5MLO20vkB6YGE9UAKXjdvNfCpPpCOr+bK0750/UzLpf3afp0OAAAAABo29FuwJOFi/8iTctVXHf4/AuIpRjyxSUVskjSipU0xguy6vyzcAAAMkPNw1cuetaWL/ANEsAee76Al8Sq9O9SW01r9SIAAAAAAei4ba7cOtt6tLlf0BE4Jao12weyaa/wB+gAqZPmm35bZgaaMAAAAOuMtcmpPvNHI3qlyXQl+WSYF+YG+wAAAAAAIPFlrVW/Ev2KxFjxafSuHfq2VyAAAAAAO2Nc6ubTvoZOMIuWugA3yI8mTbHxJ/5OZN4vXyZspdppMhAAAAGgAFtw6/1alB+/Dp815JZQQnKuanB6ST3LTGzq7FpZ7Evs/qBLA+QAGJSUIuUnoluaW310rWySXw7lXl5cr3yxTjBbLX/IHPIu9a6U9k9l4RyAAAAAAALDhNHqq16dFp+4J3Ba+TE5nvOTf02AGnGqeeiNqXWt/Z/wCopD1dkI2VyhNaxktGjzF9MqLpVT3i9/KA5gAAFq2kk22b11ytmoQWrZb4uLCiKa0lPTrL+AIVPDpzXNbLkXjdk2vDx610rUn5l1O4AJJJKKSXwAAHOzHps15q4tvvoRLuGx3pk0/yy6ongChtqsply2R0+PZmhf2Vwti4Timn5KnLxJY2jT5oPZ+PmBGAAA2hGU5xhFayk0kalnwXH5rJXyXsx6R+YFvTBVVQrW0UkDcACv4rievBWQWtkO35kWAA8l9DKTb0SbfgtOKYDi3fQun44rt8SPwunnslbL3YbfMCbiY6x60n77XtP9juAAAAAAAAAAMSipxcZLVPdGQBSZVDx7eX8L6xflHEuM+n1qHp70eqKmqE7pqFcW29kBvj0SyLo1w77vwj0lNUaao1wWiSOOBiRxa+zm/eZKAAAAAABHePCtP0opJvVpEgAQ/g0CTKClucpVSjt1A5gyYAAAAAAAMqLb6I6xp7y/QDnGDk+iM4mHVjJ8i9p7yZISSWiMgAAAAAAAAAAAAAGGk90aOqHh/qABylFI1AA6Rri99Toq4rsYAG6MgAAAAAAAAAf//Z" alt="" />
                  <div className="px-3">
                    <h3 className="mb-0">{post.Name}</h3>
                    <p className="mb-2">{post.Platform}</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      ))}
        </div>
    </div>
  );
};

export default Practice;
