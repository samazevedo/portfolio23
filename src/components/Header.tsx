import React from 'react'
import {
    Box,
    Container,
    Flex,
    Heading,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Logo } from './Logo'
import { Navbar } from './Navbar'
import HamburgerMenu from './HamburgerMenu'
export const Header = () => {
    return (
        <Box
            as='header'
            position='fixed'
            w='100%'
            bg={useColorModeValue('#EBFFE340', '#42424240')}
            style={{ backdropFilter: 'blur(1rem)' }}
            zIndex={1}
        >
            <Container
                display='flex'
                p={2}
                maxW='container.md'
                flexWrap='wrap'
                alignContent='center'
                justifyContent='space-between'
            >
                <Flex align='center' mr={5}>
                    <Heading as='h1' size='lg' letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    alignItems='center'
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <Navbar />
                </Stack>
                <Box>
                    <ColorModeSwitcher />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <HamburgerMenu />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
