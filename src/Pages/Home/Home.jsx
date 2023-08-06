
const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-center">
                <img className="w-[200px] h-[250px] rounded-full border-2 border-white bg-black" src="https://i.ibb.co/M5G0210/emran-removebg.png" alt="" />

                <h2 className="text-4xl font-bold text-white">Emran Hossain</h2>
                <p className="text-sm italic text-center py-2">JR. FrontEnd Developer</p>
            </div>
            <div className="text-white">
                <p className="leading-8">
                    I am Emran Hossain and I living From Sunamganj, Sylhet ,Bangladesh. I am a Front end developer and my experience in front-end development and a strong passion for creating attractive and user-friendly websites, I am confident that my skills and enthusiasm can contribute to your company's goal of delivering exceptional experiences.

                    As a MERN Stack Developer, I am proficient in using React.js and JavaScript for front-end development and familiar with Node.js, Express.js, MongoDB, and Firebase for building modern websites. I specialize in creating responsive and user-friendly interfaces that work seamlessly across different browsers and devices. I pay meticulous attention to detail and always strive for clean and optimized code.

                    My expertise extends to frameworks like Tailwind, Bootstrap, Material UI, as well as technologies such as React.js, JavaScript, Node.js, Firebase, MongoDB, and Express.js. As I progress in my career, my next goal is to learn and explore full-stack development. I consistently update my knowledge and skills in web development to stay up-to-date with the latest technologies.
                </p>
                <div className="flex justify-center gap-4 py-5">
                    <img className="w-[50px] h-[50px] border rounded-full border-blue-500 p-1" src="https://i.ibb.co/HhMpLPv/3151702.png" alt="Facebook" />
                    <img className="w-[50px] h-[50px] border rounded-full border-blue-500 p-1" src="https://i.ibb.co/bbKKHyY/665699.png" alt="Github" />
                    <img className="w-[50px] h-[50px] border rounded-full border-blue-500 p-1" src="https://i.ibb.co/1QF5G6K/1657920.png" alt="Gmail" />

                    <img className="w-[50px] h-[50px] border rounded-full border-blue-500 p-1" src="https://i.ibb.co/3yFWLLB/849103.png" alt="linkedin" />
                </div>
            </div>
        </div>
    );
};

export default Home;