import { createBrowserRouter } from 'react-router-dom';
import { PrivateRouteProvider } from '../providers/PrivateRouteProvider.tsx';
import LayoutSide from '../pagesSide/components/layout/LayoutSide';
import HomePage from '../pagesSide/components/pages/HomePage';
import AboutPage from '../pagesSide/components/pages/AboutPage';
import LayoutAuth from '../pagesAuth/components/layout/LayoutAuth.tsx';
import LoginPage from '../pagesAuth/components/pages/LoginPage.tsx';
import RegistrationPage from '../pagesAuth/components/pages/RegistrationPage.tsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<PrivateRouteProvider>
				<LayoutSide />
			</PrivateRouteProvider>
		),
		children: [
			{
				path: '/',
				element: <HomePage />
			},
			{
				path: '/about',
				element: <AboutPage />
			}
		]
	},
	{
		path: '/auth',
		element: (
			<PrivateRouteProvider>
				<LayoutAuth />
			</PrivateRouteProvider>
		),
		children: [
			{
				path: '/auth/login',
				element: <LoginPage />
			},
			{
				path: '/auth/registration',
				element: <RegistrationPage />
			}
		]
	}
]);
