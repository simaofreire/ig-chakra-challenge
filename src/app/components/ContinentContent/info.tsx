'use client';

import {
	Flex,
	Heading,
	Icon,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverTrigger,
	Text
} from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

export default function Info() {
	return (
		<Flex align="center" justifyContent="space-between">
			<Flex direction="column" justify="center" align={['flex-start', 'flex-start', 'center']}>
				<Heading fontSize={['2xl', '5xl']} color="yellow.400" fontWeight="bold">
					50
				</Heading>
				<Text fontWeight={['md', 'xl']} color="gray.700">
					países
				</Text>
			</Flex>
			<Flex direction="column" justify="center" align={['flex-start', 'flex-start', 'center']}>
				<Heading fontSize={['2xl', '5xl']} color="yellow.400" fontWeight="bold">
					60
				</Heading>
				<Text fontWeight={['md', 'xl']} color="gray.700">
					línguas
				</Text>
			</Flex>
			<Flex direction="column" justify="center" align={['flex-start', 'flex-start', 'center']}>
				<Heading fontSize={['2xl', '5xl']} color="yellow.400" fontWeight="bold">
					27
				</Heading>

				<Text fontWeight={['md', 'xl']} color="gray.700">
					cidades +100
					<Popover>
						<PopoverTrigger>
							<span>
								<Icon cursor="pointer" as={RiInformationLine} ml="1" w={['10px', '16px']} h={['10px', '16px']} />
							</span>
						</PopoverTrigger>
						<PopoverContent bg="gray.700" color="yellow.400">
							<PopoverArrow bg="gray.700" />
							<PopoverCloseButton />
							<PopoverBody fontWeight="400" fontSize="lg">
								Paris, Europa, Chile, Canada, China
							</PopoverBody>
						</PopoverContent>
					</Popover>
				</Text>
			</Flex>
		</Flex>
	);
}
