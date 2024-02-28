import { Heading,
    Card,
    Box,
    Flex,
    Avatar,
    Input,
    Button,
    FormLabel,
 } from '@chakra-ui/react'
import { useState } from 'react'
import { LuImagePlus } from 'react-icons/lu'
import api from '../libs/api'

export default function CreatePost() {
    const [content, ] = useState<string>("")
    const [image, ] = useState<any>("")

    async function postcontent() {
        const response = await api.post("/thread", {
            content,
            image,
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data",
            }
        } )
        console.log(response.data)
         
    }

  return (
   <Card p={4}>
    <Box mt={2} mb={6} color={"blue"}>
        <Heading>Home</Heading>
    </Box>
    <Flex gap={4} alignItems='center'>
        <Avatar name="dwidyad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpT1dsBsbAl7mezyrEnDN5XXoMPCtFtoaLabjoWusow&s"/>
        <Input/>
        <FormLabel htmlFor='image' bg='white'>
            <LuImagePlus color='blue' size={35}/>
        </FormLabel>
        <Input type='file'id='image' hidden/>
        <Button onClick={()=> postcontent()} bg='blue' textColor='white' rounded={15}>
            Tweet
        </Button>
    </Flex>
   </Card>
  )
}
