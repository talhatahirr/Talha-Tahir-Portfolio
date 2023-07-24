import React from "react";

const About = () => {
    return(
        <div name="about" className="bg-[#0a192f] w-full h-screen text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#B64EFF]">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hi, I'm Talha, nice to have you here! Please take a look around.</p>
                    </div>
                    <div>
                        <p className="sm:text-justify">If you're looking for a front-end developer who is not only technically proficient but also possesses a strong design sensibility, attention to detail, and a commitment to delivering exceptional results, then I would love to
                         discuss how I can contribute to your projects. Let's collaborate and create outstanding digital experiences together!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;