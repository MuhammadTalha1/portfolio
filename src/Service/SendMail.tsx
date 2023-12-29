import axios, { AxiosError } from "axios";
const URL = import.meta.env.VITE_BACKEND_BASE_URL;
import { contactMessageType } from '../components/ContactMessageInterface';

export const sendMessage = async (data: contactMessageType) => {
    console.log(URL)
    try {
        return await axios.post(URL + 'sendMail', data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                return axiosError.response;
            }
        }
    }
}