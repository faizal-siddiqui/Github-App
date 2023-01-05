import { Box, Skeleton, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlllRepo } from "../redux/data.actions";
import PageLayout from "../src/components/PageLayout/PageLayout";

const Home = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const all = useSelector((store) => store?.all);

  useEffect(() => {
    dispatch(getAlllRepo(page));
  }, [page]);

  if (all?.loading) {
    return (
      <Stack>
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
      </Stack>
    );
  }

  if (all?.error) {
    return <h1> Error.....</h1>;
  }

  return (
    <Box>
      <PageLayout data={all?.data} page={page} setPage={setPage} />
    </Box>
  );
};

export default Home;
