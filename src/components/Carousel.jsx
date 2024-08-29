import React, { useContext } from "react";
import Slider from "react-slick";
import { Movie } from "./Movie";
import { Context } from "../context/Context";
import { DetailsModal } from "./DetailsModal";

export function Carousel({ data }) {
  const {isOpen } = useContext(Context);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data?.results.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </Slider>
      {isOpen && <DetailsModal />}
    </div>
  );
}
