import {Box, Link, Popover, PopoverContent, PopoverTrigger, Stack, useColorModeValue} from "@chakra-ui/react";
import DesktopSubNav from "./DesktopSubNav";

const DesktopNav = () => {
    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={useColorModeValue('gray.600', 'gray.200')}
                                _hover={{
                                    textDecoration: 'none',
                                    color: useColorModeValue('gray.800', 'white'),
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={useColorModeValue('white', 'gray.800')}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
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

export default DesktopNav;
