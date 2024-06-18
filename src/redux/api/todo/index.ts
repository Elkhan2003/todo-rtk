import { api as index } from '..';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getTodo: build.query<TODO.GetTodoResponse, TODO.GetTodoRequest>({
			query: () => ({
				url: '',
				method: 'GET'
			}),
			providesTags: ['todo']
		})
	})
});

export const { useGetTodoQuery } = api;
