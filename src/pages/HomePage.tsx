import React from 'react'
import { Container, Box, Text, Button, Link, Image } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { Paragraph, Section } from '../components'

const SocialItem = () => {
    {
        item: 'Github'
        img: '/svg/github.svg'
        url: 'https://github.com/samazevedo'
        at: '@samazevedo'
    }
    {
        item: 'Twitter'
        img: '/svg/twitter.svg'
        url: 'https://twitter.com/SamAzevedo4'
        at: '@SamAzevedo4'
    }
    {
        item: 'LinkedIn'
        img: '/svg/github.svg'
        url: 'https://www.linkedin.com/in/samuel-azevedo-santos-908a5b53/'
        at: '@samazevedo'
    }
    {
        item: 'Instagram'
        img: '/svg/github.svg'
        url: 'https://instagram.com/'
        at: '@samazevedo'
    }
}

export const HomePage = () => {
    return (
        <>
            <Container>
                <Box w='100%' mt={100} p={4}>
                    <Box h='50vh'> there is nothing here</Box>
                    <Box
                        textAlign='center'
                        bg='primary.blue'
                        p={3}
                        borderRadius='lg'
                    >
                        <Text as='h2'>
                            Hello, I&apos;m a Web Developer based in Sao Paulo,
                            Brazil.
                        </Text>
                    </Box>

                    <Box
                        display='grid'
                        gridTemplateColumns={{ base: '1', md: 'repeat(2,1fr)' }}
                        alignItems='center'
                        p={3}
                    >
                        <Box
                            mt={5}
                            as='div'
                            justifySelf={{ base: 'center', md: 'start' }}
                        >
                            <Text as='h1' fontSize='2rem'>
                                Sam Azevedo
                            </Text>
                            <p>Web Developer | Designer</p>
                        </Box>
                        <Box
                            mt={5}
                            as='div'
                            justifySelf={{ base: 'center', md: 'end' }}
                        >
                            <Image
                                borderColor='primary.blue'
                                borderWidth={3}
                                borderStyle='solid'
                                boxSize='6rem'
                                display='inline-block'
                                borderRadius='4rem'
                                src='images/profile.jpg'
                                alt='profile image'
                            />
                        </Box>
                    </Box>
                </Box>
                <Section delay='0.1'>
                    <Text as='h3'>Work</Text>
                    <Paragraph>
                        Samuel Azevedo is a freelancer Web Developer based in
                        Sao Paulo, Brazil, has a passion for building web
                        applications. Self taught he is always looking forward
                        to learn new tools and technologies for the Web. When
                        not online, he loves to travel, explore new places and
                        food.
                    </Paragraph>
                    <Box
                        display='grid'
                        alignItems='center'
                        justifyItems='center'
                        mt={5}
                    >
                        <Link href='/portfolio'>
                            <Button size='md' bg='primary.blue'>
                                Portfolio
                            </Button>
                        </Link>
                    </Box>
                </Section>
                <Section delay='0.1'>
                    <Text as='h3'>Bio</Text>
                    <Paragraph>
                        <Text as='span' fontWeight='bolder'>
                            1990
                        </Text>{' '}
                        Born in Sao Paulo, Brazil.
                    </Paragraph>
                    <Paragraph>
                        <Text as='span' fontWeight='bolder'>
                            2014 - 2022
                        </Text>{' '}
                        Worked in Aviation.
                    </Paragraph>
                    <Paragraph>
                        <Text as='span' fontWeight='bolder'>
                            2023 - present
                        </Text>{' '}
                        Started his journey in as Web Developer freelancer.
                    </Paragraph>
                </Section>
            </Container>
            <Section delay='0.1'>
                <Text as='h3'>
                    <Icon
                        viewBox='0 0 24 24'
                        color='red.500'
                        strokeMiterlimit='2'
                        strokeLinejoin='round'
                    >
                        <path
                            fill='currentColor'
                            d='m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z'
                        />
                    </Icon>
                </Text>
                <Paragraph>
                    Technology, Art, Music, Photography, Soccer, Languages,
                    Travel, Food{' '}
                </Paragraph>
            </Section>
            <Section delay='0.1'>
                <Text as='h3'>Socials</Text>
                <Text as='p'>
                    <Text as='span' fontWeight='bolder'>
                        <Link href='https://github.com/samazevedo'>
                            <Box
                                display='grid'
                                gridTemplateColumns='repeat(2, 1fr)'
                                justifyItems='start'
                                maxW='9rem'
                            >
                                <Image
                                    src='/icons/github.svg'
                                    alt='github'
                                    borderRadius='full'
                                    boxSize='1.5rem'
                                    mb={5}
                                />
                                <Paragraph>@samazevedo</Paragraph>
                            </Box>
                        </Link>
                        <Link href='https://'>
                            <Box
                                display='grid'
                                gridTemplateColumns='repeat(2, 1fr)'
                                justifyItems='start'
                                maxW='9rem'
                            >
                                <Image
                                    src='/icons/twitter.svg'
                                    alt='twitter'
                                    borderRadius='full'
                                    boxSize='1.5rem'
                                    mb={5}
                                />
                                <Paragraph>@samazevedo</Paragraph>
                            </Box>
                        </Link>
                        <Link href='https://'>
                            <Box
                                display='grid'
                                gridTemplateColumns='repeat(2, 1fr)'
                                justifyItems='start'
                                maxW='9rem'
                            >
                                <Image
                                    src='/icons/linkedin.svg'
                                    alt='linkedin'
                                    borderRadius='full'
                                    boxSize='1.5rem'
                                    mb={5}
                                />
                                <Paragraph>@samazevedo</Paragraph>
                            </Box>
                        </Link>
                        <Link href=''>
                            <Box
                                display='grid'
                                gridTemplateColumns='repeat(2, 1fr)'
                                justifyItems='start'
                                maxW='9rem'
                            >
                                <Image
                                    src='/icons/instagram.svg'
                                    alt='instagram'
                                    borderRadius='full'
                                    boxSize='1.5rem'
                                    mb={5}
                                />
                                <Paragraph>@samazevedo</Paragraph>
                            </Box>
                        </Link>
                        <ul></ul>
                    </Text>
                </Text>
            </Section>
            <Box mt={5}></Box>
        </>
    )
}
