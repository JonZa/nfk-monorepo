import React from 'react';
import App from 'next/app';
import Context from '../components/context';
import Layout from '../components/layout';
import '../../shared/sass/styles.scss';

export default class NfkSt extends App {
	state = {
		navIsOpen: false,
	};
	hamburger = React.createRef();
	toggleNavIsOpen = () => {
		if (getComputedStyle(this.hamburger.current).display === 'block') {
			this.setState({
				navIsOpen: !this.state.navIsOpen,
			});
		} else {
			this.setState({
				navIsOpen: false,
			});
		}
	};
	render() {
		const { Component, pageProps } = this.props;

		return (
			<Context.Provider value={{ navIsOpen: this.state.navIsOpen, toggleNavIsOpen: this.toggleNavIsOpen, hamburger: this.hamburger }}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Context.Provider>
		);
	}
}
