import profilePicture from '../assets/profilePicture.png';
import { aboutMeParagraph } from './Data/HomeData';

const Home = () => {
    return (
        <div className='h-screen w-full bg-gradient-to-b from-gray-800 to-black' >
            <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I'm a Full Stack Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        {aboutMeParagraph}
                    </p>
                </div>
                <div>
                    <img src={profilePicture} alt='Profile Image' className='rounded-2xl mx-auto w-2/4 lg:w-2/3 mt-8 md:mt-0'></img>
                </div>
            </div>
        </div>
    )
}

export default Home