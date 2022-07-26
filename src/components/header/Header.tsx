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

import styles from './Header.module.css';
import Logo from '../../assets/images/logos/alternative-airlines.jpg';
import MyHamburgerIcon from '../../assets/icons/menu.svg';

const menuList = [
  {
    title: 'Book flights',
    hasIcon: true
  },
  {
    title: 'Information',
    hasIcon: true
  },
  {
    title: 'Help',
    hasIcon: true
  },
  {
    title: 'Travel Agents',
    hasIcon: false
  }
];

const menuBtnStyle = {
  h: 84,
  color: '#8b8b8b',
  backgroundColor: '#fff',
  fontSize: '14px',
  fontWeight: 400,
  borderRadius: 0,
  padding: '0 10px',
  _hover: { backgroundColor: '#fff' },
  _active: { backgroundColor: '#fff' }
};

export const Header: React.FC = () => {
  return (
    <Box as='header' bg='white' h={{ base: 70, sm: 84 }}>
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
              mt={{ base: 18, sm: 22 }}
            />
          </Link>
        </Heading>

        {/* top menu */}
        <Box mr='auto' display={{ base: 'none', md: 'block' }}>
          <Menu>
            {menuList.map((item, ind) => (
              <MenuButton
                key={ind}
                as={Button}
                rightIcon={item.hasIcon ? <ChevronDownIcon /> : null}
                className={styles['top_menu_item']}
                {...menuBtnStyle}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                {item.title}
              </MenuButton>
            ))}
          </Menu>
        </Box>

        {/* manage booking & hamburger icon */}
        <Box
          as='button'
          className={styles['top_menu_item']}
          display={{ base: 'none', md: 'block' }}
          {...menuBtnStyle}
        >
          Manage booking
        </Box>
        <HamburgerIcon
          as={Image}
          w={7}
          h={7}
          mt={{ base: 5, sm: 7 }}
          display={{ base: 'block', md: 'none' }}
          src={MyHamburgerIcon}
          cursor='pointer'
        />
      </Flex>
    </Box>
  );
};
