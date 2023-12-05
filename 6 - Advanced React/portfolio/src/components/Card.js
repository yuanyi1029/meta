import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
  <VStack color="black" backgroundColor="white" borderRadius="xl">
    <Image src={ imageSrc } borderRadius="xl"/>
    <VStack padding="4" alignItems="flex-start">
      <Heading as="h3" size="md">{ title }</Heading>
      <Text>{ description }</Text>
      <HStack>
        <p>See more</p>
        <FontAwesomeIcon icon={ faArrowRight }/>
      </HStack>
    </VStack>
  </VStack>
  );
};

export default Card;
