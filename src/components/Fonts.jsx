export default function Fonts() {
	return (
		<>
			<h2 className="text-primary mb-1">Fonts</h2>
			<p className="mb-2">
				Only one font is used in this CSS Library, that is, Roboto,
				which is being imported from{" "}
				<a
					href="https://fonts.google.com/specimen/Roboto"
					target="_blank"
					rel="noreferrer"
				>
					Google Fonts
				</a>
			</p>
			<h3 className="text-primary ml-2 mb-1">Font Sizes</h3>
			<div className="row f-gap-4 align-center justify-start ml-2">
				<p className="col-1-xs font d-i text-gray-3 mb-2">h1 </p>
				<h1 className="text-black d-i">Hello World</h1>
			</div>
			<div className="row f-gap-4 align-center justify-start ml-2">
				<p className="col-1-xs font d-i text-gray-3 mb-2">h1 </p>
				<h1 className="text-black d-i">Hello World</h1>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2">
				<p className="col-1-xs font d-i text-gray-3 mb-2">h2 </p>
				<h2 className="text-black d-i">Hello World</h2>
			</div>

			<div className=" row f-gap-4 align-center justify-start ml-2">
				<p className="col-1-xs font d-i text-gray-3 mb-2">h3 </p>
				<h3 className="text-black d-i">Hello World</h3>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2">
				<p className="col-1-xs font d-i text-gray-3 mb-2">h4 </p>
				<h4 className="text-black d-i">Hello World</h4>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2">
				<p className="col-1-xs font d-i text-gray-3 mb-2">h5 </p>
				<h5 className="text-black d-i">Hello World</h5>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2 mb-3">
				<p className="col-1-xs font d-i text-gray-3 mb-2">body </p>
				<p className="text-black d-i">Hello World</p>
			</div>

			{/* font size classes */}

			<h3 className="text-primary ml-2 mb-1">Font Size Classes</h3>
			<div className="row f-gap-4 align-center justify-start ml-2">
				<p className="col-1-xs font d-i text-gray-4 mb-2">.font </p>
				<p className="font ml-2 mb-1">Default</p>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2">
				<p className="col-1-xs font d-i text-gray-4 mb-2">.font-sm</p>
				<p className="font-sm ml-2 mb-1">Small</p>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2">
				<p className="col-1-xs font d-i text-gray-4 mb-2">.font-md</p>
				<p className="font-md ml-2 mb-1">Medium</p>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2">
				<p className="col-1-xs font d-i text-gray-4 mb-2">.font-lg</p>
				<p className="font-lg ml-2 mb-1">Large</p>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2">
				<p className="col-1-xs font d-i text-gray-4 mb-2">.font-xl</p>
				<p className="font-xl ml-2 mb-1">Extra Large</p>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2 mb-5">
				<p className="col-1-xs font d-i text-gray-4 mb-2">.font-xxl</p>
				<p className="font-xxl ml-2 mb-1">Extra Extra Large</p>
			</div>
		</>
	);
}
