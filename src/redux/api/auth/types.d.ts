/* eslint-disable @typescript-eslint/no-unused-vars */
namespace AUTH {
	type GetMeResponse = {
		profile: User;
	};
	type GetMeRequest = void;

	type PostLoginResponse = {
		accessToken: string;
		accessTokenExpiration: number;
	};
	type PostLoginRequest = {
		login: string;
		password: string;
	};

	type PostRegistrationResponse = {
		message: string;
		accessToken: string;
		accessTokenExpiration: number;
	};
	type PostRegistrationRequest = {
		login: string;
		password: string;
		userName: string;
		photo: string;
	};

	type PostLogoutResponse = {
		message: string;
	};
	type PostLogoutRequest = void;
}
