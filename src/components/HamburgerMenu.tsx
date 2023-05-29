import React from 'react'
import {
    MenuButton,
    Menu,
    IconButton,
    MenuList,
    MenuItem,
    Link,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
export default function HamburgerMenu() {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='ghost'
            />
            <MenuList>
                <MenuItem>
                    <Link href='/'>About</Link>
                </MenuItem>
                <MenuItem>
                    <Link href='/portfolio'>Portfolio</Link>
                </MenuItem>
                <MenuItem>
                    <Link href='/contact'>Contact</Link>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
