import React from "react";
import { Box, Text, Heading, Flex } from "bumbag";

function TaskBar(props) {
  return (
    <Box
      width="546px"
      height="336px"
      backgroundColor="#FFFFFF"
      border="1px solid #DFE0EB"
      borderRadius="8px"
      boxSizing="border-box"
      marginRight="32px"
      marginLeft="35px"
      marginTop="35px"
    >
      <Flex
        justifyContent="space-between"
        marginTop="32px"
        marginLeft="32px"
        marginRight="32px"
      >
        <Heading fontWeight="700" fontSize="19px">
          Unresolved tickets
        </Heading>
        <Text fontWeight="600" fontSize="14px" color="#3751FF">
          View details
        </Text>
      </Flex>
      <Box fontSize="12px" marginLeft="32px" marginTop="8px" marginBottom="32px">
        <Text fontWeight="600" color="#B7B9C5">
          Group:
        </Text>
        <Text fontWeight="400" color="#6D7188">
          Support
        </Text>
      </Box>

      <Flex
        width="546px"
        height="58px"
        justifyContent="space-between"
        alignItems="center"
        fontWeight="600px"
        fontSize="14px"
        borderBottom={props.bottom ? "" : "1px solid #dfe0eb"}
      >
        <Text marginLeft="32px">Waiting on Feature Request</Text>
        <Text color="#9FA2B4" marginRight="32px">4238</Text>
      </Flex>
      <Flex
        width="546px"
        height="58px"
        justifyContent="space-between"
        alignItems="center"
        fontWeight="600px"
        fontSize="14px"
        borderBottom={props.bottom ? "" : "1px solid #dfe0eb"}
      >
        <Text marginLeft="32px">Waiting on Feature Request</Text>
        <Text color="#9FA2B4" marginRight="32px">4238</Text>
      </Flex>
      <Flex
        width="546px"
        height="58px"
        justifyContent="space-between"
        alignItems="center"
        fontWeight="600px"
        fontSize="14px"
        borderBottom={props.bottom ? "" : "1px solid #dfe0eb"}
      >
        <Text marginLeft="32px">Waiting on Feature Request</Text>
        <Text color="#9FA2B4" marginRight="32px">4238</Text>
      </Flex>
      <Flex
        width="546px"
        height="58px"
        justifyContent="space-between"
        alignItems="center"
        fontWeight="600px"
        fontSize="14px"
        borderBottom={props.bottom ? "" : "1px solid #dfe0eb"}
      >
        <Text marginLeft="32px">Waiting on Feature Request</Text>
        <Text color="#9FA2B4" marginRight="32px">4238</Text>
      </Flex>
    </Box>
  );
}

export default TaskBar;
