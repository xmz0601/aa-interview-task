import { Box } from '@chakra-ui/react';
import { Banner } from '../../components';

export const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <Box
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
      </Box>
    </>
  );
};
