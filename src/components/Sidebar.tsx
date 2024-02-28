import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { RiHome7Fill } from "react-icons/ri";
import { MdPersonSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";


export default function Sidebar() {
  return (
    <Flex
      direction="column"
      height="100vh"
      py="15"
      borderRight={2}
      borderEnd="black"
      position="fixed"
    >
      <Box px="30px" w="full">
        <Flex>
          <Heading color="blue" my={2}>
            Hoyolab
          </Heading>
        </Flex>

        <Box mt="20px">
          <Link to="/">
          <Flex alignItems="center" gap="3" color="blue">
            <RiHome7Fill size={25} />
            <Text fontWeight="bold">Home</Text>
          </Flex>
          </Link>
        </Box>


        <Box mt="20px">
          <Link to="/Search">
          <Flex alignItems="center" gap="3" color="blue">
            <MdPersonSearch size={25} />
            <Text fontWeight="bold">Search</Text>
          </Flex>
          </Link>
        </Box>

        <Box mt="20px">
          <Link to="/Follows">
          <Flex alignItems="center" gap="3" color="blue">
            <FaRegHeart size={25} />
            <Text fontWeight="bold">Follows</Text>
          </Flex>
          </Link>
        </Box>


        <Box mt="20px">
          <Link to= "/Profile">
          <Flex alignItems="center" gap="3" color="blue">
            <CgProfile size={25} />
            <Text fontWeight="bold">Profile</Text>
          </Flex>
          </Link>
        </Box>

        <Button bg="blue" mt="20px" w="full" rounded={20} textColor="white">
          Create Post
        </Button>
      </Box>


      <Spacer />
      <Box px="30px">
        <Link to="/Login">
        <Flex alignItems="center" mt="10px" gap="3" color="blue">
          <TbLogout2 size={25} />
          <Text fontWeight="bold">Logout</Text>
        </Flex>
        </Link>
      </Box>
    </Flex>
  );
}
