import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
import { SocialLinkType } from "../Interfaces";
import resume from '../../../public/resume.pdf';

export const socialLinks: SocialLinkType[] = [
    {
        iconName: 'Linkedin',
        icon: <FaLinkedin size={30} />,
        href: 'https://www.linkedin.com/in/mtalha123/',
        style: 'rounded-tr-md',
        download: false,
    },
    {
        iconName: 'GitHub',
        icon: <FaGithub size={30} />,
        href: 'https://github.com/MuhammadTalha1',
        style: '',
        download: false,
    },
    {
        iconName: 'Resume',
        icon: <GrResume size={30} />,
        href: resume,
        style: 'rounded-br-md',
        download: true,
    }
]