import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * This component wraps its content in a full-width container that takes up the entire height of the screen. 
 * It supports a dark or light background, and accepts additional properties to customize the layout.
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" w="100%" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
