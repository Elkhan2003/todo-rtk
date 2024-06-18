import scss from './Header.module.scss';
import logo from '@/src/assets/logo.svg';
import { Link } from 'react-router-dom';
import { useGetMeQuery, usePostLogoutMutation } from '@/src/redux/api/auth';

const Header = () => {
	const { data } = useGetMeQuery();
	const [postLogoutMutation] = usePostLogoutMutation();

	const logout = async () => {
		try {
			localStorage.removeItem('accessToken');
			await postLogoutMutation();
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.logo}>
						<img src={logo} alt="logo" />
					</div>
					<div className={scss.auth}>
						{data?.profile ? (
							<>
								<button className={scss.logout} onClick={logout}>
									Logout
								</button>
							</>
						) : (
							<>
								<Link to="/auth/login" className={scss.sign_in}>
									Sign in
								</Link>
								<Link to="/auth/registration" className={scss.sign_up}>
									Sign up
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
