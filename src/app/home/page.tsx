'use client';

import { Flex, Heading } from '@chakra-ui/react';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Separator from '../components/Separator';

export default function Home() {
	return (
		<Flex w="100%" direction="column" align="center">
			<Header />
			<Banner />
			<Menu />
			<Separator />

			<Heading textAlign="center" fontWeight="500" mb={['5', '14']} fontSize={['lg', '3xl', '4xl']}>
				Vamos nessa?
				<br />
				Então escolha seu continente
			</Heading>

			<Carousel />
		</Flex>
	);
}
