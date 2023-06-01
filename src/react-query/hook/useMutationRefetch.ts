import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const refetch = async () => {
  const { data } = await axios.post(`/api`);
  return data;
};

export const useMutationRefetch = () => {
  const queryClient = useQueryClient();
  return useMutation(refetch, {
    onSuccess: () => {
      queryClient.invalidateQueries(["data"]);
    },
  });
};
