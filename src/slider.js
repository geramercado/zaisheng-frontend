// Slider.js
import logo from "./img/logo.png"
import React, { useState } from "react";
import SliderItem from "./SliderItem";
import "./slider.css";

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="slider-container">
      <div className="navbar">
        <div className="logo"><img src={logo}></img> </div>
        <div className="text font-bold">Zàishēng复活</div>
        <div className="dropdown" onClick={toggleDropdown}>
          <button className="dropdown-btn"><i class="bi bi-list"></i></button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div>
          )}
        </div>
      </div>
      <button className="prev-btn" onClick={handlePrev}>
        Prev
      </button>
      <SliderItem>{items[currentIndex]}</SliderItem>
      <button className="next-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Slider;
