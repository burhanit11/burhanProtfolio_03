import React from "react";
import Service from "../component/Service";

const About = () => {
  return (
    <>
      <div
        id="About"
        class="grid  md:grid-cols-2 sm:grid-cols-1 gap-2 py-10 about"
      >
        {/* left side ========================= */}
        <div className="flex justify-center items-center">
          <div className="flex justify-center text-center flex-col shadow hover:shadow-lg  rounded-lg card1">
            <h1>08</h1>
            <p className="text-2xl">Years of Experience</p>
            <div className=" card3">
              <div className="flex justify-center text-center rounded-lg  shadow card2">
                <h2>100%</h2>
                <span>
                  <h3>Clients</h3>
                  <h3>Satisfections</h3>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* rigth side ======================== */}
        <div className="right-side">
          <h1>My Advantage</h1>
          <p>
            Must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account the system and expound the actual and praising pain was
            born.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-2  gap-2">
            <div className="flex justify-center text-center rounded-lg flex-col div1 div11">
              <h2>98%</h2>
              <p>Figma</p>
            </div>
            <div className="flex justify-center text-center rounded-lg flex-col div1 div12">
              <h2>92%</h2>
              <p>Sketch</p>
            </div>
            <div className="flex justify-center text-center rounded-lg flex-col div1 div13">
              <h2>88%</h2>
              <p>Photoshop</p>
            </div>
            <div className="flex justify-center text-center rounded-lg flex-col div1 div14">
              <h2>72%</h2>
              <p>Illustrator</p>
            </div>
            <div className="flex justify-center text-center rounded-lg flex-col div1 div15">
              <h2>43%</h2>
              <p>WordPress</p>
            </div>
            <div className="flex justify-center text-center rounded-lg flex-col div1 div16">
              <h2>37%</h2>
              <p>ReactJS</p>
            </div>
          </div>
        </div>
      </div>
      <Service />
    </>
  );
};

export default About;
