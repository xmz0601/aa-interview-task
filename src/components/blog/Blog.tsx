import { Box, Heading } from '@chakra-ui/react';
import { BlogItem } from '../blogItem';
import Slider from 'react-slick';

import FirstLgImg from '../../assets/images/blog/article-one.jpg';
import FirstSmImg from '../../assets/images/blog/article-one-mobile.jpg';
import SecondLgImg from '../../assets/images/blog/article-two.jpg';
import SecondSmImg from '../../assets/images/blog/article-two-mobile.jpg';
import ThirdLgImg from '../../assets/images/blog/article-three.jpg';
import ThirdSmImg from '../../assets/images/blog/article-three-mobile.jpg';

const commonTitleStyle = {
  px: 5,
  size: 'md',
  fontWeight: 500,
  letterSpacing: 1
};

const blogList = [
  {
    smImg: FirstSmImg,
    lgImg: FirstLgImg,
    title: 'Destinations',
    description:
      "The most beautiful locations around the world that you don't want to miss"
  },
  {
    smImg: SecondSmImg,
    lgImg: SecondLgImg,
    title: 'Travel tips',
    description: 'What to take with you for the ultimate European adventure'
  },
  {
    smImg: ThirdSmImg,
    lgImg: ThirdLgImg,
    title: 'Travel advice',
    description:
      'Popular destinations with no travel restrictions or quarantine'
  }
];

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 767,
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

export const Blog: React.FC = () => {
  return (
    <>
      <Box mt={20}>
        <Heading
          as='h2'
          color='#064598'
          pb={3}
          {...commonTitleStyle}
          textAlign='center'
        >
          Blog
        </Heading>
        <Heading
          as='h3'
          color='#1e284e'
          pb={{ base: 6, md: 10 }}
          {...commonTitleStyle}
          textAlign='center'
        >
          Alternative Adventures
        </Heading>
      </Box>
      <Box
        pl={{ base: 0, sm: 3 }}
        mx='auto'
        pb={20}
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
          {blogList.map((item, ind) => (
            <BlogItem
              key={ind}
              smImg={item.smImg}
              lgImg={item.lgImg}
              title={item.title}
              description={item.description}
            />
          ))}
        </Slider>
      </Box>
    </>
  );
};
