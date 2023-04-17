import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../Components/NavBar';
import { Box, Flex, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'

const Home = () => {
  // const isLoading = useSelector(store => store.isLoading)
  // const isError = useSelector(store => store.isError)
  // const dispatch = useDispatch()
  // console.log(isLoading, isError)
  return (
    <>
      <NavBar />
      <Flex backgroundColor={"gray.200"} h={"90vh"} justifyContent={"center"} alignItems={"center"}>
        <Flex gap={5} flexDirection={"column"}>
          <Heading>Learn to code-for free.</Heading>
          <Heading>Build projects.</Heading>
          <Heading>Earn certification</Heading>
          <Text>since 2014. more then 40,000 freeCideCamo.org graduates gave gotten <br/> jobs at tech companies including.</Text>
          <Flex w={"100%"} height={"50px"} gap={"20px"}>
            <Image w={"100px"} height={"100%"} src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png'/>
            <Image w={"100px"} height={"100%"} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Google_2015_logo_colorless_mourning_period.svg/1200px-Google_2015_logo_colorless_mourning_period.svg.png'/>
            <Image w={"100px"} height={"100%"} src='https://niksjansons.com/wp-content/uploads/2018/01/logo-microsoft-404px-grey.png'/>
            <Image w={"100px"} height={"100%"} src='https://image.pngaaa.com/813/6179813-middle.png'/>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;