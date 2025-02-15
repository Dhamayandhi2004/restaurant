/* eslint-disable no-unused-vars */
import React from "react";
import {Link } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

function About() {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h5 className="heading">ABOUT US</h5>
              <p>The only thing we&apos;re serious about is food.</p>
            </div>
            <p className="mid">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              reprehenderit enim? Vero eligendi, repellat harum sed tempore
              atque ut. Ratione repudiandae harum accusamus expedita nisi
              nesciunt fugiat aliquid assumenda placeat deserunt? Aliquam
              perspiciatis expedita nesciunt veniam consequuntur modi quia enim,
              aliquid beatae fugiat molestias perferendis error cupiditate in at
              reprehenderit!
            </p>
            <Link to={"/"}>Explore Menu{" "} 
            <span>
                 <HiOutlineArrowNarrowRight/>
                 </span>      
            </Link>
          </div>
          <div className="banner">
            <img src="/about.png" alt="about"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
