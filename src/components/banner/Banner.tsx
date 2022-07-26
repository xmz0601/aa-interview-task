import { useState, ChangeEvent } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  Image,
  Switch,
  FormControl,
  FormLabel,
  SimpleGrid,
  Grid,
  GridItem
} from '@chakra-ui/react';

import BackgroundImage from '../../assets/images/background-image.jpg';
import TrustpilotImage from '../../assets/images/trustpilot.png';

const flightSearchBtnStyle = {
  border: '1px solid',
  borderRadius: '7px',
  padding: '8px 14px'
};
const searchFilterBoxStyle = {
  border: '1px solid #e1e8ee',
  borderRadius: 'lg',
  padding: 4
};
const searchFilterTitleStyle = {
  color: '#505050',
  fontSize: '8px'
};
const searchFilterContentStyle = {
  fontSize: '14px',
  color: '#09123a'
};

export const Banner: React.FC = () => {
  const flightSearchBtn = ['Return', 'One Way', 'Multi-city'];
  const [currentBtn, setCurrentBtn] = useState(0);
  const [showDirectFlights, setShowDirectFlights] = useState(false);

  const clickFlightSearchBtn = (i: number) => {
    setCurrentBtn(i);
  };

  const onSwitchChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setShowDirectFlights(true);
    } else {
      setShowDirectFlights(false);
    }
  };

  return (
    <Box
      backgroundImage={BackgroundImage}
      backgroundSize='cover'
      backgroundPosition='bottom'
    >
      <VStack>
        <Heading
          as='h2'
          color='#09123a'
          size='xl'
          fontWeight={500}
          letterSpacing={0.5}
          mt={20}
          mb={2}
          px={5}
          textAlign='center'
        >
          Search and book flights to Australia
        </Heading>
        <Heading
          as='h3'
          color='#09123a'
          size='sm'
          fontWeight={400}
          letterSpacing={0.7}
        >
          Buy your flights now and pay later
        </Heading>
        <Image src={TrustpilotImage} alt='Trustpilot Rating' w={110} pt={8} />
        <Text color='#09123a' fontSize={14} pb={8}>
          <span style={{ marginRight: '10px' }}>
            TrustScore <strong>4.5</strong>
          </span>
          |
          <span style={{ marginLeft: '10px' }}>
            <strong>6,500</strong> reviews
          </span>
        </Text>

        {/* search flights container */}
        <Box w='100%' px={{ base: 0, sm: 5 }} pb={{ base: 10, md: 20 }}>
          <Flex
            maxW={1040}
            justify={'end'}
            gap={2}
            p={4}
            mx='auto'
            borderTopRadius='2xl'
            bg='white'
            overflow='hidden'
          >
            {flightSearchBtn.map((item, ind) => (
              <Box
                key={ind}
                as='button'
                flex={{ base: 1, md: 'none' }}
                {...flightSearchBtnStyle}
                borderColor={currentBtn === ind ? '#064598' : '#e1e8ee'}
                color={currentBtn === ind ? '#fff' : '#505050'}
                backgroundColor={currentBtn === ind ? '#064598' : '#fff'}
                onClick={() => {
                  clickFlightSearchBtn(ind);
                }}
              >
                {item}
              </Box>
            ))}

            <Box ml='auto' mr={-24} display={{ base: 'none', md: 'block' }}>
              <FormControl as={SimpleGrid} columns={2}>
                <FormLabel
                  htmlFor='direct-flights'
                  mt={2}
                  color={showDirectFlights ? '#064598' : '#505050'}
                >
                  Direct flights only
                </FormLabel>
                <Switch id='direct-flights' mt={3} onChange={onSwitchChange} />
              </FormControl>
            </Box>
          </Flex>
          <Grid
            maxW={1040}
            p={4}
            pt={0}
            mx='auto'
            borderBottomRadius='2xl'
            bg='white'
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(5, 1fr)'
            }}
          >
            <GridItem
              {...searchFilterBoxStyle}
              borderRightRadius={0}
              colSpan={1}
              mb={{ base: 2, sm: 0 }}
            >
              <Text {...searchFilterTitleStyle}>Where from?</Text>
              <Text {...searchFilterContentStyle} noOfLines={1}>
                London (LON)
              </Text>
            </GridItem>
            <GridItem
              {...searchFilterBoxStyle}
              borderLeft={0}
              borderLeftRadius={0}
              colSpan={1}
            >
              <Text {...searchFilterTitleStyle}>Where to?</Text>
              <Text {...searchFilterContentStyle} noOfLines={1}>
                Sydney (SYD)
              </Text>
            </GridItem>
            <GridItem
              {...searchFilterBoxStyle}
              ml={{ base: 0, lg: 2 }}
              mr={{ base: 0, sm: 2, lg: 0 }}
              my={{ base: 2, lg: 0 }}
              colSpan={1}
            >
              <Box {...searchFilterTitleStyle}>
                <Flex justify='space-between'>
                  <span>Dates</span>
                  <span>14 Nights</span>
                </Flex>
              </Box>
              <Text {...searchFilterContentStyle} noOfLines={1}>
                Sat 11 Jun - Sat 25 Jun
              </Text>
            </GridItem>
            <GridItem
              {...searchFilterBoxStyle}
              ml={{ base: 0, sm: 2 }}
              mt={{ base: 0, sm: 2, lg: 0 }}
              mb={{ base: 2, lg: 0 }}
              colSpan={1}
            >
              <Text {...searchFilterTitleStyle}>Passengers</Text>
              <Text {...searchFilterContentStyle} noOfLines={1}>
                2 Adults, Any class
              </Text>
            </GridItem>
            <GridItem
              as='button'
              borderRadius='lg'
              ml={{ base: 0, lg: 2 }}
              py={6}
              backgroundColor='#064598'
              color='#fff'
              colSpan={{ base: 1, sm: 2, lg: 1 }}
            >
              Search Flights
            </GridItem>
          </Grid>
        </Box>
      </VStack>
    </Box>
  );
};
