import React from "react";

const Contact = () => {
    return(
        <div name="contact" className="w-full md:h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form action="https://getform.io/f/156e395e-ba17-4520-834f-b544577246b8" method="POST" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-4">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#B64EFF]">Contact Me</p>
                    <p className="text-gray-300 pt-4">Submit the form below or drop me an email at talhabintahir2001@gmail.com</p>
                </div>
                <input className="p-2 rounded-md mb-5 bg-[#f1ecec]" type="text" placeholder="Name" name="name"/>
                <input className="p-2 rounded-md mb-5 bg-[#f1ecec]" type="email" placeholder="Email" name="email"/>
                <textarea className="bg-[#f1ecec] rounded-md p-2 mb-5" name="message" rows="7" placeholder="Message"></textarea>
                <button className="text-white border-2 px-3 py-2 mx-auto flex my-2 items-center hover:bg-[#B64EFF] hover:border-[#B64EFF] duration-300 rounded-md">Let's Talk</button>
            </form>
        </div>
    )
}

export default Contact;