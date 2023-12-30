import { SocialLinkType } from "./Interfaces"

const SocialLink = ({ href, download, iconName, icon, style }: SocialLinkType) => {
    return (
        <li className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
            <a
                href={href}
                download={download}
                target="_blank"
                className="flex justify-between items-center w-full text-white">
                {iconName} {icon}
            </a>
        </li>)
}

export default SocialLink