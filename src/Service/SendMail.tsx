import axios, { AxiosError } from "axios";
const URL = import.meta.env.VITE_BACKEND_BASE_URL;
import { ContactMessageType } from '../components/Interfaces';

export const sendMessage = async (data: ContactMessageType) => {
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