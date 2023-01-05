import { Box, Button } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <Box>
      <Button disabled={page == 1} onClick={() => setPage(page - 1)}>
        Prev
      </Button>
      <Button disabled>{page}</Button>
      <Button onClick={() => setPage(page + 1)}>Next</Button>
    </Box>
  );
};

export default Pagination;
