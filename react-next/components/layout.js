import { useContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Context from '../components/context';
import Nav from '../components/nav';
import Transition from '../components/transition';

const Layout = ({ children }) => {
	const { navIsOpen } = useContext(Context);
	const router = useRouter();
	return (
		<div className="container" className={`container ${navIsOpen ? 'container--nav-is-open' : ''}`}>
			<Head>
				<title>Jon Muller | User interface developer</title>
				<link rel="icon" type="image/x-icon" href={require('$shared/images/heart.svg')} />
				<meta name="description" content="Yeah, Javascript is cool, but have you tried writing less code and getting better results?" />
			</Head>
			<Nav />
			<div className="content">
				<Transition location={router.pathname}>{children}</Transition>
			</div>
		</div>
	);
};

export default Layout;
