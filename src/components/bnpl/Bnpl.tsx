import {
  Box,
  Image,
  Heading,
  Text,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Button
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import './Bnpl.css';

import BnplLgImage from '../../assets/images/bnpl-lg.png';
import BnplMdImage from '../../assets/images/bnpl-md.png';
import BnplSmImage from '../../assets/images/bnpl-sm.png';

export const Bnpl: React.FC = () => {
  const commonTitleStyle = {
    color: '#064598',
    size: 'md',
    fontWeight: 500,
    letterSpacing: 1,
    mb: 5
  };
  const commonTextStyle = {
    size: 'sm',
    fontWeight: 400,
    color: '#505050',
    letterSpacing: 0.8
  };
  const commonBtnStyle = {
    borderRadius: 'xl',
    py: 6,
    backgroundColor: '#064598',
    color: '#fff',
    fontWeight: 400,
    _hover: {
      backgroundColor: '#1e284e'
    },
    _active: {
      backgroundColor: '#1e284e'
    }
  };

  return (
    <Box px={5}>
      <SimpleGrid
        bg='#fff'
        maxW={1040}
        mx='auto'
        mt={20}
        border='1px solid #e1e8ee'
        borderRadius={20}
        columns={{ base: 1, md: 2 }}
        className='bnpl_container'
        overflow='hidden'
      >
        <Box p={{ base: 10, lg: 14 }}>
          <Heading
            as='h2'
            {...commonTitleStyle}
            textAlign={{ base: 'center', md: 'left' }}
          >
            Buy Now, Pay Later
          </Heading>
          <Text {...commonTextStyle} textAlign={{ base: 'center', md: 'left' }}>
            Book your flights today and spread the cost over time with one of
            our instalment options.
          </Text>
          <List
            spacing={3}
            my={10}
            color='#505050'
            letterSpacing={0.8}
            display={{ base: 'none', md: 'block' }}
          >
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='green.500' />
              Make payments weekly or monthly
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='green.500' />
              Interest free options
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color='green.500' />
              Fast approval
            </ListItem>
          </List>
          <Image
            src={BnplSmImage}
            alt='Buy Now, Pay Later'
            w={{ base: '100%', sm: '70%' }}
            pb={{ base: 5, sm: 10 }}
            pt={{ base: 0, sm: 10 }}
            mx='auto'
            display={{ base: 'block', md: 'none' }}
          />
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Button {...commonBtnStyle}>Browse payment methods</Button>
          </Box>
        </Box>
        <Box position='relative'>
          <Image
            src={BnplMdImage}
            alt='Buy Now, Pay Later'
            h='90%'
            position='absolute'
            bottom={0}
            left='15%'
            display={{ md: 'block', lg: 'none' }}
            className='bnpl_img'
          />
          <Image
            src={BnplLgImage}
            alt='Buy Now, Pay Later'
            h='80%'
            position='absolute'
            bottom={0}
            left='5%'
            display={{ base: 'none', lg: 'block' }}
            className='bnpl_img'
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};
