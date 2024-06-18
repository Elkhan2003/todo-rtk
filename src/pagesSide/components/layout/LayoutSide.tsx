import scss from './LayoutSide.module.scss';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

const LayoutSide = () => {
	return (
		<div className={scss.LayoutSide}>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default LayoutSide;
