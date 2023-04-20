import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, imgAlt }) => {
  // Had to switch fallback picture because I had problems loading the provided images

  return (
    <VStack style={{backgroundColor:'white', color:'black'}}>
      <Image height='400px' src={imageSrc} fallbackSrc={ imgAlt}
        objectFit='fill'
        borderRadius='3xl'
      />
      <Heading as='b'>{ title}</Heading>
      <label>{description}</label>
      <HStack style={{alignSelf:'self-start'}}>
        <Text as='b'>See more</Text>
         <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
