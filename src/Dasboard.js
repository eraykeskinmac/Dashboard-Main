import React from "react";
import { Box, PageWithSidebar, Text, Flex, Icon, Heading, Image } from "bumbag";
import FullBox from "./Fullbox";
import {
  faPoll,
  faTicketAlt,
  faLightbulb,
  faUsers,
  faUserTie,
  faBook,
  faCog,
  faMedal,
  faSearch,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

function Dasboard() {
  return (
    <PageWithSidebar
      sidebar={
        <Box height="100vh" backgroundColor="363740">
          <Flex justifyContent="center">
            <Flex
              marginTop="41px"
              width="32px"
              height="32px"
              backgroundColor="3751FF"
              borderRadius="50%"
            ></Flex>
            <Text
              color="A4A6B3"
              marginTop="45px"
              marginLeft="12px"
              marginBottom="65px"
            >
              Dashboard Kit
            </Text>
          </Flex>
          <Box fontSize="16px">
            <Flex backgroundColor="3F4049" height="56px" alignItems="center">
              <Flex height="56px" width="3px" backgroundColor="DDE2FF"></Flex>
              <Flex alignItems="center" marginLeft="24px">
                <Icon
                  color="white"
                  aria-label="Settings"
                  icon={faPoll}
                  type="font-awesome"
                  marginRight="20px"
                />
                <Text color="white">Overview</Text>
              </Flex>
            </Flex>

            <Flex height="56px" alignItems="center">
              <Flex alignItems="center" marginLeft="24px" color="A4A6B3">
                <Icon
                  aria-label="Settings"
                  icon={faTicketAlt}
                  type="font-awesome"
                  marginRight="20px"
                />
                <Text>Tickets</Text>
              </Flex>
            </Flex>
            <Flex height="56px" alignItems="center">
              <Flex alignItems="center" marginLeft="24px" color="A4A6B3">
                <Icon
                  aria-label="Settings"
                  icon={faLightbulb}
                  type="font-awesome"
                  marginRight="20px"
                />
                <Text>Ideas</Text>
              </Flex>
            </Flex>
            <Flex height="56px" alignItems="center">
              <Flex alignItems="center" marginLeft="24px" color="A4A6B3">
                <Icon
                  aria-label="Settings"
                  icon={faUsers}
                  type="font-awesome"
                  marginRight="20px"
                />
                <Text>Contacts</Text>
              </Flex>
            </Flex>
            <Flex height="56px" alignItems="center">
              <Flex alignItems="center" marginLeft="24px" color="A4A6B3">
                <Icon
                  aria-label="Settings"
                  icon={faUserTie}
                  type="font-awesome"
                  marginRight="20px"
                />
                <Text>Agents</Text>
              </Flex>
            </Flex>
            <Flex height="56px" alignItems="center">
              <Flex alignItems="center" marginLeft="24px" color="A4A6B3">
                <Icon
                  aria-label="Settings"
                  icon={faBook}
                  type="font-awesome"
                  marginRight="20px"
                />
                <Text>Article</Text>
              </Flex>
            </Flex>
            <Flex border="1px solid #3F4049"></Flex>

            <Flex height="56px" alignItems="center">
              <Flex alignItems="center" marginLeft="24px" color="A4A6B3">
                <Icon
                  aria-label="Settings"
                  icon={faCog}
                  type="font-awesome"
                  marginRight="20px"
                />
                <Text>Settings</Text>
              </Flex>
            </Flex>
            <Flex height="56px" alignItems="center">
              <Flex alignItems="center" marginLeft="24px" color="A4A6B3">
                <Icon
                  aria-label="Settings"
                  icon={faMedal}
                  type="font-awesome"
                  marginRight="20px"
                />
                <Text>Subscription</Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      }
      sidebarWidth="255px"
      backgroundColor="F7F8FC"
    >
      <Flex height="128px" alignItems="center" justifyContent="space-between">
        <Heading fontSize="400" marginLeft="30px">
          Overview
        </Heading>
        <Flex alignItems="center">
          <Flex color="C5C7CD">
            <Icon
              marginRight="28px"
              aria-label="Settings"
              icon={faSearch}
              type="font-awesome"
            />
            <Icon
              marginRight="33px"
              aria-label="Settings"
              icon={faBell}
              type="font-awesome"
            />
          </Flex>
          <Flex
            height="32px"
            width="1px"
            backgroundColor="C5C7CD"
            marginRight="32px"
          ></Flex>
          <Text marginRight="14px">Eray Keskin</Text>
          <Flex
            width="44px"
            height="44px"
            border="1.5px solid #DFE0EB"
            borderRadius="50%"
            marginRight="33px"
          >
            <Image
              src="/people.jpg"
              width="40px"
              height="40px"
              borderRadius="50%"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <FullBox />
        <FullBox />
        <FullBox />
        <FullBox />
      </Flex>
    </PageWithSidebar>
  );
}

export default Dasboard;
