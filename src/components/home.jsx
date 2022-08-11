import React, { useRef, useEffect } from "react";
// import "../assets/scss/components/home.scss";
import HeroSection from "./heroSection";
// import PhotoSlides from "./photo-slides";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

//images
import cafeimg1 from "../assets/images/home/cafe/1.jpeg";
import cafeimg2 from "../assets/images/home/cafe/2.jpeg";
import cafeimg3 from "../assets/images/home/cafe/3.jpeg";

import foodimg1 from "../assets/images/home/food/1.jpeg";
import foodimg2 from "../assets/images/home/food/2.jpeg";
import foodimg3 from "../assets/images/home/food/3.jpeg";

const Home = () => {
	const home_container = useRef(null);
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		gsap.to(home_container.current, {
			scrollTrigger: {
				trigger: home_container.current,
				start: "15% 10%",
				end: "30% 10%",
				scrub: 0.5,
				// pin: true,
				// markers: true,
			},
			background: "black",
			duration: 3,
		});
	}, []);

	return (
		<div className="Home">
			<div className="home_container" ref={home_container}>
				<div className="heroSection_container">
					<HeroSection layoutId="loader-animation" />
				</div>
				{/* //please chage the demo className */}
				{/* <div className="photo-slides_container">
              <PhotoSlides />
            </div> */}
				<div className="heroSection-2">
					<div className="heroSection-2-info">
						<h1 className="heroSection-2-h1">Greate Ambience...!</h1>
						<p className="heroSection-2-p">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Illum, quaerat?
						</p>
					</div>
					<div className="heroSection-2-img">
						<img className="heroSection-2-img1" src={cafeimg1} alt="" />
						<img className="heroSection-2-img2" src={cafeimg2} alt="" />
						<img className="heroSection-2-img3" src={cafeimg3} alt="" />
					</div>
				</div>

				<div className="heroSection-3">
					<div className="heroSection-3-img">
						<img className="heroSection-3-img1" src={foodimg1} alt="" />
						<img className="heroSection-3-img2" src={foodimg2} alt="" />
						<img className="heroSection-3-img3" src={foodimg3} alt="" />
					</div>
					<div className="heroSection-3-info">
						<h1 className="heroSection-3-h1">Exotic Food...!</h1>
						<p className="heroSection-3-p">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Illum, quaerat?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
