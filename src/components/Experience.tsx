import profilePicture from '../assets/profilePicture.png';
import nodeJs from '../assets/nodeJs.jpg';
import ExperienceCard from './ExperienceCard';

interface ExperienceCardType {
    id: number;
    title: string;
    imageSrc: string;
    style: string;
}

const Experience = () => {

    const experiences: ExperienceCardType[] = [
        {
            id: 1,
            title: 'NodeJs',
            imageSrc: profilePicture,
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            title: 'NodeJs',
            imageSrc: nodeJs,
            style: 'shadow-orange-500',
        },
        {
            id: 3,
            title: 'NodeJs',
            imageSrc: nodeJs,
            style: 'shadow-orange-500',
        },
        {
            id: 1,
            title: 'NodeJs',
            imageSrc: profilePicture,
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            title: 'NodeJs',
            imageSrc: nodeJs,
            style: 'shadow-orange-500',
        },
        {
            id: 3,
            title: 'NodeJs',
            imageSrc: nodeJs,
            style: 'shadow-orange-500',
        },
        {
            id: 1,
            title: 'NodeJs',
            imageSrc: profilePicture,
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            title: 'NodeJs',
            imageSrc: nodeJs,
            style: 'shadow-orange-500',
        },
        {
            id: 3,
            title: 'NodeJs',
            imageSrc: nodeJs,
            style: 'shadow-orange-500',
        },
        {
            id: 1,
            title: 'NodeJs',
            imageSrc: profilePicture,
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            title: 'NodeJs',
            imageSrc: nodeJs,
            style: 'shadow-orange-500',
        },
        {
            id: 3,
            title: 'NodeJs',
            imageSrc: nodeJs,
            style: 'shadow-orange-500',
        },
        {
            id: 1,
            title: 'NodeJs',
            imageSrc: profilePicture,
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            title: 'NodeJs',
            imageSrc: nodeJs,
            style: 'shadow-orange-500',
        },
        {
            id: 3,
            title: 'NodeJs',
            imageSrc: nodeJs,
            style: 'shadow-orange-500',
        },
    ]

    return (
        <div className='w-full bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Experience
                    </p>
                    <p className='py-6'>
                        These are the Techonologies I've worked with
                    </p>
                </div>
                <div className=' w-full grid grid-cols-2 sm:grid-cols-3 text-center  gap-8 py-8 px-12 sm:px-0'>
                    {
                        experiences.map((experience) => (
                            <ExperienceCard key={experience.id} title={experience.title} imageSrc={experience.imageSrc} style={experience.style} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience