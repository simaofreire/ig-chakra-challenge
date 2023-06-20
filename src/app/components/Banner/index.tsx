import { Image } from '@chakra-ui/next-js';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Airplane from '../../../../public/images/Airplane.svg';

export default function Banner() {
	return (
		<Flex
			w="100%"
			h={['163px', '250px', '250px', '335px']}
			bgImg="url(./images/Banner.jpg)"
			bgRepeat="no-repeat"
			bgSize="cover"
			bgPosition={['100 20%', '100% 20%', '100% 30%']}
		>
			<Flex justify={['center', 'space-between']} align="center" w="100%" mx="auto" px={['4', '10', '15', '36']}>
				<div>
					<Heading color="gray.100" fontWeight="500" fontSize={['xl', '2xl', '2xl', '2xl', '4xl']}>
						5 Continentes, <br />
						infinitas possibilidades
					</Heading>
					<Text color="gray.300" mt="5" fontSize={['0.8rem', 'xl']} maxW={['100%', '100%', '100%', '550px']}>
						Chegou a hora de tirar do papel a viagem que você sempre sonhou.
					</Text>
				</div>

				<Image
					w={['300px', '300px', '300px', '430px']}
					display={['none', 'none', 'block']}
					src={Airplane}
					alt="airplane"
					transform="translateY(48px)"
					ml="8"
				/>
			</Flex>
		</Flex>
	);
}
