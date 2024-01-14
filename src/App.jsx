import "./App.scss";
import Buttons from "./components/Buttons";
import Colors from "./components/Colors";
import Fonts from "./components/Fonts";
import Grid from "./components/Grid";

function App() {
	return (
		<>
			{/* navbar */}
			<nav className="navbar-primary bg-color-primary">
				<div className="container d-f">
					<div className="logo text-white font-lg">Starter CSS</div>
					<div className="nav-items">
						A Simple CSS Library by{" "}
						<a
							className="text-white"
							href="https://www.github.com/abitstupid"
							target="_blank"
							rel="noreferrer"
						>
							@abitstupid
						</a>
						<span className="text-gray-3"> (Demo)</span>
					</div>
				</div>
			</nav>

			{/* heading */}
			<h1 className="text-primary ta-center">Starter CSS Libray</h1>
			<p className="ta-center mt-1">
				<a
					href="./assets/startercsslib.rar"
					className="text-white btn btn-primary"
					download={true}
				>
					Download
				</a>
			</p>
			<div className="container">
				{/* breakpoints */}
				<Grid />
				{/* font used */}
				<Fonts />
				{/* colors */}
				<Colors />
				{/* buttons */}
				<Buttons />
			</div>
		</>
	);
}

export default App;
