import { toast } from "react-toastify";
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
export const handleToast = async (message) => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_LEFT,
  });
};

export const baseBackendUrl = "http://127.0.0.1:8000/api/";
