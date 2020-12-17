<template>
	<div class="contact">
		<h1>
			Recommendations
		</h1>
		<template v-for="(quote, i) in this.quotes">
			<Quote :key="'quote-' + i" v-bind:quote="quote" />
			<hr :key="'hr-' + i" />
		</template>
	</div>
</template>

<script>
import Quote from '@/components/quote.vue';

export default {
	components: {
		Quote
	},
	data() {
		return {
			quotes: [
				// {
				// 	pictures: {
				// 		jpg: require('~$shared/images/people__tom.jpg?resize&size=114'),
				// 		x1: require('~$shared/images/people__tom.jpg?resize&size=114&format=webp'),
				// 		x2: require('~$shared/images/people__tom.jpg?resize&size=228&format=webp')
				// 	},
				// 	author: 'Tom Somerville',
				// 	title: 'Head Of Engineering at FLKitover',
				// 	content: ['I am happy to recommend Jon as he has been a fantastic developer to work with. He brings with him a wealth of knowledge and will set his mind on any task you give him. He always strives for the best solution to any problem and will happily discuss solutions with the rest of the team to get to the ultimate outcome.', 'He is truly a genius when it comes to frontend development and I have learned much working with him. He would be a massive asset to any team.']
				// },
				// {
				// 	pictures: {
				// 		jpg: require('~$shared/images/people__mark.jpg?resize&size=114'),
				// 		x1: require('~$shared/images/people__mark.jpg?resize&size=114&format=webp'),
				// 		x2: require('~$shared/images/people__mark.jpg?resize&size=228&format=webp')
				// 	},
				// 	author: 'Mark Edgington',
				// 	title: 'CEO at Incendiary Blue',
				// 	content: ["I've employed Jon for his outstanding front-end development skills and excellent communication, and I have recommend him to (and he has worked for) other contacts. The projects he has worked on for me have been varied but include Nestle, Orrick, Vincent and Elkin, Pfizer, EY and Unilever. The types of projects have varied but have strongly focused on utilising Jon’s best-in-class work as a user experience developer specialising in HTML, CSS and JS."]
				// },
				// {
				// 	pictures: {
				// 		jpg: require('~$shared/images/people__edward.jpg?resize&size=114'),
				// 		x1: require('~$shared/images/people__edward.jpg?resize&size=114&format=webp'),
				// 		x2: require('~$shared/images/people__edward.jpg?resize&size=228&format=webp')
				// 	},
				// 	author: 'Edward Wong',
				// 	title: 'Head Of Strategy at 4mation Technologies',
				// 	content: ['Jon is a sensational front end developer, dedicated to getting the job done right the first time. He deeply believes in the welfare of his team mates and has an infinite amount of patience when helping and mentoring junior developers. Jon would be an asset to any organisation.']
				// },
				// {
				// 	pictures: {
				// 		jpg: require('~$shared/images/people__sacha.jpg?resize&size=114'),
				// 		x1: require('~$shared/images/people__sacha.jpg?resize&size=114&format=webp'),
				// 		x2: require('~$shared/images/people__sacha.jpg?resize&size=228&format=webp')
				// 	},
				// 	author: 'Sacha Henry',
				// 	title: 'Marketing Manager at 4mation Technologies',
				// 	content: ['Jon is a skilled UI developer and great at simplifying complex problems. He is very knowledgeable and delivers great technical insights to both clients and his team.', 'He has a calm personality which is needed when involved in stressful situations. In every one of our conversations, he has explained processes and website updates calmly and methodically so that I have a very clear understanding of tasks remaining and tasks completed.', 'He has great attention to detail and applies himself thoroughly to the task at hand.']
				// },
				// {
				// 	pictures: {
				// 		jpg: require('~$shared/images/people__joe.jpg?resize&size=114'),
				// 		x1: require('~$shared/images/people__joe.jpg?resize&size=114&format=webp'),
				// 		x2: require('~$shared/images/people__joe.jpg?resize&size=228&format=webp')
				// 	},
				// 	author: 'Joe da Silva',
				// 	title: 'CEO at FormFunction Digital Consultants',
				// 	content: ['Jon is extremely well respected by the web development community and the designers and developers that he has worked with. I recommend Jon highly and have no hesitation in endorsing Jon as a domain expert who has a very unique and highly sought after set of skills; and he is great to work with.']
				// },
				// {
				// 	pictures: {
				// 		jpg: require('~$shared/images/people__hamish.jpg?resize&size=114'),
				// 		x1: require('~$shared/images/people__hamish.jpg?resize&size=114&format=webp'),
				// 		x2: require('~$shared/images/people__hamish.jpg?resize&size=228&format=webp')
				// 	},
				// 	author: 'Hamish Songsmith',
				// 	title: 'Project Manager at Optiver Asia Pacific',
				// 	content: ['Jon is a superstar; not just an exceptionally talented UI dev, but the teammate who will go the extra yard to add that final piece of polish to any project. What I appreciated most about Jon was his ability to give, receive and discuss difficult feedback, Jon was alway honest with me. This is why I felt strongly about making him a team lead and I feel contributed to him succeeding in that role.', 'Jon has the skills to succeed both in a technical role and as a leader, I wish him well in all his future endeavours.']
				// },
				// {
				// 	author: 'Adam Sheik',
				// 	title: 'CEO at Celerity Design',
				// 	content: ['Jon has been a vital part of our team — whenever we have had work that requires high-end responsive web templates, advanced Javascript, or front-end data integration, Jon has been our developer of choice.']
				// },
				// {
				// 	pictures: {
				// 		jpg: require('~$shared/images/people__dane.jpg?resize&size=114'),
				// 		x1: require('~$shared/images/people__dane.jpg?resize&size=114&format=webp'),
				// 		x2: require('~$shared/images/people__dane.jpg?resize&size=228&format=webp')
				// 	},
				// 	author: 'Dane Eldridge',
				// 	title: 'Founder &amp; CEO at 4mation Technologies',
				// 	content: ['Jon is a dedicated and multi-skilled team member. As a UI developer he demonstrated excellent technical skills and provided pragmatic, considered advice. As a team leader and manager Jon developed strong relationships with his direct reports, and created a genuinely committed, tight knit team.']
				// },
				// {
				// 	author: 'Bhavic Nana',
				// 	title: 'Senior Developer, pi-squared',
				// 	content: ["I can ascribe directly to Jon's high degree of proficiency in his work as he greatly helped us to generate success in the business with his attention to detail, tireless work ethic, and his unwavering desire to ensure that our clients' needs were not only met, but also surpassed."]
				// },
				// {
				// 	pictures: {
				// 		jpg: require('~$shared/images/people__cath.jpg?resize&size=114'),
				// 		x1: require('~$shared/images/people__cath.jpg?resize&size=114&format=webp'),
				// 		x2: require('~$shared/images/people__cath.jpg?resize&size=228&format=webp')
				// 	},
				// 	author: 'Cath Hughes',
				// 	title: 'Product Manager at 4mation Technologies',
				// 	content: [
				// 		'I reported to Jon in his role as Senior UI Developer and Team Lead at 4mation, a multi-disciplinary agile software and development agency.',
				// 		'Jon is truly a front end master, his ability to simplify projects and manipulate designs into near pixel-perfect front end user experiences is incredible. He approaches every project as an opportunity to apply his ever-evolving skill set, and always adds value to projects, with an inherent understanding of design fundamentals.',
				// 		'As a senior developer, Jon also mentored less experienced staff, helping them realise efficiency and the importance of responsiveness and performance as absolute defaults to any front end work. He advocated for the use of design systems and generally approached all work with scalability and usability in mind.',
				// 		'As a Team Lead, Jon is an egalitarian. He seeks to build people up, provides feedback without fuss and genuinely cares about the success of his team. He is respectful and nurturing, and without a doubt the best manager I have worked for.',
				// 		'Jon champions simplicity. In process, in communication and development. He has a unique way of streamlining effort and this has been invaluable given the number of projects he’s juggled simultaneously.',
				// 		'Often referred to as the ‘CSS wizard’, Jon has been a pleasure to work with and he would be an excellent asset to any team.'
				// 	]
				// },
				// {
				// 	pictures: {
				// 		jpg: require('~$shared/images/people__janice.jpg?resize&size=114'),
				// 		x1: require('~$shared/images/people__janice.jpg?resize&size=114&format=webp'),
				// 		x2: require('~$shared/images/people__janice.jpg?resize&size=228&format=webp')
				// 	},
				// 	author: 'Janice Goodman',
				// 	title: 'Scrum Master at 4mation Technologies',
				// 	content: ['I worked with Jon at 4mation Technologies, and although we were not part of the same Scrum team, Jon would often step in to help our team with UI development as needed, because that’s just the kind of guy he is. Jon would ensure that we were always able to deliver within aggressive timelines, whilst maintaining quality work of the highest standard.', 'He is not only an absolute wizard at what he does, but he is incredibly patient and able to explain complex technical concepts in a way that is easy to digest and understand. Jon is passionate and cares so much about his work, that it’s easy to see how he is revered and loved across the business as well as by our clients.', 'He was crowned “Employee of the Year” in 2018 and promoted to Team Lead shortly after in acknowledgment of his contribution to the company and ongoing support to his peers; a well-deserved honour for the talent that he is.']
				// },
				// {
				// 	pictures: {
				// 		jpg: require('~$shared/images/people__sam.jpg?resize&size=114'),
				// 		x1: require('~$shared/images/people__sam.jpg?resize&size=114&format=webp'),
				// 		x2: require('~$shared/images/people__sam.jpg?resize&size=228&format=webp')
				// 	},
				// 	author: 'Sam Hodges',
				// 	title: 'Full Stack Developer at 4mation Technologies',
				// 	content: ['Jon is an amazing UI developer that has taught me a lot over the years. Having spent years myself doing UI work I thought I knew what I was doing... until I met Jon. I have seen him tackle incredible difficult designs with ease and he has helped me countless times to fix UI issues I couldn’t solve.', 'Jon was also my Team Lead and direct manager. His management style brought out the best in everyone in our team. He encouraged robust conversations, allowed us to challenge ideas and was always approachable for any issue.', 'I would recommend Jon to any organisation.']
				// },
				// {
				// 	pictures: {
				// 		jpg: require('~$shared/images/people__roger.jpg?resize&size=114'),
				// 		x1: require('~$shared/images/people__roger.jpg?resize&size=114&format=webp'),
				// 		x2: require('~$shared/images/people__roger.jpg?resize&size=228&format=webp')
				// 	},
				// 	author: 'Roger Marley',
				// 	title: 'Senior Full Stack Developer at 4mation Technologies',
				// 	content: ["Jon is a UI wizard, a man who paints art in CSS and JS. He is a very reliable senior front-end specialist, and it was good working with him as a back-end / front-end duo in producing a brand new website for a Sydney agency from scratch. He has also been a great advocate and wheel-greaser for any team he has been a part of. He's deeply knowledgeable and experienced in all things front-end, including React and other frameworks. Jon is a big front-end asset for any team."]
				// }
			]
		};
	}
};
</script>

