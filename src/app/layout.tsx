import { ChakraProvider } from '@/providers/ChakraProvider';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin']
});

export const metadata = {
	title: 'Home'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR">
			<body className={roboto.className}>
				<ChakraProvider>{children}</ChakraProvider>
			</body>
		</html>
	);
}
