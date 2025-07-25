import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { GetRestaurantsParams } from '@/types/input.type';
import { MUTATION_KEYS, QUERY_KEYS } from '@/services/query-mutation_keys';
import client from '..';

export const useRestaurants = (params: GetRestaurantsParams) => {
	return useQuery({
		queryKey: [QUERY_KEYS.RESTAURANTS.list, params],
		queryFn: () => client.restaurants.get(params),
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 2, // 5 minutes
		// staleTime: 1000,
		// retry: 2,
		refetchOnWindowFocus: false,
	});
};

export const useRestaurantDelete = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: [MUTATION_KEYS.RESTAURANTS.delete],
		mutationFn: (id: number) => client.restaurants.delete(id),
		onMutate: (data) => {
			console.log('silinmek istenen veri', data);
		},
		onError: (error) => {
			console.log('ERROR ---', error.message);
		},
		onSuccess: () => {
			console.log('Silme basarili');
			// queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.RESTAURANTS.list] });
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEYS.RESTAURANTS.list],
				// exact: false,
			});

			// queryClient.refetchQueries({ queryKey: [QUERY_KEYS.RESTAURANTS.list] });
		},
	});
};
