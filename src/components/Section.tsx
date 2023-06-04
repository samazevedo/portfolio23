import React from 'react'
import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => {
        return shouldForwardProp(prop) || prop === 'transition'
    },
})

export const Section = ({
    children,
    delay = '0',
}: {
    children: React.ReactNode
    delay: string | undefined
}) => (
    <StyledDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ fontFamily: '' }}
        transition={{
            duration: '2',
            delay,
        }}
        mb={6}
    >
        {children}
    </StyledDiv>
)
