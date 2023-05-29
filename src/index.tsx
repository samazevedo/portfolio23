import React from 'react'
import { App } from './App'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './libs/theme'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
)
