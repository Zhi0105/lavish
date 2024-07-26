import { MailContext } from "src/contexts/MailContext"
import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import { sendEmail } from "src/services/mail";
import { toast } from "react-toastify"


export const MailProviders = ({ children }) => {
  const queryClient = useQueryClient();  
  
  const { mutate: handleSend, isLoading: sendLoading } = useMutation({
    mutationFn: sendEmail,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['send'] });
        toast("data sent successful", { type: "success" })
      }, 
    onError: (err) => {  
      console.log("@SE:", err)
    },
  });

  return (
    <MailContext.Provider
      value={{
        send: (payload) => { handleSend(payload) },
        sendLoading: sendLoading
      }}
    >
      {children}
    </MailContext.Provider>
  )
}
