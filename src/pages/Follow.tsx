import {
    Box,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
  } from "@chakra-ui/react";
  
  export default function Follow() {
  
    return (
  
        <>
            <Box>
                <Tabs
                >
                    <TabList display={"flex"} justifyContent={"center"}>
                        <Tab  color={"blue"}>Following</Tab>
                        <Tab color={"blue"}>Follower</Tab>
                    </TabList>
  
                    <TabPanels>
                        <TabPanel>
                        </TabPanel>
                        <TabPanel>
                        
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    );
  }