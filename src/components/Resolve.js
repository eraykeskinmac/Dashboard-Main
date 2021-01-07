import React from "react";
import { Text, Flex } from "bumbag";

function Resolve(props) {
  return (
    <Flex
      height="110px"
      width="430px"
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="column"
      borderBottom={props.bottom ? '' : "1px solid #dfe0eb"}
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
    </Flex>
  );
}

export default Resolve;
