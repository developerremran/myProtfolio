 
import { Link } from 'react-router-dom';

const Header = () => {
    const neumorphicButtonStyle = {
        backgroundColor: "#f0f0f0",
        boxShadow: "4px 4px 10px rgba(163, 177, 198, 0.6), -4px -4px 10px rgba(255, 255, 255, 0.8)",
        borderRadius: "10px",
        padding: "5px",
    };
    const buttonStyle = {
        fontSize: "16px",
        padding: "10px",
        border: "none",
        borderRadius: "10px",
        backgroundColor: "#f0f0f0",
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)", // Initially, the boxShadow is set to none
        color: "#4d4d4d",
        cursor: "pointer",
        outline: "none",
        position: "relative", // Make sure the button has a position to work with pseudo-elements
        overflow: "hidden", // Hide anything that overflows from the button
        transition: "box-shadow 0.3s ease-in-out", // Add a transition for smooth animation
    };
    return (
        <div className='relative'>
           <div 
           className="w-full m-0 my-auto rounded-full bg-[#4070f4] p-4 bottom-0  fixed flex mb-5   gap-5 items-center justify-center " style={{ neumorphicButtonStyle }}>
                    <Link to="/" style={{ ...buttonStyle, ...neumorphicButtonStyle }}>
                        <p className="" >
                            <img
                                className="[50px] h-[50px]"
                                src="https://i.ibb.co/FmbydDL/6813197.png"
                                alt=""
                            />
                        </p>
                        {/* Pseudo-elements for the border animation */}
                        <span className="border-animation"></span>
                    </Link>

                    <Link to='/about' style={{ ...buttonStyle, ...neumorphicButtonStyle }}>
                        <p className="" >
                            <img className="[50px] h-[50px]" src="https://i.ibb.co/q9rWZN6/6289163.png" alt="" />
                        </p>
                        <span className="border-animation"></span>

                    </Link>

                    <Link to='/portfolio' style={{ ...buttonStyle, ...neumorphicButtonStyle }}>
                        <p className="" >
                            <img className="[50px] h-[50px]" src="https://i.ibb.co/25ZfGg6/9121529.png" alt="" />
                        </p>
                        <span className="border-animation"></span>

                    </Link>
                    <Link to='/about' style={{ ...buttonStyle, ...neumorphicButtonStyle }}>
                        <p className="" >
                            <img className="[50px] h-[50px]" src="https://i.ibb.co/FmbydDL/6813197.png" alt="" />
                        </p>
                        <span className="border-animation"></span>

                    </Link>


                </div>
        </div>
    );
};

export default Header;