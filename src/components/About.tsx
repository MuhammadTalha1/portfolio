import { firstParagraph, secondParagraph, heading } from "./Data/AboutData"

const About = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
                <div className="pb-8 pt-20">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        {heading}
                    </p>
                </div>
                <p className="text-xl mt-10">
                    {firstParagraph}
                </p>
                <br />
                <p className="text-xl">
                    {secondParagraph}
                </p>
            </div>
        </div>
    )
}

export default About