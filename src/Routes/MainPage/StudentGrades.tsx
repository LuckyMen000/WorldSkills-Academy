import React from 'react';
import { Box, Heading, Text, SimpleGrid, Avatar, Stack, HStack, useColorModeValue } from '@chakra-ui/react';

const testimonials = [
  {
    name: 'Иван Иванов',
    course: 'Python',
    rating: 5,
    avatar: 'https://bit.ly/dan-abramov',
    feedback: 'Отличный курс! Преподаватели очень понятно объясняют материал.',
  },
  {
    name: 'Мария Смирнова',
    course: 'Frontend',
    rating: 4,
    avatar: 'https://bit.ly/kent-c-dodds',
    feedback: 'Курс был сложный, но полезный! Я улучшила свои навыки в HTML и CSS.',
  },
  {
    name: 'Алексей Кузнецов',
    course: 'DevOps',
    rating: 5,
    avatar: 'https://bit.ly/ryan-florence',
    feedback: 'Мне понравился практический подход на курсе. Теперь я уверенно использую Docker и Kubernetes.',
  },
  {
    name: 'Екатерина Петрова',
    course: 'Кибербезопасность',
    rating: 4,
    avatar: 'https://bit.ly/prosper-baba',
    feedback: 'Очень информативный курс! Я теперь лучше понимаю, как защитить свою инфраструктуру.',
  },
  {
    name: 'Дмитрий Сидоров',
    course: 'Linux',
    rating: 5,
    avatar: 'https://bit.ly/code-beast',
    feedback: 'После курса Linux я стал уверенно работать с серверами. Прекрасный опыт!',
  },
  {
    name: 'Ольга Орлова',
    course: 'Java',
    rating: 5,
    avatar: 'https://bit.ly/tioluwani-kolawole',
    feedback: 'Интересный и увлекательный курс. Понравилось, как объяснялись сложные концепции Java.',
  },
];

const StudentGrades: React.FC = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('black', 'white');
  const shadowHover = useColorModeValue('2xl', 'dark-lg');

  return (
    <Box
      py={16}
      px={8}
      bgGradient="linear(to-br, purple.50, blue.50)" minH="100vh"
      textAlign="center"
      borderRadius="xl"
      boxShadow="xl"
    >
      <Heading as="h3" size="xl" mb={12} color="black">
        Что говорят наши студенты
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} maxW="1200px" mx="auto">
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            p={8}
            bg={cardBg}
            borderRadius="xl"
            boxShadow="lg"
            transition="0.3s ease-in-out"
            _hover={{
              boxShadow: shadowHover,
              transform: 'translateY(-10px)',
              bgGradient: 'linear(to-r, purple.100, blue.50)',
            }}
          >
            <Stack spacing={5} align="center">
              <Avatar size="xl" name={testimonial.name} src={testimonial.avatar} />
              <Heading as="h4" size="md" color="purple.800">
                {testimonial.name}
              </Heading>
              <Text color={color} fontSize="md">
                Курс: {testimonial.course}
              </Text>
              <HStack>
                <Text color={color} fontSize="md">Оценка:</Text>
                <Text color="yellow.500" fontSize="lg">{'★'.repeat(testimonial.rating)}</Text>
              </HStack>
              <Text color={color} fontSize="sm" textAlign="center" noOfLines={4}>
                {testimonial.feedback}
              </Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default StudentGrades;
