import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();



  

  return (
    <Box display="flex" flexDirection="column" gap={5}>
      <Card bg="white" p={4} minW="400px" border={"1px solid black"} >
        <Text color="black" fontWeight="bold"  >My Profile</Text>
        <Box
          pos="relative"
          backgroundPosition="center"
          h="15rem"
          mt={3}
          rounded="xl"
          bgImage=" https://images5.alphacoders.com/112/1123013.jpg"
        >
          <Box
            pos="absolute"
            bottom={"-60px"}
            left={4}
            p={1}
            bg="whiteAlpha.800"
            rounded="full"
          >
            <Avatar
              w={"100px"}
              h={"100px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpT1dsBsbAl7mezyrEnDN5XXoMPCtFtoaLabjoWusow&s"
            />
          </Box>
        </Box>

        <Stack spacing={0} mt={"50px"}>
          <Flex gap={4} flexDir={"column"}>
            <Flex align={"center"}>
              <Text mt={5} fontSize="2xl" fontWeight="semibold" color="black">
                Dwidyad
              </Text>
            </Flex>
            <Flex align={"center"} >
              <Text fontSize="lg" color="black.600">
                @dwidyad
              </Text>
            </Flex>
          </Flex>
          <Text fontSize="sm" color="blackAlpha.800">
            {
              (
              <Text>{"Life To Be Style"}</Text>
            )}
          </Text>
          {/* {isLoading ? ( */}
            "LOADING"
           : (
            <HStack fontSize={"md"} mt={"50px"}>
              <HStack>
                <Text color="black.800">{length}</Text>
                <Text color="black.600">20 Following</Text>
              </HStack>
              <HStack>
                <Text color="black.800">{length}</Text>
                <Text color="black.600">50 Followers</Text>
              </HStack>
            </HStack>
          )

          <Button
            mt="3"
            width="15%"
            size="sm"
            rounded="full"
            colorScheme="blue"
            onClick={onOpen}
          >
            Edit Profile
          </Button>
        </Stack>
      </Card>

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
    </Box>
  );
}

export default Profile;