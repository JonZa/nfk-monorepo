import { TransitionGroup, CSSTransition } from 'react-transition-group';
const Transition = ({ children, location }) => {
	return (
		<TransitionGroup>
			<CSSTransition
				timeout={{
					enter: 700,
					exit: 350
				}}
				classNames={{
					enterActive: 'page-enter-active page-enter-active--react',
					exitActive: 'page-leave-active',
				}}
				key={location}
			>
				{(status) => <div>{children}</div>}
			</CSSTransition>
		</TransitionGroup>
	);
};
export default Transition;
