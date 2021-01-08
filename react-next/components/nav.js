import { useContext, useRef } from 'react';
import Link from 'next/link';
import Context from '../components/context';

const Nav = () => {
	const { navIsOpen, toggleNavIsOpen, hamburger } = useContext(Context);
	// let navIsOpen = false;
	const links = [
		{
			title: 'Home',
			to: '/',
		},
		{
			title: 'About',
			to: '/about/',
		},
		{
			title: 'Experience',
			to: '/experience/',
		},
		{
			title: 'Recommendations',
			to: '/recommendations/',
		},
		{
			title: 'Contact',
			to: '/contact/',
		},
		{
			title: 'Game',
			to: '/game/',
		},
	];
	return (
		<>
			<nav className={`nav__container ${navIsOpen ? 'nav__container--open' : ''}`} onClick={toggleNavIsOpen}>
				<button className={`nav__hamburger ${navIsOpen ? 'nav__hamburger--open' : ''}`} type="button" aria-label="Show navigation" ref={hamburger}></button>
				<ul className={`nav__links ${navIsOpen ? 'nav__links--open' : ''}`} style={{ '--children': links.length }}>
					{links.map((link, n) => (
						<li style={{ '--child-n': n }} key={'child-' + n}>
							<Link href={link.to}>
								<a>{link.title}</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default Nav;
