<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.scss';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 40px;
		padding: calc(50vw - min(1680px, 95vw)/2);
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>



<!-- <div class="remember-forget">
	<label><input type="text">Remember me</label>
	<a href="#">Forgot password?</a>
</div>

<div>
	<button type="submit" class="btn">Login</button>
	<div class="register-link">
		<p>Don't have an account?</p>
		<a href="#">Register</a>
	</div>
</div> -->