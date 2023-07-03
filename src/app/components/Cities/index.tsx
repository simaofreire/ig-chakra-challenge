import { Grid, Heading } from '@chakra-ui/react';
import City from './City';

export default function Cities() {
	const cities = Array.from({ length: 5 }, (_, index) => index + 1);

	return (
		<>
			<Heading fontWeight="500" fontSize={['2xl', '4xl']} mb="10">
				Cidades +100
				<Grid
					templateColumns={['1fr', '1fr 1fr', 'repeat(3,1fr)', 'repest(4,1fr)']}
					gap={['20px', '45px']}
					alignItems="center"
					justifyContent="center"
					px={['30px', '0']}
				>
					{cities.map((_, index) => (
						<City key={index} />
					))}
				</Grid>
			</Heading>
		</>
	);
}
