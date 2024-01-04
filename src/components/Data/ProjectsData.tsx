import profilePicture from '../../assets/profilePicture.png'
import { ProjectCardType } from '../Interfaces';

export const heading = 'Projects';
const nodeJs = 'https://res.cloudinary.com/dy3ksskhb/image/upload/v1704367596/portfolio/nodeJs_q9xon3.png';
export const projects: ProjectCardType[] = [
    {
        imageSrc: nodeJs
    },
    {
        imageSrc: profilePicture
    },
    {
        imageSrc: nodeJs
    },
]