import { Box, Skeleton, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCSSRepo } from "../redux/data.actions";
import PageLayout from "../src/components/PageLayout/PageLayout";

const Css = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const css = useSelector((store) => store?.css);

  useEffect(() => {
    dispatch(getCSSRepo(page));
  }, [page]);

  if (css?.loading) {
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

  if (css?.error) {
    return <h1> Error.....</h1>;
  }

  return (
    <Box>
      <PageLayout data={css?.data} page={page} setPage={setPage} />
    </Box>
  );
};

export default Css;
