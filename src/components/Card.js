import { Heading, HStack, Image, Text, VStack, Stack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      as="a"
      href="#"
      cursor="pointer"
      rounded="md"
      color="black"
      backgroundColor="white"
    >
      <Image rounded="md" src={imageSrc} alt="Project Image" />
      <VStack spacing={4} p={4} alignItems="flex-start">
        <Heading as="h3" size="md" color="black" >{title}</Heading>
        <Text fontSize="lg" color="#64748b" >{description}</Text>
        <HStack alignItems="center">
          <Text fontSize="md" fontWeight="bold" >See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
