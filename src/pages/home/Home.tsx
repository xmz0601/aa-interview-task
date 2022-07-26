import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Button,
  Container,
  Center,
  VStack
} from '@chakra-ui/react';
import { SearchIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { Banner, CpItem, ExploreItem, Blog } from '../../components';
import Slider from 'react-slick';
import './Home.css';

import MySearchIcon from '../../assets/icons/search.svg';
import ChoiceIcon from '../../assets/icons/choice.svg';
import ServiceIcon from '../../assets/icons/service.svg';
import IllnessIcon from '../../assets/icons/illness.svg';
import WeatherIcon from '../../assets/icons/weather.svg';
import EmergencyIcon from '../../assets/icons/emergency.svg';
import RefundIcon from '../../assets/icons/refundable.svg';
import BreakdownIcon from '../../assets/icons/breakdown.svg';
import MoreIcon from '../../assets/icons/more.svg';

import BnplLgImage from '../../assets/images/bnpl-lg.png';
import BnplMdImage from '../../assets/images/bnpl-md.png';
import BnplSmImage from '../../assets/images/bnpl-sm.png';
import CpMobile from '../../assets/images/new-cp-mobile.png';

import BrisbaneImg from '../../assets/images/destinations/brisbane.jpg';
import CairnsImg from '../../assets/images/destinations/cairns.jpg';
import GoldcoastImg from '../../assets/images/destinations/gold-coast.jpg';
import MelbourneImg from '../../assets/images/destinations/melbourne.jpg';
import SydneyImg from '../../assets/images/destinations/sydney.jpg';
import UluruImg from '../../assets/images/destinations/uluru.jpg';

export const Home: React.FC = () => {
  const featureItemStyle = {
    px: 4,
    py: 8,
    backgroundColor: '#fff',
    border: '1px solid #e1e8ee',
    borderRadius: 15,
    align: 'center'
  };
  const featureTitleStyle = {
    color: '#064598',
    size: 'md',
    fontWeight: 400,
    letterSpacing: 1,
    mt: 4,
    mb: 2
  };
  const featureContentStyle = {
    size: 'sm',
    fontWeight: 400,
    color: '#505050'
  };
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

  const cpList = [
    {
      name: 'Illness',
      icon: IllnessIcon
    },
    {
      name: 'Weather',
      icon: WeatherIcon
    },
    {
      name: 'Emergency',
      icon: EmergencyIcon
    },
    {
      name: 'Refundable Booking',
      icon: RefundIcon
    },
    {
      name: 'Mechanical Breakdown',
      icon: BreakdownIcon
    },
    {
      name: 'Plus much much more',
      icon: MoreIcon
    }
  ];

  const cityList = [
    {
      country: 'Australia',
      city: 'Brisbane',
      img: BrisbaneImg
    },
    {
      country: 'Australia',
      city: 'Cairns',
      img: CairnsImg
    },
    {
      country: 'Australia',
      city: 'Gold Coast',
      img: GoldcoastImg
    },
    {
      country: 'Australia',
      city: 'Melbourne',
      img: MelbourneImg
    },
    {
      country: 'Australia',
      city: 'Sydney',
      img: SydneyImg
    },
    {
      country: 'Australia',
      city: 'Uluru',
      img: UluruImg
    }
  ];

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <>
      <Banner />
      {/* feature container */}
      <Box px={5}>
        <SimpleGrid
          maxW={1040}
          mx='auto'
          mt={20}
          columns={{ base: 1, md: 3 }}
          spacing={5}
        >
          <Box {...featureItemStyle}>
            <SearchIcon as={Image} w={12} h={12} src={MySearchIcon} />
            <Heading as='h2' {...featureTitleStyle}>
              Simple Search
            </Heading>
            <Text {...featureContentStyle}>
              Easily search and book flights from anywhere in the world
            </Text>
          </Box>
          <Box {...featureItemStyle}>
            <SearchIcon as={Image} w={12} h={12} src={ChoiceIcon} />
            <Heading as='h2' {...featureTitleStyle}>
              Unlimited Choice
            </Heading>
            <Text {...featureContentStyle}>
              Find the flight you were looking for and pay on your terms
            </Text>
          </Box>
          <Box {...featureItemStyle}>
            <SearchIcon as={Image} w={12} h={12} src={ServiceIcon} />
            <Heading as='h2' {...featureTitleStyle}>
              Expert Customer Service
            </Heading>
            <Text {...featureContentStyle}>
              Dedicated customer support team once you have booked
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Buy now pay later */}
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
            <Text
              {...commonTextStyle}
              textAlign={{ base: 'center', md: 'left' }}
            >
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

      {/* exploring Australia */}
      <Heading
        as='h2'
        mt={20}
        mb={10}
        color='#1e284e'
        fontSize={26}
        fontWeight={500}
        textAlign='center'
      >
        Exploring Australia
      </Heading>
      <Box
        pl={{ base: 0, sm: 3 }}
        mx='auto'
        w={{
          base: 258,
          sm: 480,
          md: 768,
          lg: 992,
          xl: 1280,
          '2xl': 1536
        }}
      >
        <Slider {...sliderSettings}>
          {cityList.map((item, ind) => (
            <ExploreItem
              key={ind}
              imgSrc={item.img}
              city={item.city}
              country={item.country}
            />
          ))}
        </Slider>
      </Box>

      {/* cancellation protection */}
      <Box px={5}>
        <SimpleGrid
          bg='#fff'
          maxW={1040}
          mx='auto'
          mt={20}
          border='1px solid #e1e8ee'
          borderRadius={20}
          columns={{ base: 1, lg: 2 }}
          className='cp_container'
          overflow='hidden'
        >
          <Box position='relative'>
            <Box
              borderBottomRadius='xl'
              py={3}
              mx={{ base: 'auto', lg: '27%' }}
              w='150px'
              textAlign='center'
              color='#fff'
              bgColor='green.500'
            >
              Recommended
            </Box>
            <Image
              src={CpMobile}
              alt='Buy Now, Pay Later'
              h='70%'
              position='absolute'
              bottom={0}
              left='17%'
              display={{ base: 'none', lg: 'block' }}
              className='cp_img'
            />
          </Box>
          <Box py={{ base: 10, lg: 14 }} px={{ base: 10, md: 20, lg: 7 }}>
            <Heading
              as='h2'
              {...commonTitleStyle}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Cancellation Protection
            </Heading>
            <Text
              {...commonTextStyle}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              During these uncertain times we recommend adding cancellation
              protection to your booking.
            </Text>
            <SimpleGrid columns={{ base: 2, sm: 3 }} spacing={3} mt={10}>
              {cpList.map((item, ind) => (
                <CpItem key={ind} iconSrc={item.icon} description={item.name} />
              ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>

      <Blog />

      {/* <Box
        bg={{
          base: 'white',
          sm: 'orange',
          md: 'red',
          lg: 'skyblue',
          xl: 'green',
          '2xl': 'yellow'
        }}
      >
        home home
      </Box> */}
    </>
  );
};
