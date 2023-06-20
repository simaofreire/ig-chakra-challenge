'use client';

import { Flex, Heading } from '@chakra-ui/react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Separator from '../components/Separator';

export default function Home() {
	return (
		<Flex h="100vh" w="100vw" align="flex-start" justify="center">
			<Flex maxW="1440px" direction="column" align="center">
				<Header />
				<Banner />
				<Menu />
				<Separator />

				<Heading textAlign="center" fontWeight="500" mb={['5', '14']} fontSize={['lg', '3xl', '4xl']}>
					Vamos nessa?
					<br />
					Então escolha seu continente
				</Heading>
			</Flex>
		</Flex>
	);
}
