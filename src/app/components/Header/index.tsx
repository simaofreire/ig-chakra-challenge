import { Flex, Grid } from '@chakra-ui/react';
import Logo from './Logo';

export default function Header() {
	return (
		<Flex as="header" bg="white" w="100%" mx="auto" align="center" px="1rem" h={['50px', '100px']} alignItems="center">
			<Grid
				h="100%"
				mx="auto"
				w="100%"
				maxW="1160px"
				alignItems="center"
				templateColumns="repeat(3,1fr)"
				justifyContent="center"
			>
				<Logo />
			</Grid>
		</Flex>
	);
}
