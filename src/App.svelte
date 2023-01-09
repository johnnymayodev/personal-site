<script>
	import Glyph from "./lib/Glyph.svelte";
</script>

<main>
	<!-- link to font awesome 4.7 -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>

	<Glyph />
	<div>
		<h1>Hello</h1>

		<a
			id="source-link"
			class="meta-link"
			href="https://karinasirqueira.com"
		>
			<i class="fa-solid fa-link" />
			<span>Source</span>
		</a>
	</div>
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	h1 {
		color: white;
	}

	#source-link {
		bottom: 60px;
	}

	#source-link > i {
		color: rgb(94, 106, 210);
	}

	.meta-link {
		align-items: center;
		backdrop-filter: blur(3px);
		background-color: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 6px;
		bottom: 10px;
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		display: inline-flex;
		gap: 5px;
		left: 10px;
		padding: 10px 20px;
		position: fixed;
		text-decoration: none;
		transition: background-color 400ms, border-color 400ms;
		z-index: 10000;
	}

	.meta-link:hover {
		background-color: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.meta-link > i,
	.meta-link > span {
		height: 20px;
		line-height: 20px;
	}

	.meta-link > span {
		color: white;
		font-family: "Rubik", sans-serif;
		font-weight: 500;
	}
</style>
