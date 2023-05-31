import React from 'react'
import styled from '@emotion/styled'
import { Text } from '@chakra-ui/react'

const FooterStyled = styled.footer`
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    height: 2rem;
`

export const Footer = () => {
    return <FooterStyled>&copy; Sam Azevedo. All rights reserved</FooterStyled>
}
