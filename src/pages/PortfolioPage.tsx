import React from 'react'
import { Container, Text, SimpleGrid } from '@chakra-ui/react'
import { Section, WorkGridItem } from '../components'
import mangata from '../assets/images/mangata-thumbnail.png'
import cocktail from '../assets/images/cocktail-thumbnail.png'

export const PortfolioPage = () => {
    return (
        <Container mt={70}>
            <Text as='h2' fontSize={30} mb={4}>
                Portfolio
            </Text>
            <SimpleGrid column={[1, 1, 2]} gap={6}>
                <Section delay='1'>
                    <WorkGridItem
                        id='mangata-gallo'
                        title='Mangata & Gallo'
                        thumbnail={mangata}
                    >
                        A Jewelry website
                    </WorkGridItem>
                </Section>
                <Section delay='1'>
                    <WorkGridItem
                        id='mangata-gallo'
                        title='Mangata & Gallo'
                        thumbnail={cocktail}
                    >
                        A cocktail search website
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}
