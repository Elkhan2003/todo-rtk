import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getRating: build.query<TODO.GetTodoResponse, TODO.GetTodoRequest>({
			query: () => ({
				url: '/get',
				method: 'GET'
			}),
			providesTags: ['todo']
		})
	})
});
export const { useGetRatingQuery } = api;
