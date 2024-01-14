export default function Buttons() {
	return (
		<>
			<h2 className="text-primary mb-2">Buttons</h2>
			<div className="btn mb-2 mr-3">.btn</div>
			<div className="btn btn-primary mb-2 mr-3">.btn-primary</div>
			<div className="btn btn-secondary mb-2 mr-3">.btn-secondary</div>
			<div className="btn btn-white mb-2 mr-3">.btn-white</div>
			<div className="btn btn-outlined-primary mb-2 mr-3">
				.btn-outlined-primary
			</div>
			<div className="btn btn-outlined-secondary mb-2 mr-3">
				.btn-outlined-secondary
			</div>
			<div className="btn btn-outlined-black mb-2 mr-3">
				.btn-outlined-black
			</div>
			<h3 className="text-primary mb-2 ml-2">Disabled Buttons</h3>
			<p className="ml-2 mb-2">
				Note that the classes are jsut for UI purpose. To disabled the
				button either use JavaScrip or HTML disabled attribute.
			</p>
			<div className="btn btn-disabled mb-2 mr-3">.btn</div>
			<div className="btn btn-primary btn-disabled mb-2 mr-3">
				.btn-primary
			</div>
			<div className="btn btn-secondary btn-disabled mb-2 mr-3">
				.btn-secondary
			</div>
			<div className="btn btn-white btn-disabled mb-2 mr-3">
				.btn-white
			</div>
			<div className="btn btn-outlined-primary btn-disabled mb-2 mr-3">
				.btn-outlined-primary
			</div>
			<div className="btn btn-outlined-secondary btn-disabled mb-2 mr-3">
				.btn-outlined-secondary
			</div>
			<div className="btn btn-outlined-black btn-disabled mb-2 mr-3">
				.btn-outlined-black
			</div>
		</>
	);
}
