"use client"
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/navigation';
import bookmark from "../../../public/images/pb1xbarbers/bookmark.svg";
import Picture from "../../../public/images/pb1xbarbers/123.webp";
import "./services.css";
function index() {
  const useNavigationHook = (routeToGo) => {
    router.push(routeToGo, { scroll: false }); 
  };
  const router = useRouter()
  const servicesCategory = [
    { name: "ALL PRICING", id: 0, src: Picture },
    { name: "Facial Trim", id: 1, src: Picture },
    { name: "Hair Dying", id: 2, src: Picture },
    { name: "Quick Shave", id: 3, src: Picture },
    { name: "Hair Wash", id: 4, src: Picture },
    { name: "Hair Cut", id: 5, src: Picture },
    { name: "Waxing", id: 6, src: Picture },
  ];

  const servicesList = [
    {
      title: "Hair colouring",
      src: Picture,
      categoryId: 2,
      description: "Clean & Simple 30mins",
      price: "£40",
    },
    {
        title: "Beard Conditioning",
      categoryId: 1, src: Picture,
      description: "Clean & Simple 30mins",
      price: "£40",
    },
    {
        title: "Beard Dyeing",src: Picture,
      categoryId: 2,  
      description: "Clean & Simple 30mins",
      price: "£40",
    },
    {
        title: "Beard maintenance",
      categoryId: 2, src: Picture,
      description: "Clean & Simple 30mins",
      price: "£40",
    },
    {
        title: "Beard trim",
      categoryId: 2, src: Picture,
      description: "Clean & Simple 30mins",
      price: "£40",
    },
    {
        title: "Buzz Cut",
      categoryId: 5, src: Picture,
      description: "Clean & Simple 30mins",
      price: "£40",
    },
    {
        title: "Eyebrow Tinting",
      categoryId: 1, 
      description: "Clean & Simple 30mins",
      price: "£40",src: Picture,
    },
    {
        title: "Eyebrow Trimming",
      categoryId: 1, 
      description: "Clean & Simple 30mins",
      price: "£40",src: Picture,
    },
  ];


  return (
    <div className="services-parent">
        <div className="services-container">
    <h1>Popular Services</h1>
      {/* <div className="services-controls">
        {servicesCategory.map((link, idx) => {
          return (
            <div className="service-link-item" key={idx}>
              <div className="service-link-item-holder">
                <Image src={link.src} />
                <div className="service-link" onClick={handleCategoryChange}>
                  {link.name}
                </div>
              </div>
            </div>
          );
        })}
      </div> */}

      <div className="services-list">
        {servicesList.map((link, idx) => {
          return (
            <div className="service-list-item" key={idx}>
              <div className="service-list-item-holder">
                <div> 
                  <Image
                  alt="image"
                    src={link.src}
                    style={{ width: 60, height: 60, borderRadius: "50%" }}
                  />
                </div>
                <div className="service-list-text" onClick={useNavigationHook}>
                  <p>{link.title}</p>
                  <p>{link.description}</p>
                </div>
                <div>
                <Image
                    src={bookmark}
                    style={{ width: 60, height: 60, borderRadius: "50%" }}
                  />
                    <p>{link.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

   <div className="cta-button-container" onClick={() => useNavigationHook('/contact')}>
   <button className="cta-button">
        Book An Appointment
      </button>
   </div>
    </div>
    </div>
  );
}

export default index;
