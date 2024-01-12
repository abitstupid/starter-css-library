import "./App.scss";

function App() {
	return (
		<>
			<nav className="navbar bg-color-primary">
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
					</div>
				</div>
			</nav>
			<div className="container mb-3">
				<h1 className="text-primary">Hello World</h1>
				<h2 className="text-primary">Hello World</h2>
				<h3 className="text-primary">Hello World</h3>
				<h4 className="text-primary">Hello World</h4>
				<h5 className="text-primary">Hello World</h5>
				<p className="text-primary">Hello World</p>
			</div>
			<div className="container">
				<div className="btn btn-primary mr-3">Primary Button</div>
				<div className="btn btn-primary btn-disabled">
					Primary Disabled Button
				</div>
			</div>
		</>
	);
}

export default App;
