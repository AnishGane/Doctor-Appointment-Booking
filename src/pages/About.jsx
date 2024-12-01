import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col sm:flex-row gap-12">
        <img
          src={assets.about_image}
          alt=""
          className="w-full md:max-w-[360px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            eos ipsa cumque nulla sunt, unde suscipit perferendis rem aliquam
            blanditiis consectetur voluptatum quaerat dolor repudiandae possimus
            omnis quia tenetur iste repellendus quam placeat. Quam reiciendis
            nemo eum laudantium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            magni enim inventore commodi iure quidem suscipit repudiandae, iste
            ducimus, quibusdam quam id nemo exercitationem temporibus sunt quo
            qui at, distinctio sit? Exercitationem incidunt voluptatibus sequi
            cum eum eligendi impedit, laudantium minima omnis non enim possimus
            optio iure eaque, id blanditiis.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rem
            neque dicta mollitia totam animi ad illo, porro alias quis ut quasi
            fuga veniam natus, autem doloribus! Sunt?
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] text-gray-600  hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>EFFIECENY:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENEINCE:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            officia.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            blanditiis vel sint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
