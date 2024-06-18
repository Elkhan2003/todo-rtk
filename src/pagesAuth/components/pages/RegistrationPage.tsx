import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
	useGetMeQuery,
	usePostRegistrationMutation
} from '@/src/redux/api/auth';

interface IFormInput {
	login: string;
	password: string;
	userName: string;
	photo: string;
}

const RegistrationPage = () => {
	const { refetch } = useGetMeQuery();
	const [postRegisterMutation] = usePostRegistrationMutation();
	const { register, handleSubmit } = useForm<IFormInput>();
	const navigate = useNavigate();
	const onSubmit: SubmitHandler<IFormInput> = async (userData) => {
		try {
			const response = await postRegisterMutation(userData);
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
			<input
				placeholder="userName"
				{...register('userName', { required: true })}
			/>
			<input placeholder="photo" {...register('photo', { required: true })} />
			<button
				type="submit"
				style={{
					background: '#fff',
					padding: 10
				}}
			>
				Register
			</button>
		</form>
	);
};

export default RegistrationPage;
