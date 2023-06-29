import { Grid } from '@chakra-ui/react';
import Icons from './Icons';

export default function Menu() {
	return (
		<Grid
			gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, auto)']}
			w="100%"
			maxW="1160px"
			alignItems="center"
			justifyContent="space-between"
			mt={['10', '32']}
			mx="auto"
			gap={[1, 5]}
		>
			<Icons />
		</Grid>
	);
}
