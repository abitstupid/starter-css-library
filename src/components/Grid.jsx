export default function Grid() {
	return (
		<>
			<h2 className="text-primary mb-1">Grid</h2>
			<h3 className="text-primary ml-2 mb-1">Breakpoints</h3>
			<p className="text-black mb-2 ml-2">
				For accessibility purposes the breakpoints of this Library are
				in <em>Rem</em> and not in px. For more detail read these
				articles:{" "}
				<a
					className="text-primary"
					href="https://zellwk.com/blog/responsive-typography/"
				>
					Everything I know about Responsive Web Typography
				</a>{" "}
				and{" "}
				<a
					className="text-primary"
					href="https://zellwk.com/blog/media-query-units/"
				>
					PX, EM or REM Media Queries?
				</a>
			</p>

			<div className="row f-gap-4 align-center justify-start ml-2 mb-1">
				<p className="col-2-xs font font-md d-i text-black ">
					Breakpoint
				</p>
				<p className="col-2-xs text-black font-md d-i">rem</p>
				<p className="text-gray-3 font-md d-i">px</p>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2 mb-1">
				<p className="col-2-xs font d-i text-gray-3 ">Extra Small</p>
				<p className="col-2-xs text-black d-i">0</p>
				<p className="text-gray-3 d-i">0</p>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2 mb-1">
				<p className="col-2-xs font d-i text-gray-3 ">Small</p>
				<p className="col-2-xs text-black d-i">30rem</p>
				<p className="text-gray-3 d-i">480px</p>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2 mb-1">
				<p className="col-2-xs font d-i text-gray-3 ">Medium</p>
				<p className="col-2-xs text-black d-i">45rem</p>
				<p className="text-gray-3 d-i">720px</p>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2 mb-1">
				<p className="col-2-xs font d-i text-gray-3 ">Large</p>
				<p className="col-2-xs text-black d-i">60rem</p>
				<p className="text-gray-3 d-i">960px</p>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2 mb-2">
				<p className="col-2-xs font d-i text-gray-3 ">Extra Large</p>
				<p className="col-2-xs text-black d-i">75rem</p>
				<p className="text-gray-3 d-i">1200px</p>
			</div>

			<h3 className="text-primary ml-2 mb-1">
				Container, Rows & Columns
			</h3>
			<p className="text-black mb-2 ml-2">
				The Library follows a 12 column grid. Where the grid is
				container in a <span className="text-primary">.container</span>{" "}
				class. Which is then follows by a{" "}
				<span className="text-primary">.row</span> class.
			</p>
			<div className="bg-color-primary-light-5 ml-2 d-i-b br-sm p-2 mb-2">
				<code>
					<pre>
						&lt;div className= &quot;container&quot;&gt;
						<br /> &lt;div className=&quot;row&quot;&gt; .col-*
						&lt;/div&gt;
						<br />
						&lt;/div&gt;
					</pre>
				</code>
			</div>
			<div className="bg-color-secondary-light-5 ml-2 d-i-b br-sm p-2 mb-2">
				<code>
					<pre>
						&lt;div className= &quot;container-fluid&quot;&gt;
						<br /> &lt;div className=&quot;row&quot;&gt; .col-*
						&lt;/div&gt;
						<br />
						&lt;/div&gt;
					</pre>
				</code>
			</div>
			<p className="text-black mb-2 ml-2">
				.container class spans 1200px and .container-fluid spans across
				full width. Either of container class has a left and right
				padding of 16px.
			</p>
			<p className="text-black mb-2 ml-2">
				.row has a <strong>display: &quot;flex&quot;</strong> with
				<strong> flex-flow: &quot; row wrap&quot;</strong>.
			</p>

			<div className="font-lg text-primary ml-2 mb-1">.col-* Classes</div>
			<p className="text-black mb-2 ml-2">
				.col-* classes expands from .col-1-* to .col-12-*. Here are all
				the classes for different breakpoints:
			</p>

			<div className="row f-gap-4 align-center justify-start ml-2 mb-1">
				<p className="col-2-xs font font-md d-i text-black ">
					Min Width
				</p>
				<p className="col-2-xs text-black font-md d-i">classes</p>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2 mb-1">
				<p className="col-2-xs font d-i text-gray-3 ">Extra Small</p>
				<p className="col-2-xs text-black d-i">
					.col-1-xs to .col-12-xs
				</p>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2 mb-1">
				<p className="col-2-xs font d-i text-gray-3 ">Small</p>
				<p className="col-2-xs text-black d-i">
					.col-1-sm to .col-12-sm
				</p>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2 mb-1">
				<p className="col-2-xs font d-i text-gray-3 ">Medium</p>
				<p className="col-2-xs text-black d-i">
					.col-1-md to .col-12-md
				</p>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2 mb-1">
				<p className="col-2-xs font d-i text-gray-3 ">Large</p>
				<p className="col-2-xs text-black d-i">
					.col-1-lg to .col-12-lg
				</p>
			</div>

			<div className="row f-gap-4 align-center justify-start ml-2 mb-2">
				<p className="col-2-xs font d-i text-gray-3 ">Extra Large</p>
				<p className="col-2-xs text-black d-i">
					.col-1-xl to .col-12-xl
				</p>
			</div>

			<p className="text-black mb-5 ml-2">
				Column width is calculated using percentages. And each number
				(.col-1-*) represents the part of the column a specific columns
				spans. .col-1-xs will cover 1 part of 12 part grid starting from
				Extra small to the largest screens.
			</p>
		</>
	);
}
