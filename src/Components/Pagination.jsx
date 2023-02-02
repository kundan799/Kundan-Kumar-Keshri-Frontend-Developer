import { Button } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ onChange, total, current }) => {
  let pages = new Array(total).fill(0).map((item, index) => (
    <Button
      variant="solid"
      colorScheme="blue"
      disabled={current === index + 1}
      onClick={() => onChange(index + 1)}
      key={`page-${index + 1}`}
    >
      {index + 1}
    </Button>
  ));

  return total !== 0 && pages;
};
export default Pagination;
