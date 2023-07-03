'use client';

import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Carousel() {
	const continentsData = [
		{ name: 'América do Norte', description: 'O continente mais antigo.', url: 'americadonorte' },
		{ name: 'América do Sul', description: 'O continente mais antigo.', url: 'americadosul' },
		{ name: 'Ásia', description: 'O continente mais antigo.', url: 'asia' },
		{ name: 'África', description: 'O continente mais antigo.', url: 'africa' },
		{ name: 'Europa', description: 'O continente mais antigo.', url: 'europe' },
		{ name: 'Oceania', description: 'O continente mais antigo.', url: 'oceania' }
	];

	return (
		<Flex w="100%" maxW="1240px" mx="auto" mb={['5', '10']} h={['250px', '450px']}>
			<Swiper
				modules={[Navigation, Pagination, A11y, Autoplay]}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000 }}
			>
				{continentsData.map(({ name, description, url }) => (
					<SwiperSlide key={name}>
						<Flex
							w="100%"
							h="100%"
							align="center"
							justify="center"
							direction="column"
							bgImg={`url(./images/${url}.jpg)`}
							bgPos="center"
							bgSize="cover"
							bgRepeat="no-repeat"
							textAlign="center"
						>
							<Link href={`/continent/${url}`}>
								<Heading
									fontSize={['3xl', '4xl', '5xl']}
									color="gray.100"
									fontWeight="bold"
									cursor="pointer"
									transition="0.3s ease-in"
									_hover={{ textDecor: 'underline' }}
								>
									{name}
									<Text fontWeight="bold" color="gray.300" fontSize={['0.8rem', '1xl', '2xl']} mt={['2', '4']}>
										{description}
									</Text>
								</Heading>
							</Link>
						</Flex>
					</SwiperSlide>
				))}
			</Swiper>
		</Flex>
	);
}
