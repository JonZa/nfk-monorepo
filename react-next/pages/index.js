import Layout from '../components/layout';
import Link from 'next/link';

const Home = () => {
	return (
		<Layout>
			<h1>I'm Jon Muller</h1>
			<p>
				I've been building user interfaces
				<br className="soft" />
				for over 20 years.
			</p>
			<p>
				I've been described as:
				<br />
				<strong>“a frontend development genius”</strong> <br className="soft" />
				by a head of engineering,
				<br />
				<strong>“fantastic to work with”</strong> <br className="soft" />
				by a client,
				<br />
				<strong>“great at simplifying complex problems”</strong> <br className="soft" />
				by a manager, and
				<br />
				<strong>“the best manager I have worked for”</strong> <br className="soft" />
				by a teammate.
			</p>
			<p>
				I'm in Sydney, Australia,
				<br className="soft" />
				and I'm looking for work.
			</p>
			<p>
				You can{' '}
				<a href="files/JonMuller-min.pdf" download>
					download my resume
				</a>
				, <br className="soft" />
				email me at <a href="mailto:jon.muller@gmail.com">jon.muller@gmail.com</a> <br className="soft" />
				or{' '}
				<Link href="/about">
					<a>read more about me</a>
				</Link>
				.
			</p>
		</Layout>
	);
};

export default Home;
