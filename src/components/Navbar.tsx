import React from 'react'
import {
    Flex,
    Grid,
    Heading,
    Link,
    LinkBox,
    useColorModeValue,
} from '@chakra-ui/react'

// const LinkItem = ({ href, path, children }) => {
//     return (
//         <Link
//             href={href}
//             p={2}
//             bg={active ? 'glassTeal' : undefined}
//             color={active ? '#202023' : inactiveColor}
//         >
//             {children}
//         </Link>
//     )
// }

export const Navbar = () => {
    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={3}>
            <Link href='/'>Home</Link>
            <Link href='/portfolio'>Portfolio</Link>
            <Link href='/contact'>Contact</Link>
        </Grid>
    )
}
