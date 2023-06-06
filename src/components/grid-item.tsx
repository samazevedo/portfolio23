import React from 'react'
import { Link } from '@chakra-ui/react'
import { Box, Text, LinkBox, LinkOverlay, Image } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({
    children,
    href,
    title,
    thumbnail,
}: {
    children: React.ReactNode
    href: string
    title: string
    thumbnail: string
}) => (
    <Box w='100%' alignItems='center'>
        <LinkBox cursor='pointer'>
            <Image
                src={thumbnail}
                alt={title}
                className='grid-item-thumbnail'
                placeholder='blur'
                loading='lazy'
            />
            <LinkOverlay href={href} target='_blank'>
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({
    children,
    id,
    title,
    thumbnail,
}: {
    children: React.ReactNode
    id: string
    title: string
    thumbnail: string | any
}) => {
    return (
        <Box w='100%' alignContent='center'>
            <Link href={`/portfolio/${id}`}>
                <Image
                    src={thumbnail}
                    alt={title}
                    className='grid-thumbnail-item'
                    placeholder='blur'
                />
                <LinkOverlay href={`/portfolio/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </Link>
        </Box>
    )
}

export const GridItemStyle = () => (
    <Global
        styles={`
        .grid-item-thumbnail {
            border-radius:1.2rem;
        }
    `}
    />
)
