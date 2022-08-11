import LoaderAnimation from "./components/loaderAnimation";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/nav";
import "./assets/scss/main.scss";
import Menu from "./components/menu";
import Contact from "./components/contact";

const App = () => {
	const loaderRef = useRef(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		loading
			? document.querySelector("body").classList.add("loading")
			: document.querySelector("body").classList.remove("loading");
	}, [loading]);

	return (
		<AnimateSharedLayout>
			<AnimatePresence>
				<div data-scroll-section className="App">
					<>
						<Nav />
						<Routes>
							<Route
								path="/"
								element={
									<>
										{loading ? (
											<motion.div>
												<motion.div>
													<LoaderAnimation
														setLoading={setLoading}
													/>
												</motion.div>
											</motion.div>
										) : (
											<Home />
										)}
									</>
								}
							/>
							<Route path="/contact-us" element={<Contact />} />
							<Route path="/menu" element={<Menu />} />
						</Routes>
					</>
				</div>
			</AnimatePresence>
		</AnimateSharedLayout>
	);
};

export default App;
