'use client';

import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Carousel() {
	const continentsData = [
		{ name: 'América do Norte', description: 'O continente mais antigo.' },
		{ name: 'América do Sul', description: 'O continente mais antigo.' },
		{ name: 'Ásia', description: 'O continente mais antigo.' },
		{ name: 'África', description: 'O continente mais antigo.' },
		{ name: 'Europa', description: 'O continente mais antigo.' },
		{ name: 'Oceania', description: 'O continente mais antigo.' }
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
				{continentsData.map(({ name, description }) => (
					<SwiperSlide key={name}>
						<Flex
							w="100%"
							h="100%"
							align="center"
							justify="center"
							direction="column"
							bgImg="url(./images/europe.png)"
							bgPos="center"
							bgSize="cover"
							bgRepeat="no-repeat"
							textAlign="center"
						>
							<Link href="/continent" legacyBehavior>
								<a>
									<Heading fontSize={['3xl', '4xl', '5xl']} color="gray.100" fontWeight="bold">
										{name}
									</Heading>
									<Text fontWeight="bold" color="gray.300" fontSize={['0.8rem', '1xl', '2xl']} mt={['2', '4']}>
										{description}
									</Text>
								</a>
							</Link>
						</Flex>
					</SwiperSlide>
				))}
			</Swiper>
		</Flex>
	);
}
