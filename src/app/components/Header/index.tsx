import { Flex, Grid, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Logo from './Logo';

export default function Header() {
	const pathname = usePathname();
	const isHomePage = pathname === '/';

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
				{!isHomePage && (
					<Link href="/">
						<Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" color="black" />
					</Link>
				)}
				<Logo />
			</Grid>
		</Flex>
	);
}
