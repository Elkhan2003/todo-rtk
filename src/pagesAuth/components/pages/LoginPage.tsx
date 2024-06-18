import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useGetMeQuery, usePostLoginMutation } from '@/src/redux/api/auth';

interface IFormInput {
	login: string;
	password: string;
}

const LoginPage = () => {
	const { refetch } = useGetMeQuery();
	const [postLoginMutation] = usePostLoginMutation();
	const { register, handleSubmit } = useForm<IFormInput>();
	const navigate = useNavigate();
	const onSubmit: SubmitHandler<IFormInput> = async (userData) => {
		try {
			const response = await postLoginMutation(userData);
			localStorage.setItem(
				'accessToken',
				JSON.stringify(response.data?.accessToken)
			);
			await refetch();
			navigate('/');
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input placeholder="login" {...register('login', { required: true })} />
			<input
				placeholder="password"
				type="password"
				{...register('password', { required: true })}
			/>
			<button
				type="submit"
				style={{
					background: '#fff',
					padding: 10
				}}
			>
				Login
			</button>
		</form>
	);
};

export default LoginPage;
