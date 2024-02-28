import {
    Avatar,
    Box,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    Stack,
    StackDivider,
    Text,
  } from "@chakra-ui/react";
  
  export default function Followers() {
  
    return (
      <Box>
        <Card bgColor="black" color="gray.100">
          <CardHeader>
            <Heading size="md">
              Your Followers: {}
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
                
                  <Box key={1}>
                    <Flex gap="4">
                      <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                        <Avatar
                        />
                        <Box>
                          <Heading size="sm">{}</Heading>
                          <Text fontSize={"sm"} color={"black"}>
                            @{}
                          </Text>
                          <Text fontSize="sm">
                            profile_profile_description
                               profile_description
                              : "Tidak ada deskripsi profil"
                          </Text>
                        </Box>
                      </Flex>
                      <Flex alignItems={"center"}></Flex>
                    </Flex>
                  </Box>
                ;
              
            </Stack>
          </CardBody>
        </Card>
      </Box>
    );
  }