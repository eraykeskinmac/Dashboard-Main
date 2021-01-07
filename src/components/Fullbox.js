import React from "react";
import { Text, Flex } from "bumbag";

function FullBox() {
  return (
    <Flex
      width="258px"
      height="134px"
      backgroundColor="#FFFFFF"
      borderRadius="8px"
      marginLeft="35px"
      border="1px solid #DFE0EB"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      boxSizing="border-box"
      _hover={{
        border: "1px solid blue",
        color: "blue",
      }}
      cursor= 'pointer'
    >
      <Text fontSize="20px" fontWeight="700" color="#9FA2B4">
        Unresolved
      </Text>
      <Text fontWeight="700" fontSize="40px" marginTop="8px">
        60
      </Text>
    </Flex>
  );
}

export default FullBox;
