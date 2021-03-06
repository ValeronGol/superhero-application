import { useMutation, useQueryClient } from 'react-query';
import { createHero } from '../helpers/fetchHeros';
import toast from 'react-hot-toast';

export const useCreateHero = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(createHero, {
    onSuccess() {
      queryClient.invalidateQueries('/heros');
      toast.success('Hero create');
    },
  });
  return {
    createHero: mutateAsync,
  };
};
