import {  Flex } from '@chakra-ui/react'
import CardNew from '../components/CardNew'
import CreatePost from '../components/CreatePost'
// import Foother from '../components/Foother'

export default function Home() {
  return (
    <Flex w='full' flexDir={"column"}>
        <CreatePost />
        <CardNew/>
      
     
    </Flex>
  )
}
