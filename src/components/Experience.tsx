import html from '../assets/html.png';
import nodeJs from '../assets/nodeJs.jpg';
import flutter from '../assets/flutter.png';
import angular from '../assets/angular.png';
import cSharp from '../assets/cSharp.png';
import cPlusPlus from '../assets/cPlusPlus.png';
import css from '../assets/css.png';
import dotnet from '../assets/dotnet.png';
import javascript from '../assets/javascript.webp';
import noSql from '../assets/nosql.png';
import php from '../assets/php.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import sql from '../assets/sql.png';
import unity from '../assets/unity.png';
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
            title: 'HTML',
            imageSrc: html,
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            title: 'NodeJs',
            imageSrc: nodeJs,
            style: 'shadow-green-900',
        },
        {
            id: 3,
            title: 'Angular',
            imageSrc: angular,
            style: 'shadow-red-800',
        },
        {
            id: 4,
            title: 'C#',
            imageSrc: cSharp,
            style: 'shadow-violet-600',
        },
        {
            id: 5,
            title: 'C++',
            imageSrc: cPlusPlus,
            style: 'shadow-gray-700',
        },
        {
            id: 6,
            title: 'Flutter',
            imageSrc: flutter,
            style: 'shadow-sky-600',
        },
        {
            id: 7,
            title: 'Dotnet',
            imageSrc: dotnet,
            style: 'shadow-violet-800',
        },
        {
            id: 8,
            title: 'Javascript',
            imageSrc: javascript,
            style: 'shadow-yellow-300',
        },
        {
            id: 9,
            title: 'No SQL',
            imageSrc: noSql,
            style: 'shadow-sky-900',
        },
        {
            id: 10,
            title: 'PHP',
            imageSrc: php,
            style: 'shadow-slate-600',
        },
        {
            id: 11,
            title: 'Python',
            imageSrc: python,
            style: 'shadow-sky-400',
        },
        {
            id: 12,
            title: 'React',
            imageSrc: react,
            style: 'shadow-cyan-300',
        },
        {
            id: 13,
            title: 'SQL',
            imageSrc: sql,
            style: 'shadow-cyan-400',
        },
        {
            id: 14,
            title: 'Unity',
            imageSrc: unity,
            style: 'shadow-slate-700',
        },
        {
            id: 15,
            title: 'CSS',
            imageSrc: css,
            style: 'shadow-blue-400',
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