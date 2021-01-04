import React from "react";
import { Text, Flex } from "bumbag";

function FullBox() {
  return (
    <Flex>
      <Flex
        width="258px"
        height="134px"
        backgroundColor="FFFFFF"
        marginLeft="33px" 
        borderRadius="8px"
        border="1px solid #DFE0EB"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Text fontSize="20px" fontWeight="700" color="9FA2B4">
          Unresolved
        </Text>
        <Text fontWeight="700" fontSize="40px" marginTop="8px">
          60
        </Text>
      </Flex>
    </Flex>
  );
}

export default FullBox;
