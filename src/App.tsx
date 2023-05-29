import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import { Header } from './components'
import { HomePage, PortfolioPage, ContactPage } from './pages'

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container w='100%' display='grid'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/portfolio' element={<PortfolioPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}
