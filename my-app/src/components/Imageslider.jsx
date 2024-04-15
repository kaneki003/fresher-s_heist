import { Image, Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides, h, w }) => {
  return (
    <Box className="container" height={h}>
      <Carousel 
        infiniteLoop 
        autoPlay // This will enable automatic sliding
        interval={3000} // You can set the interval time (in ms) here
        gap={10} 
        itemSize={3} 
        width={w} 
        showThumbs={false}
      >
        {slides.map((slide, index) => (
          <Box key={index} width={w}>
            <Image src={slide.image} height={h} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageSlider;

