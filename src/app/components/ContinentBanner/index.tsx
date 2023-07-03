import { Flex, Heading } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

type ContinentsTypes = {
	[key: string]: string;
};

export default function ContinentBanner() {
	const { slug } = useParams();
	const continents: ContinentsTypes = {
		americadonorte: 'América do Norte',
		americadosul: 'América do Sul',
		asia: 'Ásia',
		africa: 'África',
		europe: 'Europa',
		oceania: 'Oceania'
	};

	return (
		<Flex
			w="100%"
			h={['150px', '300px', '500px']}
			px={['0', '0', '36']}
			pt={['0', '0', '72']}
			bgImg={`url(./../images/${slug}.jpg)`}
			bgPos="center"
			bgRepeat="no-repeat"
			bgSize="cover"
			align="center"
			justify={['center', 'center', 'flex-start']}
		>
			<Heading textAlign={['center', 'left']} fontSize={['1.75rem', '5xl']} color="gray.100" fontWeight="500">
				{continents[slug]}
			</Heading>
		</Flex>
	);
}
