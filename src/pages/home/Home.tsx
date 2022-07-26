import {
  Banner,
  Features,
  Bnpl,
  CancellationProtection,
  ExploreCity,
  Blog
} from '../../components';

export const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <Features />
      <Bnpl />
      <ExploreCity />
      <CancellationProtection />
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
