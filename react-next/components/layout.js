import { useContext } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Context from '../components/context';

const Layout = (props) => {
	const { navIsOpen } = useContext(Context);
	return (
		<div className="container" className={`container ${navIsOpen ? 'container--nav-is-open' : ''}`}>
			<Head>
				<title>Jon Muller | User interface developer</title>
				<link rel="icon" type="image/x-icon" href="~$shared/images/heart.svg" />
			</Head>
			<Nav />
			<div className="content">
				{props.children}
			</div>
		</div>
	);
};

export default Layout;
