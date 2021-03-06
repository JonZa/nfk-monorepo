import Link from 'next/link';

const Thanks = () => {
	return (
		<>
			<h1>Sweet</h1>
			<p>Thanks for getting in touch, I'll get back to you shortly.</p>
			<p>
				Nothing left to do here except <Link href="/game/">play my puzzle game</Link> until home-time. Put it down on your timesheet as "executive time."
			</p>
		</>
	);
};

export default Thanks;
