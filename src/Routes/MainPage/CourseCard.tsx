import React from 'react';
import { Box, Heading, Text, Stack, Badge, SimpleGrid, Button, Center, HStack } from '@chakra-ui/react';

const courses = [
  {
    title: 'Сетевые технологии',
    description: 'Учим с нуля сетевых инженеров и DevOPS специалистов',
    duration: '2 месяца',
    level: 'Новички',
    badgeColor: 'blue',
  },
  {
    title: 'Python',
    description: 'Стань разработчиком на одном из самых популярных языков программирования',
    duration: '4 месяца',
    level: 'Новички',
    badgeColor: 'green',
  },
  {
    title: 'DevOps',
    description: 'Научитесь использовать инструменты и методы DevOps',
    duration: '4 месяца',
    level: 'Новички',
    badgeColor: 'purple',
  },
  {
    title: 'Java',
    description: 'Освойте backend-разработку на Java, фреймворки Spring и Maven, работу с БД и API',
    duration: '4 месяца',
    level: 'Новички',
    badgeColor: 'orange',
  },
  {
    title: 'Linux',
    description: 'Пополните скиллсет умением работать с операционными системами Linux',
    duration: '2 месяца',
    level: 'Новички',
    badgeColor: 'teal',
  },
  {
    title: 'Кибербезопасность',
    description: 'Изучи хакерский майндсет и научись защищать свою инфраструктуру',
    duration: '4 месяца',
    level: 'Новички',
    badgeColor: 'cyan',
  },
  {
    title: 'Frontend',
    description: 'Изучите основы HTML, CSS и JavaScript для создания веб-сайтов',
    duration: '4 месяца',
    level: 'Новички',
    badgeColor: 'pink',
  },
  {
    title: 'Frontend',
    description: 'Изучите основы HTML, CSS и JavaScript для создания веб-сайтов',
    duration: '4 месяца',
    level: 'Новички',
    badgeColor: 'pink',
  },
  {
    title: 'Frontend',
    description: 'Изучите основы HTML, CSS и JavaScript для создания веб-сайтов',
    duration: '4 месяца',
    level: 'Новички',
    badgeColor: 'pink',
  },
];

const CourseList: React.FC = () => {
  return (
    <Box p={8} bgGradient="linear(to-br, purple.50, blue.50)" minH="100vh">
      <Heading as="h2" size="xl" mb={10} textAlign="center" color="purple.700">
        Популярные программы
      </Heading>
      <Text mb={8} textAlign="center" fontSize="lg" color="gray.600">
        Попробуйте наши самые популярные курсы, которые получили самые высокие оценки от студентов
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {courses.map((course, index) => (
          <Box
            key={index}
            p={8}
            borderWidth="2px"
            borderRadius="25px"
            bgGradient="linear(to-br, white, purple.50)"
            boxShadow="lg"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
              transform: 'scale(1.08)',
              boxShadow: '2xl',
              bgGradient: 'linear(to-br, white, purple.100)',
            }}
          >
            <Stack spacing={5}>
              <HStack spacing={3}>
                <Badge colorScheme={course.badgeColor} borderRadius="full" px={4} py={2} fontSize="0.9em">
                  {course.level}
                </Badge>
                <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                  {course.duration}
                </Text>
              </HStack>
              <Heading size="md" color="purple.800">
                {course.title}
              </Heading>
              <Text color="gray.700" noOfLines={3}>
                {course.description}
              </Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
      <Center mt={16}>
        <Button
          size="lg"
          colorScheme="purple"
          bgGradient="linear(to-r, purple.400, blue.500)"
          _hover={{
            bgGradient: 'linear(to-r, purple.500, blue.600)',
            boxShadow: 'xl',
          }}
          px={12}
          py={7}
        >
          Больше программ
        </Button>
      </Center>
    </Box>
  );
};

export default CourseList;
