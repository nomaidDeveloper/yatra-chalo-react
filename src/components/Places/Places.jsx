import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/varanasi_ghats.png";
import Img3 from "../../assets/places/amber-fort.jpg";
import Img4 from "../../assets/places/mysore-palace.jpg";
import Img5 from "../../assets/places/Rishikesh.png";
import Img6 from "../../assets/places/kedarnath.jpg";

const PlacesData = [
  {
    img: Img6,
    title: "Kedarnath Temple",
    location: "Uttarakhand, India",
    description: "Kedarnath Temple, located in the Garhwal Himalayas at an altitude of 3,583 meters (11,755 feet) above sea level, is one of the holiest Hindu temples dedicated to Lord Shiva. It is part of the Chota Char Dham pilgrimage circuit in Uttarakhand and holds immense spiritual significance.",
    price: 6000,
    type: "Spiritual Pilgrimage",
  },
  {
    img: Img2,
    title: "Varanasi Ghats",
    location: "Varanasi, India",
    description: "Varanasi, also known as Kashi or Banaras, is one of the world's oldest continually inhabited cities. It is famous for its ghats, where pilgrims perform ritual bathing in the Ganges River and cremation ceremonies are conducted.",
    price: 6200,
    type: "Spiritual Experience",
  },
  {
    img: Img5,
    title: "Rishikesh",
    location: "Uttarakhand, India",
    description: "Rishikesh, nestled in the foothills of the Himalayas along the banks of the Ganges River, is a renowned spiritual center and yoga capital of the world. It attracts seekers and adventure enthusiasts alike.",
    price: 5800,
    type: "Yoga Retreat",
  },
  {
    img: Img1,
    title: "Taj Mahal",
    location: "Agra, India",
    description: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",
    price: 6700,
    type: "Cultural Heritage",
  },
  {
    img: Img3,
    title: "Amber Fort",
    location: "Jaipur, India",
    description: "Amber Fort, located in Jaipur, Rajasthan, is known for its artistic Hindu style elements. The fort and its surroundings are decorated with beautiful palaces, halls, gardens, and temples, offering a glimpse into India's royal history.",
    price: 7500,
    type: "Historical Landmark",
  },
  {
    img: Img4,
    title: "Mysore Palace",
    location: "Mysore, India",
    description: "Mysore Palace, also known as the Amba Vilas Palace, is a historical palace situated in the city of Mysore in Karnataka. It is renowned for its architectural grandeur and houses a splendid collection of art and artifacts.",
    price: 6000,
    type: "Royal Splendor",
  },
  
  
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
