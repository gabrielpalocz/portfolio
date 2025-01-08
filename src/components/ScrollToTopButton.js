import React, { useEffect, useState } from 'react';
import { IconButton, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if user has scrolled more than 120px
      setIsVisible(window.scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="1000"
      display={isVisible ? 'block' : 'none'}
    >
      <IconButton
        aria-label="Scroll to top"
        backgroundColor="#18181b"
        size="lg"
        onClick={scrollToTop}
        rounded="full"
        boxShadow="lg"
        _hover={{ backgroundColor: '#797979' }}
      >
        <FontAwesomeIcon icon={faArrowUp} size="2x" color='white' />
      </IconButton>
    </Box>
  );
};

export default ScrollToTopButton;
