import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { cn } from "../../lib/utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const SliderComp = ({
  padding = "30px",
  children,
}: {
  padding?: string;
  children: React.ReactNode;
}) => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const count = React.Children.count(children);

  const settings = {
    className: "center",
    centerMode: Array.isArray(children) && children.length > 1,
    infinite: false,
    centerPadding: padding,
    slidesToShow: 1,
    speed: 500,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
  };

  const handleDotClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="overflow-hidden min-h-0 min-w-0 cursor-grab">
      <div className="mb-3">
        <Slider ref={sliderRef} {...settings}>
          {children}
        </Slider>
      </div>

      <div className="w-fit flex items-center gap-1 mx-auto">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
              "w-3 h-3 rounded-[50%] bg-[#c1c1c1]",
              index === activeSlide && "bg-primary"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComp;
