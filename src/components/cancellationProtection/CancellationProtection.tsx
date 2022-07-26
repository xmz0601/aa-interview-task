import { Box, Image, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { CpItem } from '../cpItem';
import styles from './CancellationProtection.module.css';

import IllnessIcon from '../../assets/icons/illness.svg';
import WeatherIcon from '../../assets/icons/weather.svg';
import EmergencyIcon from '../../assets/icons/emergency.svg';
import RefundIcon from '../../assets/icons/refundable.svg';
import BreakdownIcon from '../../assets/icons/breakdown.svg';
import MoreIcon from '../../assets/icons/more.svg';

import CpMobile from '../../assets/images/new-cp-mobile.png';

export const CancellationProtection: React.FC = () => {
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

  return (
    <Box px={5}>
      <SimpleGrid
        bg='#fff'
        maxW={1040}
        mx='auto'
        mt={20}
        border='1px solid #e1e8ee'
        borderRadius={20}
        columns={{ base: 1, lg: 2 }}
        className={styles['cp_container']}
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
            className={styles['cp_img']}
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
          <Text {...commonTextStyle} textAlign={{ base: 'center', lg: 'left' }}>
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
  );
};
