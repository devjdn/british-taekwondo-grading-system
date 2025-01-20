<script lang="ts">
	import colorLogo from '$lib/images/British-Taekwondo-landscape-small.png';
    import solidLogo from '$lib/images/BTLogoWhite-sm.png';
  	import { LogIn, LogOut, Home, Clipboard, Search, ArrowUpRight } from 'lucide-svelte';
    import SettingsMenu from './settings/SettingsMenu.svelte';
	import { theme } from '$lib/stores/theme-store';
	import { page } from '$app/state';

	const links = [
		{name: 'Home', href: '/', icon: Home},
		{name: 'Grade', href: '/grade', icon: Clipboard},
		{name: 'Search', href: '/search', icon: Search},
		{name: 'Login', href: '/login', icon: LogIn},
		{name: 'British Taekwondo', href: 'https://britishtaekwondo.org.uk', icon: ArrowUpRight},
	]
</script>

<header>
	<div class="logo">
		<a href="/">
			{#if $theme === 'light'}
        	    <img class="light-logo" src={colorLogo} alt="British Taekwondo logo in brand colours">
        	{:else}
        	    <img class="dark-logo" src={solidLogo} alt="British Taekwondo logo in solid black">
        	{/if}
		</a>
	</div>

	<nav>
		<ul>
			{#each links as link}
				<li aria-current={page.url.pathname === link.href ? 'page' : undefined}>
					<a href={link.href} target={link.href.startsWith('https') ? "_blank" : undefined}>
						<div class="link-content">
							<link.icon size={20}/>
							{link.name}
						</div>
						<div class="link-activity-bar" data-link-active={page.url.pathname === link.href ? 'active' : 'inactive'}></div>
					</a>
				</li>
			{/each}
		</ul>

		<SettingsMenu/>

	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 18px;
		background: var(--header-bg);
		border-bottom: var(--container-bd-primary);
		position: sticky;
		top: 0;
	}

	.logo{
		img{
			height: 40px;
			vertical-align: middle;
		}
	}

	nav{
		display: flex;
		align-items: center;
		gap: 18px;

		ul {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 22px;

			li {
				list-style-type: none;
			
				a{
					position: relative;
					display: block;

					.link-content{
						display: flex;
						align-items: center;
						gap: 4px;
						font-weight: 400;
						font-size: .9em;
						transition: color .2s ease-in-out, stroke .2s ease-in-out;
					}

					.link-activity-bar{
						width: 0;
						margin-inline: auto;
						border-top: 1.5px solid transparent;
						border-radius: 100vw;
						transition: width .2s ease-in-out, border-top-color .2s ease-in-out;
						transform-origin: center center;
						position: absolute;
						bottom: -3px;
						left: 0;
						left: 50%;
						transform: translate(-50%, 0%);
					}
				}
			}

			li[aria-current='page']{
				a{
					.link-content{
						color: var(--brand-red);
						stroke: var(--brand-red);
					}

					.link-activity-bar{
						width: 100%;
						border-top-color: var(--brand-red);
					}
				}
			}
		
		}

	}

	@media (max-width: 800px) {
		header{
			display: block;

			nav{
				overflow-x: auto;
				scroll-padding-inline: 14px;
				display: flex;

				ul{
					width: 100%;
					gap: 0;
					li{
						flex-shrink: 0;
						display: inline-block;
						margin-right: 18px;
					}
				}
			}
		}
	}

</style>
