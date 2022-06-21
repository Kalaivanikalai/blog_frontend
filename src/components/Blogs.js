import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import Banner from './banner';

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("https://blogmernkalai.herokuapp.com/api/blog")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);
  // console.log(blogs);
  return (
  
    <>
      <Banner/>

      <section id="service" className="service-section img-bg pt-100 pb-100 mt-150">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xxl-5 col-xl-6 col-lg-7 col-md-10">
						<div className="section-title text-center mb-50">
							<h1>All Blogs</h1>
							<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore.</p>
						</div>
					</div>
				</div>
        <div className="row">
          {blogs && blogs.map((blog, index) => (
            <Blog
              id={blog._id}
              isUser={localStorage.getItem("userId") === blog.user._id}
              title={blog.title}
              description={blog.description}
              imageURL={blog.image}
              userName={blog.user.name}
            />
          ))}
				
          </div>
      </div>
		</section>


    </>
  );
};

export default Blogs;