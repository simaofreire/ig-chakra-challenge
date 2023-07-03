import { Grid, Text } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import Info from './info';

type ContinentsTypes = {
	[key: string]: string;
};

export default function ContinentContent() {
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
		<Grid templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']} gap={[5, 10, 16, 20]} my={['8', '20']}>
			<Text fontSize={['lg', 'xl', 'xl', '2xl']} color="gray.700" textAlign="justify">
				A {continents[slug]} é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da
				Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o
				mar Cáspio, o Cáucaso, e o mar Negro a sudeste
			</Text>
			<Info />
		</Grid>
	);
}
