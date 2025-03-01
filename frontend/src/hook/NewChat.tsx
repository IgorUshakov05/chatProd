import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { open_new_chat } from "../api/Chat";

export const useNewChat = () => {
  let navigate = useNavigate();
  const { mutate } = useMutation(["new chat"], open_new_chat, {
    onSuccess: (data) => {
      return navigate(`/chat/${data.chat_id}`);
    },
  });
  return { mutate };
};
