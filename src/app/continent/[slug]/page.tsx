'use client';

import Cities from '@/app/components/Cities';
import ContinentBanner from '@/app/components/ContinentBanner';
import ContinentContent from '@/app/components/ContinentContent';
import Header from '@/app/components/Header';
import { Flex } from '@chakra-ui/react';

export default function Continent() {
	return (
		<Flex w="100%" direction="column" align="center">
			<Header />

			<ContinentBanner />

			<Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
				<ContinentContent />
				<Cities />
			</Flex>
		</Flex>
	);
}
