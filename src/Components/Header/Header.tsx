import React from 'react';
import { Box, Flex, Link, Button, useColorMode, useColorModeValue, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('black', 'white');

  return (
    <Box bg={bg} px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">

        <Box fontWeight="bold" fontSize="xl">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
            MyLogo
          </Link>
        </Box>

        <HStack spacing={8} alignItems="center">
          <Link as={RouterLink} to="/" color={color} _hover={{ textDecoration: 'none' }}>
            
          </Link>
          <Link as={RouterLink} to="/about" color={color} _hover={{ textDecoration: 'none' }}>
            
          </Link>
          <Link as={RouterLink} to="/contact" color={color} _hover={{ textDecoration: 'none' }}>
            
          </Link>
        </HStack>

        <Button onClick={toggleColorMode} size="sm">
          {colorMode === 'light' ? 'Тёмная тема' : 'Светлая тема'}
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
