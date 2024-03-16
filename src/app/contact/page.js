"use client";
import React , {useRef,useEffect} from "react";
import "./style.scss";
import Image from "next/image";
import bgImg from "../../../public/images/pb1xbarbers/123.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from 'next/navigation';
import Footer from "../../components/Footer"
function page() {
  const formList = [
    { name: "Name", id: "name", placeholder: "Name", type: "input" },
    {
      name: "Email",
      id: "email_address",
      placeholder: "Email Address",
      type: "email",
    },
    {
      name: "PhoneNumber",
      id: "PhoneNumber",
      placeholder: "Phone Number",
      type: "text",
    },
  ];
  gsap.registerPlugin(useGSAP);

  const container = useRef();
  const router = useRouter()
  useEffect(() => {
    // gsap code here...
    gsap.set("nav", { y: -100 });
    // gsap.set(".letter-wrapper", { y: 300 });
    // gsap.set(".item-copy-wrapper p", { y: 70 });
    gsap.set("nav",  {opacity:  1})
    // gsap.set(".header-item-1",  {opacity:  1})
    // gsap.set(".header-item-2",  {opacity:  1})
    // gsap.set(".item-copy-wrapper",  {opacity:  1})
    // gsap.set(".letter",  {opacity:  1})
    gsap.defaults({ duration: 1, ease: "power3.out" });
    const tl = gsap.timeline({
      delay: 0.5,
    }); 
    tl.to("nav", { y: 0 }, "<")
      ; 
  }, []);
  return (
    <div className="contact-container">
      <section
        className="section appoin"
        id="appointment"
        aria-label="appointment"
      >
        <div className="container">
          <figure className="card-banner" style={{ height: 200 }}>
            <Image
              src={bgImg}
              alt="Image"
              // style={{ width: 160, height: 160 ,}}
            />

            <div className="card-child">
              <p>BOOK AN APPOINTMENT</p>
            </div>
          </figure>
          <div className="appoin-card">
            <div className="card-content">
              <h2 className="h2 section-title">Appointment Details</h2>

              <p className="section-text">
                We're so glad to have you booking with us. Please fill in your
                details and you will receive a confirmation of your appointment
              </p>

              <form action="" className="appoin-form">
                {formList.map((item, idx) => (
                  <div className="form__group field" key={idx}>
                    <input
                      type={item.type}
                      className="form__field"
                      placeholder={item.placeholder}
                      name={item.name}
                      id={item.id}
                      required
                    />
                    <label for={item.id} className="form__label">
                      {item.placeholder}
                    </label>
                  </div>
                ))}

                <div className="input-wrapper">
                  <label>Select A Service Category</label>
                  <select name="category" className="input-field">
                    <option value="Select category">Select category</option>
                    <option value="Beauty & spa">Beauty & spa</option>
                    <option value="Body massage">Body massage</option>
                    <option value="Shaving & Facial">Shaving & Facial</option>
                    <option value="Hair Color">Hair Color</option>
                  </select>
                </div>

                <input
                  type="date"
                  name="date"
                  required
                  className="input-field date"
                />

                <button type="submit" className="form-btn">
                  <span className="span">Book Appointment</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </button>
              </form>
            </div>

            {/* <figure className="" style={{}}> */}
            <Image src={bgImg} alt="Image" style={{}} />
            {/* </figure> */}
          </div>
          <div style={{ height: "3em" }}></div>
          {/* <Footer /> */}
        </div>
      </section>
    </div>
  );
}

export default page;
