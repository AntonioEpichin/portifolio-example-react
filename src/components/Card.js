import React from 'react';
import { Box, VStack, Image, Heading, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ shadow: "md" }} // Optional: add a hover effect
    >
      <Image src={imageSrc} alt={`Image of ${title}`} />

      <VStack
        p={5}
        align="start"
      >
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <FontAwesomeIcon icon={faArrowRight} />
      </VStack>
    </Box>
  );
};

export default Card;
