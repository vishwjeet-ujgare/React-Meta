import React from 'react'
import "./ScrollToTop.css"
export default function ScrollToTop() {

    function scrollOverTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Smooth scrolling
        });
    }

  return (
    <button id ="scroll-top-arrow-btn" onClick={scrollOverTop}>&#8593;</button>
  )
}
