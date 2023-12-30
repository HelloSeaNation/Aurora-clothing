import React, { useState, useEffect } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Link } from "react-router-dom";

interface Product {
  name: string;
  imgUrl: string;
  id: number;
}

const NewReleaseCarousel = ({ clothingData }: { clothingData: Product[] }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(clothingData); // Just set the products directly
  }, [clothingData]);

  const groupCount = Math.ceil(products.length / 4);

  const renderGroups = () => {
    return [...Array(groupCount)].map((_, groupIndex) => (
      <div key={groupIndex}>
                   
        <Flex key={groupIndex} justifyContent="space-between">
          {products
            .slice(groupIndex * 4, (groupIndex + 1) * 4)
            .map((product, index) => (     <Link key={index} to={`/${product.id}`}>
              <Box key={index} flexBasis={"25%"} padding={"5px 20px 50px 20px"}>

                  <Image
                    key={index}
                    src={product.imgUrl}
                    alt={product.name}
                    style={{ width: "100%", cursor: "pointer", height: "auto" }}
                  />    
              </Box> </Link>
            ))}
        </Flex>
   
      </div>
    ));
  };

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      selectedItem={0}
      autoPlay={true}
      emulateTouch={true} // For smoother touch interaction
      interval={3000}
      transitionTime={2000}
    >
      {renderGroups()}
    </Carousel>
  );
};

export default NewReleaseCarousel;
