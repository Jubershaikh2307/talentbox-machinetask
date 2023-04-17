import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    Stack,
    Center,
    Input,
} from '@chakra-ui/react';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';


const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box px={4} backgroundColor={"black"}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <SearchIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'} background={"gray"} padding={"0px 5px 0px 5px"}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            <SearchIcon color='white'/>
                            <Input border={"gray"}/>
                        </HStack>
                    </HStack>
                    <Center><Box m={"auto"} color={"white"}>freeCodeCamp</Box></Center>
                    <Flex alignItems={'center'}>
                        <Button
                            variant={'ghost'}
                            textColor={"white"}
                            border={"1px solid white"}
                            size={'sm'}
                            borderRadius={"0px"}
                            mr={4}>
                            Action
                        </Button>
                        <Button
                            variant={'solid'}
                            colorScheme={'yellow'}
                            size={'sm'}
                            borderRadius={"0px"}
                            mr={4}>
                            Action
                        </Button>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <Input />
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
};

export default NavBar;