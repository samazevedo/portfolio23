import { StyleFunctionProps, extendTheme } from '@chakra-ui/react'
import '@fontsource/buda'
import '@fontsource-variable/raleway'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const colors = {
    primary: {
        green: '#BED3FF',
        black: '##7BA5FF',
        light: '#EBFFE3',
        blue: '#156afc',
        gray: '#434242',
        white: '#F7F7F7',
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
        h3: {
            fontSize: '1.3rem',
            textDecoration: 'underline',
            letterSpacing: '0.2rem',
            marginBottom: '0.7rem',
        },
        p: {
            fontSize: '1rem',
        },
    }),
}

export const theme = extendTheme({
    config,
    colors,
    fonts,
    styles,
})
