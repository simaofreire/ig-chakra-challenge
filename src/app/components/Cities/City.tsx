'use client';

import { Image } from '@chakra-ui/next-js';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import unitedkingdom from '../../../../public/images/unitedkingdom.jpg';
import unitedkingdomflag from '../../../../public/images/unitedkingdomflag.jpg';

export default function City() {
	return (
		<Box borderRadius="4px" overflow="hidden" maxW="256px" w="100%">
			<Image src={unitedkingdom} alt="Reino unido" h="170px" w="100%" />
			<Flex align="center" p="6" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
				<Flex direction="column">
					<Heading fontSize="xl" fontWeight="500">
						Londres
					</Heading>
					<Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
						Reino Unido
					</Text>
				</Flex>
				<Image
					src={unitedkingdomflag}
					alt="Reino unido"
					h="30px"
					w="30px"
					borderRadius="50%"
					style={{ objectFit: 'cover' }}
				/>
			</Flex>
		</Box>
	);
}
