interface ProjectCardPorp {
    imageSrc: string;
}

const ProjectCard = ({ imageSrc }: ProjectCardPorp) => {
    return (
        <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img className='rounded-md hover:scale-105 duration-300' src={imageSrc} alt='Work Picture'></img>
            <div className='flex items-center justify-center' >
                <button className=' w-1/2 px-6 py-3 hover:scale-105 duration-300'>Demo</button>
                <button className=' w-1/2 px-6 py-3 hover:scale-105 duration-300'>Code</button>
            </div>
        </div>
    )
}

export default ProjectCard