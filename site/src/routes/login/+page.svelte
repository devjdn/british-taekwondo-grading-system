<script>
    import LoginForm from "$lib/components/login/LoginForm.svelte";
</script>

<svelte:head>
	<title>British Taekwondo | Login</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="login-window">
    <LoginForm/>
</section>

<style>

    section.login-window{
        display: grid;
        place-items: center;
        flex: 1;
    }
</style>