import React from "react";
import Slider from "react-slick";

export function Carousel({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  console.log(data?.results);  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data?.results.map((filme) => (
          <div key={filme.id}>
            <img
              src={`
https://image.tmdb.org/t/p/w500/${filme?.poster_path}`}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
