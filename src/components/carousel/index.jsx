import React, { useContext } from "react";
import Slider from "react-slick";
import { Movie } from "../Movie";
import { Context } from "../../context/Context";
import { DetailsModal } from "../DetailsModal";
import { SampleNextArrow } from "./components/SampleNextArrow";
import { SamplePrevArrow } from "./components/SamplePrevArrow";

export function Carousel({ data, title }) {
  const { isOpen } = useContext(Context);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="pb-11 text-white">
      <h2 className="font-semibold mb-3">{title}</h2>
      <Slider {...settings}>
        {data?.results.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </Slider>
      {isOpen && <DetailsModal />}
    </div>
  );
}
