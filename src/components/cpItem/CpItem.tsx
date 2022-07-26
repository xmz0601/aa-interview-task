import { Box, Image, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface CpItemProps {
  iconSrc: string;
  description: string;
}

const featureItemStyle = {
  align: 'center'
};

export const CpItem: React.FC<CpItemProps> = ({ iconSrc, description }) => {
  return (
    <Box h={88} px={3} bg='#f7f8f9' borderRadius='lg' {...featureItemStyle}>
      <SearchIcon as={Image} w={7} h={7} mt={3} src={iconSrc} />
      <Text
        fontSize={14}
        fontWeight={400}
        lineHeight={5}
        color='#505050'
        mt={0}
      >
        {description}
      </Text>
    </Box>
  );
};
