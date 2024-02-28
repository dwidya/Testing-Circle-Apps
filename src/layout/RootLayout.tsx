import { Outlet } from "react-router-dom";
import { Box,  Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import MyProfile from "../components/MyProfile";

const RootLayout = () => {

    return (
        <Flex w='full'>
          <Box w='20%' display={{base: 'none', md: 'block'}}>
            <Sidebar/>
          </Box>
          <Box w={{base: '100%', md:'50%' }}
          px={{base: '10px', md:'0px'}}
          py={2}>
             <Outlet />
            {/* <CreatePost /> */}
           
            {/* <CardNew/> */}
          </Box>
          <Box w={'30%'} display={{base: 'none', md:'block'}}>
            <MyProfile />
          </Box>
         
        </Flex>
      )
    }
export default RootLayout