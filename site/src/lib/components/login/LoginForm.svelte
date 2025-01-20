<script>
    import solidLogo from '$lib/images/BTLogoWhite-sm.png';
    import { theme } from '$lib/stores/theme-store';
</script>

<div class="form-wrapper">
    <div class="login-introduction">
        {#if $theme === 'light'}
            <img class="light-logo" src={solidLogo} alt="British Taekwondo logo in solid black">
        {:else}
            <img class="dark-logo" src={solidLogo} alt="British Taekwondo logo in solid white">
        {/if}
        <h1>Access your British Taekwondo Grading account.</h1>
    </div>
    <form action="">
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" name="email" id="email" placeholder="e.g. britishtaekwondo@outlook.com">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••••">
        </div>
        <div class="form-actions">
            <button class="form-submit" aria-label="form submission button">
                Login
            </button>
        </div>
    </form>
</div>

<style>

    .form-wrapper{
        width: 100%;
        max-width: 500px;
        padding: 30px 20px;
        border-radius: 14px;
        margin-bottom: 80px;
        background: var(--container-bg-primary);
        border: var(--container-bd-primary);
    }

    .login-introduction{
        padding: 0px 0px 50px;
        text-align: center;

        img{
            width: 75%;
            max-width: 300px;
            margin-inline: auto;
            display: grid;
            place-self: center;
            margin-bottom: 20px;

            &.light-logo{
                filter: invert(1);
            }
        }
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;

        .form-group{
            label{
                display: block;
                margin-bottom: 4px;
                color: var(--text-secondary);
            }

            input {
                width: 100%;
                padding: 8px;
                border-radius: 6px;
                background: var(--input-bg);
                border: var(--container-bd-secondary);
                color: var(--text-primary);
            }
        }

        .form-actions{
            display: grid;
            place-items: center;
            margin-top: 20px;

            button{
                border-radius: 6px;
			    padding: 12px 24px;
                background: var(--button-bg-opposing);
                color: var(--text-button-opposing);
            }
        }
    }
</style>