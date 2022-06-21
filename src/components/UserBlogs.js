import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
const UserBlogs = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios
      .get(`https://blogmernkalai.herokuapp.com/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  // console.log(user);
  return (
    <section id="service" className="service-section img-bg pt-100 pb-100 mt-150">
<div className="container">
    <div className="row justify-content-center">
        <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-10">
            <div className="section-title text-center mb-50">
                <h1>Our services</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
        </div>
    </div>
<div className="row">
          {user && user.blogs && user.blogs.map((blog, index) => (
            <Blog
              id={blog._id}
              key={index}
              isUser={true}
              title={blog.title}
              description={blog.description}
              imageURL={blog.image}
              userName={user.name}
            />
          ))}
</div>
</div>
</section>
  );
};

export default UserBlogs;