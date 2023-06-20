import { Image } from '@chakra-ui/next-js';
import LogoImg from '../../../../../public/images/Logo.svg';

export default function Logo() {
	return <Image src={LogoImg} alt="logo" w={['81px', '184px']} justifySelf="center" gridColumn="2" />;
}
