import './App.css'
import React, {useRef, useEffect} from 'react'
import requests from "./lib/requests"



const App = props => {
	let canvasRef = useRef(null);
	let ctx;
	let position = { drawable: false, X: 0, Y:0 };


	useEffect(() => {
		const canvas = canvasRef.current;
		ctx = canvas.getContext('2d');
		ctx.fillStyle ="white";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.strokeStyle = "red";
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		ctx.lineWidth = 7;
		
		canvas.addEventListener('mousedown', initDraw);
		canvas.addEventListener('mousemove', draw);
		canvas.addEventListener('mouseup', finishDraw);
		canvas.addEventListener('mouseout', finishDraw);

	}, [canvasRef])

	const initDraw = (e) => {
		ctx.beginPath();
		position = { drawable: true, X: e.offsetX, Y: e.offsetY};
		ctx.moveTo(position.X, position.Y);
	};

	const draw = (e) => {
		if(position.drawable) {
			position = { ...position, X: e.offsetX, Y: e.offsetY};
			ctx.lineTo(position.X, position.Y);
			ctx.stroke();
		}
	};

	const finishDraw = () => {
		position= { drawable: false, X: 0, Y: 0 };
	};
	

	const clearCanvas = () => {
		const canvas = canvasRef.current;
		ctx.clearRect(0, 0, 280,280);
		ctx.fillStyle ="white";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};

	const prediction = async (e) => {
		e.preventDefault();

		// const temp = ctx.getImageData(0,0,280,280).data

		// // make GrayScale
		// for (var i = 0; i < temp.length; i += 4) {
		// 	var avg = (temp[i] + temp[i + 1] + temp[i + 2]) / 3;
		// 	temp[i]     = avg; // R
		// 	temp[i + 1] = avg; // G
		// 	temp[i + 2] = avg; // B
		// }

		let canvas = document.getElementById("drawable");
		let img_data = canvas.toDataURL("image/png");

		let result =  await requests.postNumberImg(img_data);

		console.log(result)
	};

	return (
		<div id="main">
			<canvas id="drawable" width={280} height={280} ref={canvasRef}></canvas>
			<button onClick={clearCanvas}>Clear</button>
			<button onClick={prediction}>Predict</button>
		</div>
	)
}

export default App;