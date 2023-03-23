<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	const BG3ReleaseDate = new Date(2023, 8, 31);

	let timeDeltaString = 'idk';

	const divMod: (a: number, b: number) => [number, number] = (a, b) => {
		return [Math.floor(a / b), a % b];
	};

	const updateTimeDeltaString: () => Promise<void> = async () => {
		let timeDelta = BG3ReleaseDate.valueOf() - new Date().valueOf();

		let days, hours, minutes, seconds;

		[days, timeDelta] = divMod(timeDelta, 86_400_000);
		[hours, timeDelta] = divMod(timeDelta, 3_600_000);
		[minutes, timeDelta] = divMod(timeDelta, 60_000);
		[seconds, timeDelta] = divMod(timeDelta, 1_000);
		const elements = [
			[days, 'day'],
			[hours, 'hour'],
			[minutes, 'minute'],
			[seconds, 'second']
		];
		const segments = elements
			.filter(([v, _]) => v != 0)
			.map(([v, s]) => `${v} ${s}${v != 1 ? 's' : ''}`);
		if (segments.length == 1) {
			timeDeltaString = segments[0];
		} else {
			timeDeltaString = segments.slice(0, -1).join(', ') + `, and ${segments.slice(-1)}`;
		}
	};

	const interval = setInterval(async () => {
		updateTimeDeltaString();
	}, 500);

	onMount(() => {
		updateTimeDeltaString();
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div id="container">
	<h2 style="margin-bottom:1em">
		Is <img
			src="logo-bg3.png"
			alt="Baldur's Gate 3"
			style="height:4em; transform:translateY(2em)"
		/> out yet?
	</h2>
	{#if new Date() >= BG3ReleaseDate}
		<h1 style="color:green">YES</h1>

		<h3>...go play it!!</h3>
	{:else}
		<h1 style="color:red">NO</h1>

		<h3>...but it will be out in {timeDeltaString}</h3>
	{/if}
</div>

<style>
	:global(html),
	:global(body) {
		height: 100%;
		width: 100%;
	}
	#container {
		position: absolute;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: sans-serif;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h1 {
		font-size: 20vh;
		margin: 2vh;
	}
	h2 {
		font-size: 5vh;
		margin: 0;
	}
	h3 {
		font-size: 3vh;
		margin: 0;
	}
</style>
