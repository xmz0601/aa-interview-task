import { Box, Heading, Image } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import './ExploreItem.css';

interface ExploreItemProps {
  imgSrc: string;
  city: string;
  country: string;
}

export const ExploreItem: React.FC<ExploreItemProps> = ({
  imgSrc,
  city,
  country
}) => {
  return (
    <Box
      position='relative'
      w={{ base: 220, md: 350 }}
      mx={{ base: 5, sm: 0, md: 3, lg: 16, xl: 8, '2xl': 2 }}
      bgColor='#fff'
      borderRadius={15}
      overflow='hidden'
      className='city_container'
    >
      <Box h={{ base: 170, md: 272 }} overflow='hidden'>
        <Image src={imgSrc} alt={city} className='city_img'></Image>
      </Box>
      <Heading
        as='h3'
        color='#064598'
        size='md'
        fontWeight={400}
        letterSpacing={1}
        pl={{ base: 4, md: 7 }}
        pt={{ base: 4, md: 8 }}
      >
        {city}
      </Heading>
      <Heading
        as='h4'
        size='sm'
        fontWeight={400}
        color='#505050'
        letterSpacing={0.8}
        pl={{ base: 4, md: 7 }}
        pb={7}
        pt={3}
      >
        {country}
      </Heading>
      <ChevronRightIcon
        position='absolute'
        bottom={10}
        right={{ base: 5, md: 10 }}
        p={1}
        boxSize={8}
        borderRadius='50%'
        bgColor='#064598'
        color='#fff'
        className='right_arrow'
        display='none'
      />
      {/* </Box> */}
    </Box>
  );
};
