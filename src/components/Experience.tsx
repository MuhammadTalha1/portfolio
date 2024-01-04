import { heading, experiences } from './Data/ExperienceData';
import ExperienceCard from './ExperienceCard';

const Experience = () => {

    return (
        <div className='min-h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 pt-20'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        {heading}
                    </p>
                    <p className='py-6'>
                        These are the Techonologies I've worked with
                    </p>
                </div>
                <div className=' w-full grid grid-cols-2 sm:grid-cols-3 text-center  gap-8 py-8 px-12 sm:px-0'>
                    {
                        experiences.map((experience, index) => (
                            <ExperienceCard key={index} title={experience.title} imageSrc={experience.imageSrc} style={experience.style} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience