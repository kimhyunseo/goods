import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useRef, useState } from "react";

const Banner = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 9; // 실제 슬라이드 개수
  const settings = {
    infinite: true,
    dots: false,
    arrows: false,
    afterChange: (index) => setCurrentSlide(index),
  };
  return (
    <div className="banner-wrapper">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>

      {/* 화살표 버튼 */}
      <div className="slide-controls">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="arrow-button"
        >
          <FaChevronLeft size={20} />
        </button>

        <div className="index-text">
          {currentSlide + 1} of {totalSlides}
        </div>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="arrow-button"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
