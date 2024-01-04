export interface ComponentRouteType {
    link: string;
    component: JSX.Element;
}

export interface NavbarLinkType {
    link: string;
    label: string;
}

export interface NavbarPropType {
    navbarLink: NavbarLinkType;
    linkClick: () => void;
}


export interface ProjectCardType {
    imageSrc: string;
}

export interface ExperienceCardType {
    title: string;
    imageSrc: string;
    style: string;
}

export interface ContactMessageType {
    name?: string;
    email?: string;
    message?: string;
}

export interface SocialLinkType {
    iconName: string;
    icon: JSX.Element;
    href: string;
    style: string;
    download: boolean;
}

