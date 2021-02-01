import Quote from '../../components/quote';

const Recommendations = () => {
	const quotes = [
		{
			pictures: {
				jpg: require('$shared/images/people__tom.jpg?resize&size=114'),
				x1: require('$shared/images/people__tom.jpg?resize&size=114&format=webp'),
				x2: require('$shared/images/people__tom.jpg?resize&size=228&format=webp'),
			},
			author: 'Tom Somerville',
			title: 'Head Of Engineering at FLKitover',
			content: ['I am happy to recommend Jon as he has been a fantastic developer to work with. He brings with him a wealth of knowledge and will set his mind on any task you give him. He always strives for the best solution to any problem and will happily discuss solutions with the rest of the team to get to the ultimate outcome.', 'He is truly a genius when it comes to frontend development and I have learned much working with him. He would be a massive asset to any team.'],
		},
		{
			pictures: {
				jpg: require('$shared/images/people__mark.jpg?resize&size=114'),
				x1: require('$shared/images/people__mark.jpg?resize&size=114&format=webp'),
				x2: require('$shared/images/people__mark.jpg?resize&size=228&format=webp'),
			},
			author: 'Mark Edgington',
			title: 'CEO at Incendiary Blue',
			content: ["I've employed Jon for his outstanding front-end development skills and excellent communication, and I have recommend him to (and he has worked for) other contacts. The projects he has worked on for me have been varied but include Nestle, Orrick, Vincent and Elkin, Pfizer, EY and Unilever. The types of projects have varied but have strongly focused on utilising Jon’s best-in-class work as a user experience developer specialising in HTML, CSS and JS."],
		},
		{
			pictures: {
				jpg: require('$shared/images/people__edward.jpg?resize&size=114'),
				x1: require('$shared/images/people__edward.jpg?resize&size=114&format=webp'),
				x2: require('$shared/images/people__edward.jpg?resize&size=228&format=webp'),
			},
			author: 'Edward Wong',
			title: 'Head Of Strategy at 4mation Technologies',
			content: ['Jon is a sensational front end developer, dedicated to getting the job done right the first time. He deeply believes in the welfare of his team mates and has an infinite amount of patience when helping and mentoring junior developers. Jon would be an asset to any organisation.'],
		},
		{
			pictures: {
				jpg: require('$shared/images/people__sacha.jpg?resize&size=114'),
				x1: require('$shared/images/people__sacha.jpg?resize&size=114&format=webp'),
				x2: require('$shared/images/people__sacha.jpg?resize&size=228&format=webp'),
			},
			author: 'Sacha Henry',
			title: 'Marketing Manager at 4mation Technologies',
			content: ['Jon is a skilled UI developer and great at simplifying complex problems. He is very knowledgeable and delivers great technical insights to both clients and his team.', 'He has a calm personality which is needed when involved in stressful situations. In every one of our conversations, he has explained processes and website updates calmly and methodically so that I have a very clear understanding of tasks remaining and tasks completed.', 'He has great attention to detail and applies himself thoroughly to the task at hand.'],
		},
		{
			pictures: {
				jpg: require('$shared/images/people__joe.jpg?resize&size=114'),
				x1: require('$shared/images/people__joe.jpg?resize&size=114&format=webp'),
				x2: require('$shared/images/people__joe.jpg?resize&size=228&format=webp'),
			},
			author: 'Joe da Silva',
			title: 'CEO at FormFunction Digital Consultants',
			content: ['Jon is extremely well respected by the web development community and the designers and developers that he has worked with. I recommend Jon highly and have no hesitation in endorsing Jon as a domain expert who has a very unique and highly sought after set of skills; and he is great to work with.'],
		},
		{
			pictures: {
				jpg: require('$shared/images/people__hamish.jpg?resize&size=114'),
				x1: require('$shared/images/people__hamish.jpg?resize&size=114&format=webp'),
				x2: require('$shared/images/people__hamish.jpg?resize&size=228&format=webp'),
			},
			author: 'Hamish Songsmith',
			title: 'Project Manager at Optiver Asia Pacific',
			content: ['Jon is a superstar; not just an exceptionally talented UI dev, but the teammate who will go the extra yard to add that final piece of polish to any project. What I appreciated most about Jon was his ability to give, receive and discuss difficult feedback, Jon was alway honest with me. This is why I felt strongly about making him a team lead and I feel contributed to him succeeding in that role.', 'Jon has the skills to succeed both in a technical role and as a leader, I wish him well in all his future endeavours.'],
		},
		{
			author: 'Adam Sheik',
			title: 'CEO at Celerity Design',
			content: ['Jon has been a vital part of our team — whenever we have had work that requires high-end responsive web templates, advanced Javascript, or front-end data integration, Jon has been our developer of choice.'],
		},
		{
			pictures: {
				jpg: require('$shared/images/people__dane.jpg?resize&size=114'),
				x1: require('$shared/images/people__dane.jpg?resize&size=114&format=webp'),
				x2: require('$shared/images/people__dane.jpg?resize&size=228&format=webp'),
			},
			author: 'Dane Eldridge',
			title: 'Founder &amp; CEO at 4mation Technologies',
			content: ['Jon is a dedicated and multi-skilled team member. As a UI developer he demonstrated excellent technical skills and provided pragmatic, considered advice. As a team leader and manager Jon developed strong relationships with his direct reports, and created a genuinely committed, tight knit team.'],
		},
		{
			author: 'Bhavic Nana',
			title: 'Senior Developer, pi-squared',
			content: ["I can ascribe directly to Jon's high degree of proficiency in his work as he greatly helped us to generate success in the business with his attention to detail, tireless work ethic, and his unwavering desire to ensure that our clients' needs were not only met, but also surpassed."],
		},
		{
			pictures: {
				jpg: require('$shared/images/people__cath.jpg?resize&size=114'),
				x1: require('$shared/images/people__cath.jpg?resize&size=114&format=webp'),
				x2: require('$shared/images/people__cath.jpg?resize&size=228&format=webp'),
			},
			author: 'Cath Hughes',
			title: 'Product Manager at 4mation Technologies',
			content: [
				'I reported to Jon in his role as Senior UI Developer and Team Lead at 4mation, a multi-disciplinary agile software and development agency.',
				'Jon is truly a front end master, his ability to simplify projects and manipulate designs into near pixel-perfect front end user experiences is incredible. He approaches every project as an opportunity to apply his ever-evolving skill set, and always adds value to projects, with an inherent understanding of design fundamentals.',
				'As a senior developer, Jon also mentored less experienced staff, helping them realise efficiency and the importance of responsiveness and performance as absolute defaults to any front end work. He advocated for the use of design systems and generally approached all work with scalability and usability in mind.',
				'As a Team Lead, Jon is an egalitarian. He seeks to build people up, provides feedback without fuss and genuinely cares about the success of his team. He is respectful and nurturing, and without a doubt the best manager I have worked for.',
				'Jon champions simplicity. In process, in communication and development. He has a unique way of streamlining effort and this has been invaluable given the number of projects he’s juggled simultaneously.',
				'Often referred to as the ‘CSS wizard’, Jon has been a pleasure to work with and he would be an excellent asset to any team.',
			],
		},
		{
			pictures: {
				jpg: require('$shared/images/people__janice.jpg?resize&size=114'),
				x1: require('$shared/images/people__janice.jpg?resize&size=114&format=webp'),
				x2: require('$shared/images/people__janice.jpg?resize&size=228&format=webp'),
			},
			author: 'Janice Goodman',
			title: 'Scrum Master at 4mation Technologies',
			content: ['I worked with Jon at 4mation Technologies, and although we were not part of the same Scrum team, Jon would often step in to help our team with UI development as needed, because that’s just the kind of guy he is. Jon would ensure that we were always able to deliver within aggressive timelines, whilst maintaining quality work of the highest standard.', 'He is not only an absolute wizard at what he does, but he is incredibly patient and able to explain complex technical concepts in a way that is easy to digest and understand. Jon is passionate and cares so much about his work, that it’s easy to see how he is revered and loved across the business as well as by our clients.', 'He was crowned “Employee of the Year” in 2018 and promoted to Team Lead shortly after in acknowledgment of his contribution to the company and ongoing support to his peers; a well-deserved honour for the talent that he is.'],
		},
		{
			pictures: {
				jpg: require('$shared/images/people__sam.jpg?resize&size=114'),
				x1: require('$shared/images/people__sam.jpg?resize&size=114&format=webp'),
				x2: require('$shared/images/people__sam.jpg?resize&size=228&format=webp'),
			},
			author: 'Sam Hodges',
			title: 'Full Stack Developer at 4mation Technologies',
			content: ['Jon is an amazing UI developer that has taught me a lot over the years. Having spent years myself doing UI work I thought I knew what I was doing... until I met Jon. I have seen him tackle incredible difficult designs with ease and he has helped me countless times to fix UI issues I couldn’t solve.', 'Jon was also my Team Lead and direct manager. His management style brought out the best in everyone in our team. He encouraged robust conversations, allowed us to challenge ideas and was always approachable for any issue.', 'I would recommend Jon to any organisation.'],
		},
		{
			pictures: {
				jpg: require('$shared/images/people__roger.jpg?resize&size=114'),
				x1: require('$shared/images/people__roger.jpg?resize&size=114&format=webp'),
				x2: require('$shared/images/people__roger.jpg?resize&size=228&format=webp'),
			},
			author: 'Roger Marley',
			title: 'Senior Full Stack Developer at 4mation Technologies',
			content: ["Jon is a UI wizard, a man who paints art in CSS and JS. He is a very reliable senior front-end specialist, and it was good working with him as a back-end / front-end duo in producing a brand new website for a Sydney agency from scratch. He has also been a great advocate and wheel-greaser for any team he has been a part of. He's deeply knowledgeable and experienced in all things front-end, including React and other frameworks. Jon is a big front-end asset for any team."],
		},
	];
	return (
		<>
			<h1>Recommendations</h1>
			{quotes.map((quote, n) => (
				<React.Fragment key={n}>
					<Quote quote={quote} key={'quote-' + n} />
					<hr key={'hr-' + n} />
				</React.Fragment>
			))}
		</>
	);
};

export default Recommendations;
