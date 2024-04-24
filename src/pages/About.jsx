import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Yatra Chalo helps you travel anywhere in the world easily and safely. It makes planning your trip simple and worry-free. Whether you've traveled a lot or it's your first trip, Yatra Chalo makes everything easy. You can book where to stay, how to get there, and find all the info you need for your trip. Come join us and see how Yatra Chalo makes traveling fun and stress-free!
          </p>
          <br />
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
