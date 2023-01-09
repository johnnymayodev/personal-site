

<main>
	<div id="wrapper" data-configuration="1" data-roundness="1">
		<div class="blob" />
		<div class="blob" />
		<div class="blob" />
		<div class="blob" />
		<div class="blob" />
		<div class="blob" />
		<div class="blob" />
	</div>


    <script src="/src/lib/logic.js"></script>
	<link rel="stylesheet" href="/src/lib/wrapper.css" />
</main>

<style>
	main {
		height: 100vh;
		width: 100vw;

		display: grid;
		place-items: center;
		margin: 0;

		overflow: hidden;
	}

	#wrapper {
		aspect-ratio: 1.618;

		width: 90vmin;

		position: relative;
	}

	#wrapper > .blob {
		height: 30%;
		width: 30%;

		background-color: white;

		position: absolute;

		transition: left, top, height, width, border-radius;
		transition-duration: 1s;
		transition-timing-function: ease-in-out;
	}

	/* wrapper coloring & z-indexing */

	#wrapper > .blob:nth-child(1) {
		z-index: 2;
		background-color: #8ecae6;
	}

	#wrapper > .blob:nth-child(2) {
		z-index: 2;
		background-color: #219ebc;
	}

	#wrapper > .blob:nth-child(3) {
		z-index: 1;
		background-color: #023047;
	}

	#wrapper > .blob:nth-child(4) {
		z-index: 2;
		background-color: #00a896;
	}

	#wrapper > .blob:nth-child(5) {
		z-index: 2;
		background-color: #e9c46a;
	}

	#wrapper > .blob:nth-child(6) {
		z-index: 2;
		background-color: #a2a2a2;
	}

	#wrapper > .blob:nth-child(7) {
		z-index: 2;
		background-color: #dadada;
	}
</style>
