import { Box, Skeleton, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJavascriptRepo } from "../redux/data.actions";
import PageLayout from "../src/components/PageLayout/PageLayout";

const Javascript = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const javascript = useSelector((store) => store?.javascript);

  useEffect(() => {
    dispatch(getJavascriptRepo(page));
  }, [page]);

  if (javascript?.loading) {
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

  if (javascript?.error) {
    return <h1> Error.....</h1>;
  }

  return (
    <Box>
      <PageLayout data={javascript?.data} page={page} setPage={setPage} />
    </Box>
  );
};

export default Javascript;
