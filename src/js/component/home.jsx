import React, { useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [selectedColor, setSelectedColor] = useState("red");

	return (
		<div className="traffic-ligth">
			<div
				onClick={() => setSelectedColor("red")}
				className={
					"ligth red " + (selectedColor === "red" ? "glow" : "")
				}></div>
			<div
				onClick={() => setSelectedColor("yellow")}
				className={
					"ligth yellow " + (selectedColor === "yellow" ? "glow" : "")
				}></div>
			<div
				onClick={() => setSelectedColor("green")}
				className={
					"ligth green " + (selectedColor === "green" ? "glow" : "")
				}></div>
		</div>
	);
}

export default Home;
