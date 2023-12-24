
interface ExperienceCardPorp {
    title: string;
    imageSrc: string;
    style: string
}

const ExperienceCard = ({ title, imageSrc, style }: ExperienceCardPorp) => {
    return (
        <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img className='w-20 mx-auto' src={imageSrc} alt='Experiene logo'></img>
            <p className="mt-4">{title}</p>
        </div>
    )
}

export default ExperienceCard