<style lang="scss">
@import '~$shared/sass/shared/variables.scss';
.blockquote {
	&__person {
		background: #fff;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.75), inset -1px -1px 2px rgba(255, 255, 255, 0.75);
		float: right;
		width: 116px;
		margin: 2px 0 15px 15px;
		border: 1px solid $cornflower;
		position: relative;
		source,
		img {
			display: block;
		}
		&::before {
			display: block;
			content: '';
			background-image: url("data:image/svg+xml, %3Csvg viewBox='0 0 400 400' fill='%23ca2c92' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M200 243C184.252 243 168.857 238.33 155.763 229.581C142.668 220.831 132.463 208.396 126.436 193.846C120.41 179.297 118.833 163.287 121.905 147.841C124.977 132.395 132.561 118.207 143.697 107.072C154.832 95.9359 169.02 88.3524 184.466 85.28C199.912 82.2077 215.922 83.7845 230.471 89.8111C245.021 95.8378 257.456 106.043 266.206 119.138C274.955 132.232 279.625 147.627 279.625 163.375C279.608 184.488 271.214 204.731 256.285 219.66C241.356 234.589 221.113 242.984 200 243ZM200 106.25C188.64 106.25 177.535 109.619 168.089 115.93C158.644 122.241 151.282 131.212 146.935 141.707C142.587 152.202 141.45 163.751 143.666 174.893C145.882 186.035 151.353 196.269 159.386 204.302C167.418 212.335 177.653 217.805 188.795 220.021C199.936 222.238 211.485 221.1 221.98 216.753C232.476 212.406 241.446 205.044 247.758 195.598C254.069 186.153 257.438 175.048 257.438 163.688C257.421 148.459 251.364 133.859 240.596 123.091C229.828 112.323 215.228 106.267 200 106.25Z' /%3E %3Cpath d='M308.062 327.375C306.444 327.376 304.846 327.025 303.378 326.345C301.91 325.665 300.607 324.673 299.562 323.438C287.057 309.454 271.7 298.313 254.525 290.766C237.351 283.219 218.758 279.441 200 279.688C181.242 279.441 162.649 283.219 145.474 290.766C128.299 298.313 112.942 309.454 100.437 323.438C99.4933 324.554 98.3388 325.473 97.0396 326.143C95.7404 326.813 94.322 327.221 92.8652 327.343C91.4085 327.465 89.9421 327.299 88.5496 326.854C87.1571 326.409 85.8659 325.694 84.7497 324.75C83.6334 323.806 82.714 322.652 82.044 321.353C81.3739 320.053 80.9663 318.635 80.8444 317.178C80.7225 315.721 80.8888 314.255 81.3336 312.863C81.7785 311.47 82.4933 310.179 83.4372 309.063C98.0589 292.658 116.031 279.582 136.14 270.719C156.249 261.856 178.026 257.412 200 257.688C221.973 257.412 243.75 261.856 263.859 270.719C283.968 279.582 301.94 292.658 316.562 309.063C317.933 310.683 318.813 312.661 319.096 314.765C319.379 316.868 319.055 319.009 318.162 320.934C317.268 322.859 315.842 324.489 314.053 325.63C312.263 326.771 310.185 327.377 308.062 327.375Z' /%3E %3C/svg%3E");
		}
	}
}
</style>
