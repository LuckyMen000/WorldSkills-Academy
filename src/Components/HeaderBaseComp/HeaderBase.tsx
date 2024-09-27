import React from 'react';
import { Box, Flex, Text, Button, Input, IconButton, Link, HStack, Icon } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const HeaderBase: React.FC = () => {
  return (
    <Box bg="white" shadow="sm">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mx="auto"
        py={3}
        px={6}
      >
        {/* Left Side - Logo */}
        <Box>
          <Text fontWeight="bold" fontSize="xl">
            MERION
          </Text>
        </Box>

        {/* Middle Section - Navigation Tabs */}
        <HStack spacing={6}>
          <Link fontWeight="bold" color="purple.500" _hover={{ color: "purple.600" }}>DevOps</Link>
          <Link>Безоп</Link>
          <Link>Сети</Link>
          <Link>Воип</Link>
          <Link>Разработка</Link>
          <Link>QA</Link>
          <Link>Сервера</Link>
          <Link>Карьера</Link>
          <Link>Академия</Link>
        </HStack>

        {/* Right Side - Search Button */}
        <HStack spacing={4}>
          <Input
            placeholder="Search"
            maxW="200px"
            borderColor="gray.200"
            _focus={{ borderColor: "purple.500" }}
          />
          <IconButton
            aria-label="Search"
            icon={<FaSearch />}
            variant="ghost"
            colorScheme="purple"
          />
        </HStack>
      </Flex>

      {/* Bottom section - How to, Reviews, Theory, Useful */}
      <Flex
        bg="gray.100"
        justifyContent="center"
        py={2}
        px={6}
      >
        <HStack spacing={6}>
          <Link fontWeight="medium" color="purple.500" _hover={{ color: "purple.600" }}>How to</Link>
          <Link>Обзоры</Link>
          <Link>Теория</Link>
          <Link>Полезно</Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default HeaderBase;
