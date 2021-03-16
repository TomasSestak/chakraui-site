import {Stack, useColorModeValue} from "@chakra-ui/react";
import MobileNavItem from "./MobileNavItem";

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{md: 'none'}}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};


interface SubItem { label: string, href: string, subLabel?: string }

interface NavItem {
    label: string;
    children?: Array<SubItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Inspiration',
        href: '#',
        children: [
            {
                subLabel: 'Party hard',
                label: 'Motivation',
                href: '#'
            }
        ]
    },
    {
        label: 'Find Work'
    },
    {
        label: 'Hire Designers',
        href: '#',
    },
];


export default MobileNav;