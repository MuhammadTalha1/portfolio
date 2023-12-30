export interface ComponentRouteType {
    path: string;
    component: JSX.Element;
}

export interface NavbarLinkType {
    path: string;
    label: string;
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

