import React, { useRef, useEffect } from "react";
// import "../assets/scss/base/base.css";
// import locomotiveScroll from "locomotive-scroll";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
// import useLocoScroll from "./hooks/useLocoScroll";

const Menu = () => {
  const scrollRef = React.createRef();
  const containerRef = useRef(null)

  useEffect(() => {
    // locomotiveScroll.init();
    // locomotiveScroll.scrollTo(scrollRef.current);
  }, []);

	return (
    
		<div  data-scroll-section className="Menu">
			{/* <div data-scroll-section className="category_menu_left_line"></div> */}
			<div>
				<ul data-scroll-section className="category_list">
					<li data-scroll className="category_item category1">
						<span> SHARING PLATES-VEG </span>{" "}
					</li>
					<li data-scroll className="category_item category2">
						<span> SHARING PLATES- NONVEG </span>
					</li>
					<li data-scroll className="category_item category3">
						<span> STUFFED BAO/PAV </span>
					</li>
					<li data-scroll className="category_item category4">
						<span> EGGS TO ORDER </span>
					</li>
					<li data-scroll className="category_item category5">
						<span> MOMOS </span>
					</li>
					<li data-scroll className="category_item category6">
						<span> SHAWARMA </span>
					</li>
					<li data-scroll className="category_item category7">
						<span> WRAPS AND ROLLS </span>
					</li>
					<li data-scroll className="category_item category8">
						<span> PIZZA </span>
					</li>
					<li data-scroll className="category_item category9">
						<span> OPEN SANDWICHES </span>
					</li>
					<li data-scroll className="category_item category10">
						<span> BURGERS </span>
					</li>
					<li data-scroll className="category_item category11">
						<span> PASTA </span>
					</li>
					<li data-scroll className="category_item category12">
						<span> DESSERTS </span>
					</li>
					<li data-scroll className="category_item category13">
						<span> HOT BEVERAGES </span>
					</li>
					<li data-scroll className="category_item category14">
						<span> COLD BEVERAGES </span>
					</li>
				</ul>
			</div>
			{/* <div data-scroll-section className="category_menu_right_line"></div> */}
		</div>
	);
};

export default Menu;
