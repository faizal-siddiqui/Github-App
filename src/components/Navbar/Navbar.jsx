import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <Flex justify='space-around' align='center' bgColor='lightcoral' h="60px" fontWeight='bold' textShadow='1px 1px 1px orange'>
        <Box>
          <Link to="/">All Repositories</Link>
        </Box>
        <Box>
          <Link to="/html">HTML Repositories</Link>
        </Box>
        <Box>
          <Link to="/css">CSS Repositories</Link>
        </Box>
        <Box>
          <Link to="/javascript">JAVASCRIPT Repositories</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
