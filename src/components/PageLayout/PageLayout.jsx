import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import Cards from "../Cards/Cards";
import Pagination from "../pagination/Pagination";

const PageLayout = ({ data, page, setPage }) => {
  return (
    <Box>
      <Grid
        templateColumns={{
          lg: "repeat(4, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(1, 1fr)",
        }}
        gap={{ lg: "20px", md: "15px", sm: "10px" }}
        m="2%"
      >
        {data?.items?.map((item) => {
          return <Cards key={item.id} item={item} />;
        })}
      </Grid>
      <Box w="20%" m="auto">
        <Pagination page={page} setPage={setPage} />
      </Box>
    </Box>
  );
};

export default PageLayout;
