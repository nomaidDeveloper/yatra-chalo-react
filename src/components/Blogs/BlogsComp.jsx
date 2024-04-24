import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";
const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "India offers a diverse range of destinations. Explore the iconic Taj Mahal in Agra, the bustling markets of Delhi, the serene backwaters of Kerala, and the historic forts of Rajasthan.",
    author: "Someone",
    date: "April 22, 2024",
  },
  {
    id: 2,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "The United States boasts stunning natural wonders and vibrant cities. Don't miss the majestic Grand Canyon in Arizona, the bustling streets of New York City, and the breathtaking beaches of California.",
    author: "Someone",
    date: "April 22, 2024",
  },
  {
    id: 3,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Japan blends tradition with modernity. Visit Tokyo for its neon-lit streets and cultural sites, Kyoto for its ancient temples and tea houses, and Hokkaido for its picturesque landscapes and ski resorts.",
    author: "Someone",
    date: "April 22, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
