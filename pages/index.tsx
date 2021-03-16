import {
    Box,
    Flex,
    Text,
    IconButton,
    Spacer,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import {HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon,} from '@chakra-ui/icons';
import DesktopNav from "../components/parts/DesktopNav";
import DesktopSubNav from "../components/parts/DesktopSubNav";
import MobileNav from "../components/parts/MobileNav";
import MobileNavItem from "../components/parts/MobileNavItem";

const Navbar = () => {
    const {isOpen, onToggle} = useDisclosure();

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{base: 2}}
                px={{base: 4}}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                direction={'row-reverse'}
            >
                <Stack
                    flex={{base: 1, md: 0}}
                    direction={'row'}
                    spacing={6}
                    display={{base: 'flex', md: 'none'}}
                    justify={{base: 'flex-end'}}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={  
                            isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/>
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Stack>
                <Flex flex={{base: 1}} justify={{base: 'flex-start'}}>
                    <Text
                        textAlign={useBreakpointValue({base: 'center', md: 'left'})}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}
                    >
                        Logo
                    </Text>
                    <Spacer/>
                    <Flex display={{base: 'none', md: 'flex'}} ml={'auto'}>
                        <DesktopNav/>
                    </Flex>
                </Flex>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav/>
            </Collapse>
        </Box>
    );
}

export default Navbar;