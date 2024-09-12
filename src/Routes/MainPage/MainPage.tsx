import React from 'react';
import { Box, Heading, Text, Stack, SimpleGrid, Flex, Button, useColorModeValue, Image } from '@chakra-ui/react'; 
import titleimg from '../../Assets/images/coursestart.gif';
import Header from '../../Components/Header/Header';
import CourseList from './CourseCard';
import Footer from '../../Components/Footer/Footer';

const MainPage: React.FC = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('black', 'white');
  const buttonBg = useColorModeValue('purple.500', 'blue.500');

  return (
    <Box>
      <Header />
      <Box
        bg={bg}
        py={10}
        px={5}
        textAlign="center"
        position="relative"
      >
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          align="center" 
          justify="center"
          maxW="1200px"
          mx="auto"
        >
          <Stack spacing={6} alignItems="flex-start" flex="1" mr={{ base: 0, md: 8 }}>
            <Heading 
              size="2xl" 
              color={color} 
              fontWeight="bold" 
              lineHeight="1.2"
            >
              Готовьтесь к Чемпионатам WorldSkills на нашем портале WS-Academy
            </Heading>
            <Text fontSize="lg" color={color} maxW="500px">
              Большое разнообразие курсов на все компетенции для подготовки к чемпионатам и повышения квалификации.
            </Text>
            <Button 
              size="lg" 
              bg={buttonBg} 
              color="white" 
              _hover={{ bg: useColorModeValue('purple.600', 'blue.600') }}
              _active={{ bg: useColorModeValue('purple.700', 'blue.700') }}
            >
              Выбрать направление
            </Button>
          </Stack>

          <Box flex="1" textAlign="center" ml={{ base: 0, md: 8 }}>
            <Image 
              src={titleimg}
              alt="Чемпионаты"
              maxW="100%"
              borderRadius="md"
            />
          </Box>
        </Flex>
      </Box>
      
      <Box>
        <CourseList />
      </Box>

      {/* Блок "Бонусы для студентов" */}
      <Box py={10} bg={useColorModeValue('white', 'gray.800')} textAlign="center">
        <Heading as="h3" size="xl" mb={8} color={color}>
          Бонусы для студентов
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} maxW="1000px" mx="auto">
          {/* Первая карточка */}
          <Box
            p={6}
            bg={useColorModeValue('purple.50', 'gray.700')}
            borderRadius="md"
            boxShadow="lg"
            _hover={{ boxShadow: '2xl', transform: 'scale(1.05)' }}
            transition="0.3s ease"
          >
            <Heading as="h4" size="md" mb={4} color="purple.800">
              АНГЛИЙСКИЙ ДЛЯ IT
            </Heading>
            <Text color={color}>
              Для наших студентов дарим мини-курс по ключевым английским словам в IT, который сделали совместно с нашими друзьями из Advance.
              Учимся и работаем с зарубежными коллегами легко.
            </Text>
            <Button mt={4} colorScheme="purple" variant="outline">
              Подробнее
            </Button>
          </Box>

          {/* Вторая карточка */}
          <Box
            p={6}
            bg={useColorModeValue('purple.50', 'gray.700')}
            borderRadius="md"
            boxShadow="lg"
            _hover={{ boxShadow: '2xl', transform: 'scale(1.05)' }}
            transition="0.3s ease"
          >
            <Heading as="h4" size="md" mb={4} color="purple.800">
              КАРЬЕРНЫЙ ИНТЕНСИВ
            </Heading>
            <Text color={color}>
              Всем студентам мы предоставляем бесплатный интенсив по карьерному росту, разработанный совместно с экспертами из центра развития карьеры «ЭЙЧ».
            </Text>
            <Button mt={4} colorScheme="purple" variant="outline">
              Подробнее
            </Button>
          </Box>
        </SimpleGrid>

        {/* Третья карточка */}
        <Box
          mt={10}
          p={6}
          bg={useColorModeValue('purple.50', 'gray.700')}
          borderRadius="md"
          boxShadow="lg"
          maxW="800px"
          mx="auto"
          _hover={{ boxShadow: '2xl', transform: 'scale(1.05)' }}
          transition="0.3s ease"
        >
          <Heading as="h4" size="md" mb={4} color="purple.800">
            ПРОФОРИЕНТАЦИЯ НА БАЗЕ AI
          </Heading>
          <Text color={color}>
            Тест, проводимый с использованием искусственного интеллекта. Он анализирует вашу личность, выявляет ваши способности и интересы, 
            после чего предоставляет персонализированный набор рекомендаций по профессиям, которые могли бы вам подойти.
          </Text>
          <Button mt={4} colorScheme="purple" variant="outline">
            Подробнее
          </Button>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default MainPage;
