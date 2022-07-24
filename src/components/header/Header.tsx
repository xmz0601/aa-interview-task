import {
  Box,
  Heading,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

import './Header.css';
import Logo from '../../assets/images/logos/alternative-airlines.jpg';
import MyHamburgerIcon from '../../assets/icons/menu.svg';

const menuBtnStyle = {
  h: 84,
  color: '#8b8b8b',
  backgroundColor: '#fff',
  fontSize: '14px',
  fontWeight: 400,
  borderRadius: 0,
  padding: '0 10px',
  _hover: { backgroundColor: '#fff' }
};

export const Header: React.FC = () => {
  return (
    <Box as='header' bg='white' h={84}>
      <Flex maxW={1080} h={84} mx='auto' px={5} justify={'end'}>
        {/* logo */}
        <Heading as='h1' fontSize={0} mr={{ base: 'auto', md: 5 }}>
          <Link to='/'>
            Alternative Airlines
            <Image
              src={Logo}
              alt='Alternative Airlines Logo'
              w={125}
              h={10}
              mt={22}
            />
          </Link>
        </Heading>

        {/* top menu */}
        <Box mr='auto' display={{ base: 'none', md: 'block' }}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className='top_menu_item'
              {...menuBtnStyle}
            >
              Book flights
            </MenuButton>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className='top_menu_item'
              {...menuBtnStyle}
            >
              Information
            </MenuButton>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className='top_menu_item'
              {...menuBtnStyle}
            >
              Help
            </MenuButton>
            <MenuButton as={Button} {...menuBtnStyle} className='top_menu_item'>
              Travel Agents
            </MenuButton>
          </Menu>
        </Box>

        {/* manage booking & hamburger icon */}
        <Box
          as='button'
          className='top_menu_item'
          display={{ base: 'none', md: 'block' }}
          {...menuBtnStyle}
        >
          Manage booking
        </Box>
        <HamburgerIcon
          as={Image}
          w={7}
          h={7}
          my={7}
          display={{ base: 'block', md: 'none' }}
          src={MyHamburgerIcon}
          cursor='pointer'
        />
      </Flex>
    </Box>
  );
};
