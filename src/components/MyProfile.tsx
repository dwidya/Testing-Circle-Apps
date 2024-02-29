import {
  Button,
  Card,
  Flex,
  Image,
  Text,
  Box,
  useColorModeValue,
  HStack,
  Avatar,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Input,
  ModalBody,
  useDisclosure

} from "@chakra-ui/react";
import React, { useEffect } from "react";

import {
    BiLogoFacebook,
    BiLogoGithub,
    BiLogoInstagramAlt,
    BiLogoYoutube,
} from "react-icons/bi";

import api from "../libs/api";
import { useDispatch } from "react-redux";
import { GET_USERS } from "../store/types/RootReducer";
import { useSelector } from "react-redux";
import { RootState } from "../store/types";


const MyProfile: React.FC = () => {
const dispatch = useDispatch();

const users= useSelector((state: RootState) => state.user.data)
console.log(users);




  useEffect (() => {
  
    
    fetchSuggestion()
    
  },[])
  
  const fetchSuggestion = async () => {    
    try {
        

    

      const response = await api.get('/users')
      console.log(response);
      // const data= response
      console.log("testing");

      dispatch(GET_USERS(response.data)) 
      
    
    } catch (error) {
      console.log(error);
    }


  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const secondaryText = useColorModeValue("gray.400", "gray.400");

  return (
    <Card m={4} >
      <Flex
        
        border="2px solid blue "
        px="20px"
        pt="10px"
        direction="column"
        borderRadius="5px"
        

      >
        <Text my={1} fontSize={18} fontWeight="bold" color="blue">
          My Profile
        </Text>
        <Image
          src="https://images5.alphacoders.com/112/1123013.jpg"
          maxW="100%"
          borderRadius="20px"
        />
        <Flex w="full">
          <Flex flexDirection="column" mb="30px" w="full" px={4}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpT1dsBsbAl7mezyrEnDN5XXoMPCtFtoaLabjoWusow&s"
              border="5px solid "
              borderColor={"white"}
              width="68px"
              height="68px"
              mt="-38px"
              borderRadius="50%"
            />
            <Text fontWeight="600" color="blue" fontSize="xl">
              ✨Dwidya D✨
            </Text>
            <Text color={secondaryText} fontSize="sm" fontWeight="500">
              @dwidyad
            </Text>
            <Text fontSize="13px">Life To Be Style </Text>
            <Flex gap={4}>
              <Flex alignItems="center" gap="2px" color="blue">
                <Text fontWeight="bold">5.493</Text>
                <Text fontSize="14px">Following</Text>
              </Flex>

              <Flex alignItems="center" gap="2px" color="blue">
                <Text fontWeight="bold">2.367</Text>
                <Text fontSize="14px" color="blue"  >
                  Follower
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Button
            fontSize="13px"
            fontWeight="bold"
            bg="transparent"
            border="1px solid "
            my="3px"
            h="30px"
            rounded="16px" 
            color="blue"
            onClick={onOpen}
          >
            Edit Profile
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update your profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Name:</Text>
            <Input placeholder="update your name" />
            <Text>Description:</Text>
            <Input placeholder="update your description" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="whatsapp">Update Profile</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

        </Flex>
      </Flex>
      
      

      <Text fontSize={"xl"} color={"black"} mt={"5"} fontWeight={"bold"}>
        Suggested For You....
        </Text>



      
          
          {users.map((user )=>(



            <HStack justify="space-between"  mt="8px" bgColor={"white"}>
      <HStack spacing={3} >

        
        
        <Avatar size="lg" src={!user.photo_profile?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcFCCxRwrtRcsjHh-Ale1WxalyeovEVonk98xMKIuGQ&s": user.photo_profile} mt={"3"} mr={"23"}/>
        <Stack spacing={-4}>
          <Text fontSize="xl" color="black" mt={"3"}>
            {user.full_name}
          </Text>
          <Text color="black" fontSize="sm" mt="1">
           @{user.username}
          </Text>
        </Stack>
      </HStack>
      <Button
        _hover={{ bg: "blue" }}
        variant="outline"
        rounded="full"
        size="sm"
        >Following
      </Button>
      </HStack>
          ))}
 
 


      <Flex gap={4} flexDirection={"column"} borderColor="blue" border="1px" color="black" 
      mt="81" borderRadius="2px" >
              <Text color={"blue"} fontSize={"lg"}>
                  Developed by{" "}
                  <Text color={"blue"} as="span" fontWeight={600}>
                      Dwidya Dharmawanto
                  </Text>
              </Text>
              <Box as={Flex} gap={1} color={"blue"} width={"200px"} fontSize={"3xl"}>
                  <BiLogoGithub />
                  <BiLogoFacebook />
                  <BiLogoInstagramAlt />
                  <BiLogoYoutube />
              </Box>
              <Flex gap={2} align="center" color="black" bgColor="white">
              <Text color={"blue"} fontSize="lg">Powered by</Text>
              <Image  display="inline" h="16px" src="data:image/png;base64,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" />
              <Text color={"blue"} fontSize="lg">Dumbways Indonesia</Text>
          </Flex>
          </Flex>

          

          
      </Card>
  
  );
};
   

export default MyProfile;
