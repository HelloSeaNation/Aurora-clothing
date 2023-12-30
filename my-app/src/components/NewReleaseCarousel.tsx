import React, { useState, useEffect } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

interface Product {
  name: string;
  imgUrl: string;
}

const NewReleaseCarousel = ({ clothingData }: { clothingData: Product[] }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(clothingData);
  }, [clothingData]);

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    renderThumbs={(children: React.ReactChild[]) => children} // Hide default thumbnails
      selectedItem={0}
    >
      {products.map((product, index) => (
        <div key={index} style={{ display: "flex" }}>
          {products.slice(index, index + 4).map((prod, idx) => (
            <Box key={idx} flexBasis={"25%"} padding={"30px"}>
              <Image src={prod.imgUrl} alt={prod.name} style={{ width: "100%" }} />
            </Box>
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default NewReleaseCarousel;