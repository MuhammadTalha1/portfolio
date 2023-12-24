import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
// import { CiMail } from "react-icons/ci";

interface LinkType {
    id: number;
    iconName: string;
    icon: JSX.Element;
    href: string;
    style: string;
    download: boolean;
}

const SocialLinks = () => {

    const links: LinkType[] = [
        {
            id: 1,
            iconName: 'Linkedin',
            icon: <FaLinkedin size={30} />,
            href: 'https://www.linkedin.com/in/mtalha123/',
            style: 'rounded-tr-md',
            download: false,
        },
        {
            id: 2,
            iconName: 'GitHub',
            icon: <FaGithub size={30} />,
            href: 'https://github.com/MuhammadTalha1',
            style: '',
            download: false,
        },
        {
            id: 3,
            iconName: 'Resume',
            icon: <GrResume size={30} />,
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]


    return (
        <div className="hidden xl:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {
                    links.map(link => (
                        <li key={link.id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${link.style}`}>
                            <a
                                href={link.href}
                                download={link.download}
                                target="_blank"
                                className="flex justify-between items-center w-full text-white">
                                {link.iconName} {link.icon}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SocialLinks