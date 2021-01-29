const Quote = (props) => {
	return (
		<blockquote>
			{props.quote.pictures && (
				<picture className="blockquote__person">
					<source srcSet={props.quote.pictures.x1 + ' 1x, ' + props.quote.pictures.x2 + ' 2x'} type="image/webp" />
					<img src={props.quote.pictures.jpg} alt="" width="114" height="114" />
				</picture>
			)}
			<cite>
				{props.quote.author},<br />
				{props.quote.title}
			</cite>
			{props.quote.content.map((paragraph, n) => (
				<p key={'p-' + n}>{paragraph}</p>
			))}
		</blockquote>
	);
};
export default Quote;
