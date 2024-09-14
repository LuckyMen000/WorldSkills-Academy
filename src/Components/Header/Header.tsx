import React from 'react';
import { Box, Flex, Link, useColorMode, useColorModeValue, HStack, IconButton } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('black', 'white');
  const buttonBg = useColorModeValue('purple.500', 'blue.500');
  const hoverColor = 'darkblue';

  return (
    <Box bg={bg} px={4} boxShadow="md" position="sticky" top="0" zIndex="1000">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        
        <Box fontWeight="bold" fontSize="xl" color={color}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none', transform: 'scale(1.1)' }} transition="0.3s">
            MyLogo
          </Link>
        </Box>

        <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
          <Link 
            as={RouterLink} 
            to="/main" 
            fontSize="lg" 
            fontWeight="medium" 
            color={color} 
            _hover={{ color: hoverColor }} 
            transition="0.3s"
          >
            Главная
          </Link>
          <Link 
            as={RouterLink} 
            to="/events" 
            fontSize="lg" 
            fontWeight="medium" 
            color={color} 
            _hover={{ color: hoverColor }} 
            transition="0.3s"
          >
            Чемпионаты
          </Link>
          <Link 
            as={RouterLink} 
            to="/courses" 
            fontSize="lg" 
            fontWeight="medium" 
            color={color} 
            _hover={{ color: hoverColor }} 
            transition="0.3s"
          >
            Обучение
          </Link>
        </HStack>

        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          aria-label="Toggle Theme"
          bg={buttonBg}
          color="white"
          _hover={{ bg: colorMode === 'light' ? 'blue.600' : 'purple.600' }}
        />
      </Flex>
    </Box>
  );
};

export default Header;
