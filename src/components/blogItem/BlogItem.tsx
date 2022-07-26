import { Box, Heading, Image, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface BlogItemProps {
  smImg: string;
  lgImg: string;
  title: string;
  description: string;
}

const btnStyle = {
  borderRadius: 'xl',
  py: 6,
  background: 'transparent',
  color: '#fff',
  fontWeight: 500,
  border: '2px solid #fff',
  _hover: {
    backgroundColor: '#fff',
    color: '#1e284e'
  },
  _active: {
    backgroundColor: '#fff',
    color: '#1e284e'
  }
};

export const BlogItem: React.FC<BlogItemProps> = ({
  smImg,
  lgImg,
  title,
  description
}) => {
  return (
    <Link to='/'>
      {/* on md & lg screen */}
      <Box
        position='relative'
        w={{ md: 750, lg: 860 }}
        h={{ md: 390, lg: 480 }}
        p={12}
        mx={{ lg: 12, xl: 48, '2xl': 80 }}
        borderRadius={20}
        backgroundImage={lgImg}
        backgroundSize='cover'
        backgroundPosition='top'
        display={{ base: 'none', md: 'block' }}
      >
        <Heading
          as='h3'
          color='#fff'
          size='md'
          fontWeight={500}
          letterSpacing={1}
          pb={5}
        >
          {title}
        </Heading>
        <Text
          w='70%'
          color='#fff'
          fontSize={24}
          fontWeight={600}
          letterSpacing={1}
        >
          {description}
        </Text>
        <Button variant='outline' position='absolute' bottom={12} {...btnStyle}>
          Read blog article
        </Button>
      </Box>

      {/* on sm screen */}
      <Box
        w={220}
        bgColor='#fff'
        borderRadius={15}
        mx={{ base: 5, sm: 0 }}
        overflow='hidden'
        display={{ base: 'block', md: 'none' }}
      >
        <Image src={smImg} alt={title}></Image>
        <Heading
          as='h3'
          size='sm'
          color='#505050'
          fontWeight={400}
          pt={6}
          px={4}
        >
          {title}
        </Heading>
        <Text size='sm' fontWeight={400} color='#1e284e' px={4} pb={7} pt={3}>
          {description.slice(0, 40) + '...'}
        </Text>
      </Box>
    </Link>
  );
};
