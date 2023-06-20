import { Image } from '@chakra-ui/next-js';
import { Flex, GridItem, Text, useBreakpointValue } from '@chakra-ui/react';
import building from '../../../../../public/images/building.svg';
import cocktail from '../../../../../public/images/cocktail.svg';
import earth from '../../../../../public/images/earth.svg';
import museum from '../../../../../public/images/museum.svg';
import surf from '../../../../../public/images/surf.svg';

export default function Icons() {
	const isMobile = useBreakpointValue({
		base: false,
		sm: true
	});

	const iconData = [
		{ icon: cocktail, text: 'vida noturna' },
		{ icon: surf, text: 'praia' },
		{ icon: building, text: 'moderno' },
		{ icon: museum, text: 'clássico' },
		{ icon: earth, text: 'e mais...' }
	];

	return (
		<>
			{iconData.map(({ icon, text }) => (
				<GridItem w="100%" key={text}>
					<Flex direction={['row', 'column']} align="center" justify="center">
						{isMobile ? (
							<Image src={icon} alt={text} w="85px" h="85px" mb="6" />
						) : (
							<Text color="yellow.400" fontSize="4xl">
								•
							</Text>
						)}
						<Text fontWeight="600" color="gray.700" fontSize={['md', 'xl', '2xl']}>
							{text}
						</Text>
					</Flex>
				</GridItem>
			))}
		</>
	);
}
