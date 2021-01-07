import React from "react";
import { Box, Text, Heading, Flex, Icon } from "bumbag";
import { faPlusSquare, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

function Tasks(props) {
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
          Tasks
        </Heading>
        <Text fontWeight="600" fontSize="14px" color="#3751FF">
          View details
        </Text>
      </Flex>
      <Box
        fontSize="12px"
        marginLeft="32px"
        marginTop="8px"
        marginBottom="32px"
      >
        <Text fontWeight="600" color="#B7B9C5">
          Today
        </Text>
      </Box>
      <Flex
        width="546px"
        height="58px"
        justifyContent="space-between"
        alignItems="center"
        fontWeight="600px"
        fontSize="14px"
        borderBottom={props.bottom ? '' : "1px solid #dfe0eb"}
      >
        <Text fontWeight="600" fontSize="14px" color="C5C7CD" marginLeft="32px">
          Create new task
        </Text>
        <Icon
          aria-label="Settings"
          icon={faPlusSquare}
          type="font-awesome"
          fontSize="24px"
          marginRight="32px"
          color="#F0F1F7"
        />
      </Flex>
      <Flex
        width="546px"
        height="58px"
        justifyContent="space-between"
        alignItems="center"
        fontWeight="600px"
        fontSize="14px"
        borderBottom={props.bottom ? '' : "1px solid #dfe0eb"}
      >
        <Flex marginLeft="32px">
          <Icon
            aria-label="Settings"
            icon={faCircle}
            type="font-awesome"
            fontSize="24px"
            marginRight="16px"
            color="#F0F1F7"
          />
          <Text>Finish ticket update</Text>
        </Flex>
        <Flex
          width="74px"
          height="24px"
          borderRadius="8px"
          backgroundColor="FEC400"
          color="#FFFFFF"
          justifyContent="center"
          alignItems="center"
          marginRight="32px"
        >
          <Text fontSize="11px" fontWeight="700">
            URGENT
          </Text>
        </Flex>
      </Flex>
      
      <Flex
        width="546px"
        height="58px"
        justifyContent="space-between"
        alignItems="center"
        fontWeight="600px"
        fontSize="14px"
        borderBottom={props.bottom ? '' : "1px solid #dfe0eb"}
      >
        <Flex marginLeft="32px">
          <Icon
            aria-label="Settings"
            icon={faCircle}
            type="font-awesome"
            fontSize="24px"
            marginRight="16px"
            color="#F0F1F7"
          />
          <Text>Create new ticket example</Text>
        </Flex>
        <Flex
          width="74px"
          height="24px"
          borderRadius="8px"
          backgroundColor="#29CC97"
          color="#FFFFFF"
          justifyContent="center"
          alignItems="center"
          marginRight="32px"
        >
          <Text fontSize="11px" fontWeight="700">
            NEW
          </Text>
        </Flex>
      </Flex>
      
      
      <Flex
        width="546px"
        height="58px"
        justifyContent="space-between"
        alignItems="center"
        fontWeight="600px"
        fontSize="14px"
        borderBottom={props.bottom ? '' : "1px solid #dfe0eb"}
      >
        <Flex marginLeft="32px">
          <Icon
            aria-label="Settings"
            icon={faCheckCircle}
            type="font-awesome"
            fontSize="24px"
            marginRight="16px"
            color="#3751FF"
          />
          <Text>Update ticket report</Text>
        </Flex>
        <Flex
          width="74px"
          height="24px"
          borderRadius="8px"
          backgroundColor="#F0F1F7"
          color="#9FA2B4"
          justifyContent="center"
          alignItems="center"
          marginRight="32px"
        >
          <Text fontSize="11px" fontWeight="700">
            DEFAULT
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Tasks;
