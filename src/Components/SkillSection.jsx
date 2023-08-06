

import './skill.css';

const SkillSection = () => {

    return (
        <div>
            <div className="container text-white">
                <div className='lg:flex flex-none  gap-20 justify-between'>
                    <div className='lg:w-[50%] w-full'>
                        <div className="skill-box">
                            <span className="title">HTML @ css </span>
                            <div className="skill-bar">
                                <span className="skill-per html">
                                    <span className="tooltip">90%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">JavaScript</span>
                            <div className="skill-bar">
                                <span className="skill-per javascript">
                                    <span className="tooltip">80%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">Tailwind @ Bootstrap</span>
                            <div className="skill-bar">
                                <span className="skill-per tBootstrap">
                                    <span className="tooltip">90%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">React.js</span>
                            <div className="skill-bar">
                                <span className="skill-per react">
                                    <span className="tooltip">80%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">Node.js</span>
                            <div className="skill-bar">
                                <span className="skill-per node">
                                    <span className="tooltip">60%</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[50%] w-full'>
                        <div className="skill-box">
                            <span className="title">Express.js</span>
                            <div className="skill-bar">
                                <span className="skill-per express">
                                    <span className="tooltip">60%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">Firebase</span>
                            <div className="skill-bar">
                                <span className="skill-per firebase">
                                    <span className="tooltip">70%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">Mongodb</span>
                            <div className="skill-bar">
                                <span className="skill-per mongodb">
                                    <span className="tooltip">70%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">Git @ Github</span>
                            <div className="skill-bar">
                                <span className="skill-per gitgithub">
                                    <span className="tooltip">70%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">WordPress Customization</span>
                            <div className="skill-bar">
                                <span className="skill-per wp">
                                    <span className="tooltip">90%</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSection;
