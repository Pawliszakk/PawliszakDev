import classes from './Modal.module.css';
import { BsClipboardCheck } from 'react-icons/bs';
import { Transition } from 'react-transition-group';
import Portal from '../../src/lib/Portal';

const Modal = ({ children, onClose, show }) => {
	return (
		<Portal>
			<Transition in={show} timeout={0}>
				{(state) => (
					<div
						onClick={onClose}
						className={classes.modal}
						style={{
							transition: 'transform 0.3s ease-out',
							transform:
								state === 'exited'
									? 'translate(-50%, -150px)'
									: 'translate(-50%,0)',
						}}
					>
						<BsClipboardCheck />
						<h2>{children}</h2>
					</div>
				)}
			</Transition>
		</Portal>
	);
};

export default Modal;
