import { StyleFunctionProps, extendTheme } from '@chakra-ui/react'
import '@fontsource/buda'
import '@fontsource-variable/raleway'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const colors = {
    primary: {
        blue: '#767aae',
        blueDarker: '#1c98c9',
        purple: '#BED3FF',
        light: '#EBFFE3',
        gray: '#434242',
        white: '#F7F7F7',
        link: '#9aef3f',
    },
}

const fonts = {
    body: `'Raleway', sans-serif`,
}

const styles = {
    global: (props: StyleFunctionProps) => ({
        body: {
            fontFamily: `'Raleway Variable', sans-serif`,
            color:
                props.colorMode === 'light' ? 'primary.gray' : 'primary.white',
            bg: props.colorMode === 'dark' ? 'primary.gray' : 'primary.light',
        },
        a: {
            color: 'primary.blue',
            _hover: {
                textDecoration: 'underline',
            },
        },
        h1: {
            fontFamily: `'Buda', sans-seric`,
            fontSize: '1.5rem',
        },
        h2: {
            fontFamily: `'Buda', sans-seric`,
            fontSize: '1.3rem',
        },
        h3: {
            fontSize: '1.2rem',
            textDecoration: 'underline',
            letterSpacing: '0.1rem',
            marginBottom: '0.7rem',
        },
        p: {
            fontSize: '1rem',
        },
        button: {},
    }),
}

export const theme = extendTheme({
    config,
    colors,
    fonts,
    styles,
})
