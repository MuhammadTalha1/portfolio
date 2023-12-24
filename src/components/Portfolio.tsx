import profilePicture from '../assets/profilePicture.png';
import nodeJs from '../assets/nodeJs.jpg';
import PortfolioCard from './PortfolioCard';

interface PortFolioCardType {
    id: number;
    imageSrc: string;
}


const Portfolio = () => {

    const portfolios: PortFolioCardType[] = [
        {
            id: 1,
            imageSrc: nodeJs
        },
        {
            id: 2,
            imageSrc: profilePicture
        },
        {
            id: 3,
            imageSrc: nodeJs
        },
        // {
        //     id: 4,
        //     imageSrc: nodeJs
        // },
        // {
        //     id: 3,
        //     imageSrc: nodeJs
        // },
        // {
        //     id: 4,
        //     imageSrc: nodeJs
        // },
        // {
        //     id: 3,
        //     imageSrc: nodeJs
        // },
        // {
        //     id: 4,
        //     imageSrc: nodeJs
        // },
        // {
        //     id: 2,
        //     imageSrc: nodeJs
        // },
        // {
        //     id: 3,
        //     imageSrc: nodeJs
        // },
        // {
        //     id: 4,
        //     imageSrc: nodeJs
        // },
        // {
        //     id: 3,
        //     imageSrc: nodeJs
        // },
        // {
        //     id: 4,
        //     imageSrc: nodeJs
        // },
        // {
        //     id: 3,
        //     imageSrc: nodeJs
        // },
        // {
        //     id: 4,
        //     imageSrc: nodeJs
        // },
    ]

    return (
        <div className='w-full bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </p>
                    <p className='py-6'>
                        Check out some of my work right here
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map((portfolio) => (
                            <PortfolioCard key={portfolio.id} imageSrc={portfolio.imageSrc} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio