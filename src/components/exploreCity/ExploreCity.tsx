import { Box, Heading } from '@chakra-ui/react';
import { ExploreItem } from '../exploreItem';
import Slider from 'react-slick';

import BrisbaneImg from '../../assets/images/destinations/brisbane.jpg';
import CairnsImg from '../../assets/images/destinations/cairns.jpg';
import GoldcoastImg from '../../assets/images/destinations/gold-coast.jpg';
import MelbourneImg from '../../assets/images/destinations/melbourne.jpg';
import SydneyImg from '../../assets/images/destinations/sydney.jpg';
import UluruImg from '../../assets/images/destinations/uluru.jpg';

export const ExploreCity: React.FC = () => {
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
    </>
  );
};
