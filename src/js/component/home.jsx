import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [list, setList] = useState([]);

	let type = (e) => {
		if (e.key == 'Enter' && e.target.value != "") {
			let myArray = [...list]
			myArray.push(e.target.value)
			setList(myArray)
			e.target.value = ''
		}
	}
	console.log(list)

	if (list.length > 0) {
		return (
			<div className="wrapper">
				<h1 className="title">ToDo List</h1>
				<input className='input' placeholder="Write Here" onKeyDown={type} />
				<ul className="list">{list.map((task, index) => {
					console.log(task)
					return (
						<div >
							<li className='task' key={index}>
								<p>{task}</p>
								<div className="button" onClick={() => {
									let myArray = [...list]
									myArray.splice(index, 1)
									setList(myArray)
								}}>
									<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-x" viewBox="0 0 16 16">
										<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>

								</div>
							</li>
						</div>

					)
				})}
				</ul>
				<div className="footer">
					<p>{list.length} Item left</p>
				</div>
			</div>
		);
	} else {
		return (
			<div className="wrapper">
				<h1 className="title">ToDo List</h1>
				<input className='input' placeholder="Write here" onKeyDown={type} />
				<p>No tasks, add a task</p>
				<div className="footer">
					<p>{list.length} Item left</p>
				</div>
			</div>
		);
	}

};

export default Home;
