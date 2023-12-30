import { socialLinks } from "./Data/SocialLinksData"
import SocialLink from "./SocialLink"

const SocialLinks = () => {
    return (
        <div className="hidden xl:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {
                    socialLinks.map((link, index) => (
                        <SocialLink key={index} iconName={link.iconName} icon={link.icon} href={link.href} style={link.style} download={link.download} />
                    ))
                }
            </ul>
        </div>
    )
}

export default SocialLinks