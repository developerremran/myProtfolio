import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import ProtfolioMobile from "../../MainLayout/ResponsiveMobile/ProtfolioMobile";

const Protfolio = () => {

    return (
        <div className="flex items-center lg:h-[600px] overflow-hidden">
           <div className="lg:block md:block hidden">
           <Swiper 
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper "
            >


                <SwiperSlide>
                    <div className="lg:flex lg:flex-wrap justify-center gap-5 overflow-y-auto">
                        <Card className="max-w-[300px]" style={{
                            boxShadow:
                                "4px 4px 10px rgba(163, 177, 198, 0.6), -4px -4px 10px rgba(255, 255, 255, 0.8)",
                            backgroundColor: "#f0f0f0",
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    width="full"
                                    height="140px"
                                    image="https://i.ibb.co/DVMDf0x/download.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Learning Management Website in React js
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions className="flex justify-between">
                                <Button size="small" color="primary">
                                    <Link to='https://github.com/developerremran/learning-management-client'> Github</Link>
                                </Button>
                                <Button size="small" color="primary">
                                    <Link to='https://learning-management-26ba1.web.app/'> Live</Link>
                                </Button>

                            </CardActions>
                        </Card>
                        <Card className="max-w-[300px]" style={{
                            boxShadow:
                                "4px 4px 10px rgba(163, 177, 198, 0.6), -4px -4px 10px rgba(255, 255, 255, 0.8)",
                            backgroundColor: "#f0f0f0",
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    width="full"
                                    height="140px"
                                    image="https://i.ibb.co/c1cqN6X/download-1.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        JOb Search Single Route
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions className="flex justify-between">
                                <Button size="small" color="primary">
                                    <Link to='https://github.com/developerremran'></Link>    Github
                                </Button>
                                <Button size="small" color="primary">
                                    <Link to='https://job-hunterr.netlify.app/'></Link>    Live
                                </Button>

                            </CardActions>
                        </Card>
                        <Card className="max-w-[300px]" style={{
                            boxShadow:
                                "4px 4px 10px rgba(163, 177, 198, 0.6), -4px -4px 10px rgba(255, 255, 255, 0.8)",
                            backgroundColor: "#f0f0f0",
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    width="full"
                                    height="140px"
                                    image="https://i.ibb.co/d0HBZ3Y/download-2.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Car ManageMent
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions className="flex justify-between">
                                <Button size="small" color="primary">
                                    <Link to='https://github.com/developerremran'></Link>    Github
                                </Button>
                                <Button size="small" color="primary">
                                    <Link to='https://assinment-11-39422.web.app/'></Link>    Live
                                </Button>

                            </CardActions>
                        </Card>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-wrap justify-center gap-5 ">
                        <Card className="max-w-[300px]" style={{
                            boxShadow:
                                "4px 4px 10px rgba(163, 177, 198, 0.6), -4px -4px 10px rgba(255, 255, 255, 0.8)",
                            backgroundColor: "#f0f0f0",
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    width="full"
                                    height="140px"
                                    image="https://i.ibb.co/9ZRZkFp/download-3.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Search Filter Add In your Team Members
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="flex justify-between">
                                <Button size="small" color="primary">
                                    <Link to='https://github.com/developerremran'></Link>    Github
                                </Button>
                                <Button size="small" color="primary">
                                    <Link to='https://job-task-client.netlify.app/'></Link>    Live
                                </Button>

                            </CardActions>
                        </Card>
                        <Card className="max-w-[300px]" style={{
                            boxShadow:
                                "4px 4px 10px rgba(163, 177, 198, 0.6), -4px -4px 10px rgba(255, 255, 255, 0.8)",
                            backgroundColor: "#f0f0f0",
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    width="full"
                                    height="140px"
                                    image="https://i.ibb.co/ts53JkT/download-5.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Add you can custom user and see Details single Route (CRUD)
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions className="flex justify-between">
                                <Button size="small" color="primary">
                                    <Link to='https://github.com/developerremran'></Link>    Github
                                </Button>
                                <Button size="small" color="primary">
                                    <Link to='https://task-assaignment.netlify.app/'></Link>    Live
                                </Button>

                            </CardActions>
                        </Card>
                        <Card className="max-w-[300px]" style={{
                            boxShadow:
                                "4px 4px 10px rgba(163, 177, 198, 0.6), -4px -4px 10px rgba(255, 255, 255, 0.8)",
                            backgroundColor: "#f0f0f0",
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    width="full"
                                    height="140px"
                                    image="https://i.ibb.co/QDw1XjH/download-4.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Design a Landing Page
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions className="flex justify-between">

                                <Button size="small" color="primary">
                                    <Link to='https://github.com/developerremran'></Link>    Github
                                </Button>
                                <Button size="small" color="primary">
                                    <Link to=' https://assaignment-design-task.netlify.app/'></Link>    Live
                                </Button>

                            </CardActions>
                        </Card>


                    </div>
                </SwiperSlide>
            </Swiper>
           </div>

           <div className="lg:hidden md:hidden block">
            <ProtfolioMobile></ProtfolioMobile>

           </div>

           

        </div>
    );
};

export default Protfolio;