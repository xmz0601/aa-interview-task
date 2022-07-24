import { Box } from '@chakra-ui/react';

export const Home: React.FC = () => {
  return (
    <>
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
