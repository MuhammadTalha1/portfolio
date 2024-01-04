import ProjectCard from './ProjectCard';
import { heading, projects } from './Data/ProjectsData';

const Projects = () => {
    return (
        <div className='min-h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 pt-20'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        {heading}
                    </p>
                    <p className='py-6'>
                        Check out some of my work right here
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        projects.map((project, index) => (
                            <ProjectCard key={index} imageSrc={project.imageSrc} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects