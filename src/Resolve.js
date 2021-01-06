import React from "react";
import { Text, Flex } from "bumbag";

function Resolve() {
  return (
    <Flex
      height="110px"
      width="430px"
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="column"
    >
      <Flex
        justifyContent="space-evenly"
        alignItems="center"
        flexDirection="column"
      >
        <Text fontSize="16px" fontWeight="600" color="9FA2B4" marginTop="16px">
          Resolved
        </Text>
        <Text fontWeight="700" fontSize="24px" marginTop="8px">
          449
        </Text>
      </Flex>
      <Flex
        width="430px"
        height="1px"
        backgroundColor="DFE0EB"
        marginTop="16px"
      ></Flex>
    </Flex>
  );
}

export default Resolve;
