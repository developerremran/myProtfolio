
import { Link, Outlet } from "react-router-dom";
import './mainLayout.css'
import Header from "../ShearSection/Header/Header";

const HomePageLayout = () => {
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

    const rightSectionStyle = {
        flex: "1",
        boxShadow:
            "4px 4px 10px rgba(163, 177, 198, 0.6), -4px -4px 10px rgba(255, 255, 255, 0.8)",
        background:
            "linear-gradient(to right, #3F5EFB, #FC466B)", // Updated the background property to use the correct syntax
        padding: "30px",
    };
    
    return (
        <div className="mainWidth ">
            <div className="m-[50px] min-h-[800px] relative lg:flex flex-wrap">

                <div className="lg:w-[10%] hidden  m-2 lg:h-[500px] h-screen my-auto lg:flex flex-col gap-5 items-center justify-center " style={{ neumorphicButtonStyle }}>

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



                </div>

                <div className="" style={rightSectionStyle} >
                    {/* Content for the right section */}
                    <Outlet></Outlet>
                </div>
            </div>

            <div className="lg:hidden block">
                <Header></Header>
            </div>
        </div>
    );
};

export default HomePageLayout;