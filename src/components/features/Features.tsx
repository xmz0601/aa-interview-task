import { Box, Image, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import MySearchIcon from '../../assets/icons/search.svg';
import ChoiceIcon from '../../assets/icons/choice.svg';
import ServiceIcon from '../../assets/icons/service.svg';

export const Features: React.FC = () => {
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

  return (
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
  );
};
