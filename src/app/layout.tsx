'use client';

import { ChakraProvider } from '@/providers/ChakraProvider';
import '@/styles/carousel.scss';
import { Flex } from '@chakra-ui/react';
import { Roboto } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin']
});

export const metadata = {
	title: 'Home'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR">
			<body className={roboto.className}>
				<ChakraProvider>
					<Flex h="100vh" w="100vw" align="flex-start" justify="center" overflowX="hidden">
						{children}
					</Flex>
				</ChakraProvider>
			</body>
		</html>
	);
}
