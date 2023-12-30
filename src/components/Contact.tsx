import { useState } from "react";
import { ContactMessageType } from "./Interfaces";
import Message from "./Message";
import { sendMessage } from "../Service/SendMail";
import { useNavigate } from 'react-router-dom';
import { RouteEnum } from "../Constants";
import LoadingSpinner from "./LoadingSpinner";
import { heading } from "./Data/ContactData";

const Contact = () => {

    const [contactMessage, setContactMessageType] = useState<ContactMessageType>();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setContactMessageType({ ...contactMessage, [e.target.name]: e.target.value });
    }

    const onButtonClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!contactMessage?.email) {
            setMessage('Enter Email!');
            return;
        }
        else if (!contactMessage.message) {
            setMessage('Enter Message!');
            return;
        }
        else {
            setMessage('');
            setSending(true);
            try {
                const res = await sendMessage(contactMessage);
                if (res?.status === 200) {
                    navigate(RouteEnum.HOME_ROUTE);
                }
                else {
                    setMessage('Fail to send Message. Try again!');
                }
            }
            catch (error) {
                setMessage('Fail to send Message. Try again!');
            }
            finally {
                setSending(false);
            }
        }
    }

    return (
        <div className='w-full bg-gradient-to-b from-gray-800 to-black text-white p-4 h-screen'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        {heading}
                    </p>
                    <p className='py-6'>
                        Submit the form below to get in touch with me
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <form className="flex flex-col w-full md:w-1/2">
                        <input
                            type="text"
                            name="name"
                            onChange={(e) => onValueChange(e)}
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="email"
                            onChange={(e) => onValueChange(e)}
                            placeholder="Enter your email"
                            className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            onChange={(e) => onValueChange(e)}
                            rows={5}
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        {message && <Message message={message}></Message>}
                        <button
                            onClick={(e) => onButtonClick(e)}
                            disabled={sending}
                            className={`text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md ${sending ? '' : 'hover:scale-110 duration-300'}`}>
                            {sending ? <LoadingSpinner loadingText='Sending...' /> : "Let's Talk"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact