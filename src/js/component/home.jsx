import React, { userState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [selectedColor, setSelectedColor] = userState("yellow");

	return (
		<div className="traffic-ligth">
			<div
				className={
					"ligth red" + (selectedColor === "red" ? "glow" : "")
				}></div>
			<div
				className={
					"ligth yellow" + (selectedColor === "yellow" ? "glow" : "")
				}></div>
			<div
				className={
					"ligth green" + (selectedColor === "green" ? "glow" : "")
				}></div>
		</div>
	);
}

export default Home;
