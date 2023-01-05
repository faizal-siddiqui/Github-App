import { StarIcon } from "@chakra-ui/icons";
import { Flex, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CgGitFork } from "react-icons/cg";
const Cards = ({ item }) => {
  return (
    <GridItem p="15px" boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'>
      <Image src={item.owner.avatar_url} alt={item.name} />
      <Text>{item.name}</Text>
      <Text>{item.language}</Text>
      <Flex justify='space-between'>
        <Flex align='center'>
          <StarIcon color='yellow.400' />
          {item.stargazers_count}
        </Flex>
        <Flex align='center'>
          <CgGitFork color="blue" />
          {item.forks_count}
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default Cards;
