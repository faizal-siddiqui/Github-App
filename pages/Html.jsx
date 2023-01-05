import { Box, Skeleton, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHtmlRepo } from "../redux/data.actions";
import PageLayout from "../src/components/PageLayout/PageLayout";

const Html = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const html = useSelector((store) => store?.html);

  useEffect(() => {
    dispatch(getHtmlRepo(page));
  }, [page]);

  if (html?.loading) {
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

  if (html?.error) {
    return <h1> Error.....</h1>;
  }

  return (
    <Box>
      <PageLayout data={html?.data} page={page} setPage={setPage} />
    </Box>
  );
};

export default Html;
