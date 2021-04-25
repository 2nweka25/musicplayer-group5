import { ResponsiveType } from "react-multi-carousel";

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 3,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
};

const settings = {
  arrows: false,
  partialVisible: true,
  responsive,
};

export default settings;
