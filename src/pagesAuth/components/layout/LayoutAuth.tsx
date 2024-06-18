import { Outlet } from 'react-router-dom';
import scss from './LayoutAuth.module.scss';

const LayoutAuth = () => {
	return (
		<div className={scss.LayoutAuth}>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default LayoutAuth;
