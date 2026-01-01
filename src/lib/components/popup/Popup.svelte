<script lang="ts">
    import { onMount } from "svelte";

	const message = "Jesus saves, skimmers spend, and the devil is in the decline. WARNING. Skim at your own risk. Once you begin to use the identity, you can only go back at my will. The law of the skimmer is the law of the land: get more money or die...";
	let progress = $state<number>(0);

	onMount(() => {
		setInterval(() => {
			progress++;
		}, 50);
	})
</script>

<div class="w-full h-full bg-linear-to-b from-[red] to-red-800 p-6 gap-4 text-[red] border border-4 border-[red] [border-style:inset] shadow-[-10px_-10px_20px_rgba(0,0,0,0.25)] outline-1 outline-[black] flex flex-col leading-none rounded-[0_0_10px]">
	
	<header class="text-center flex-0 text-red-950">
		<span class="font-[cursive] text-xl">Dream Market</span>
	</header>

	<div class="bg-linear-to-b from-[red] to-red-700 border border-4 border-red-700 [border-style:outset] p-2 placeholder-red-900 font-mono leading-[1.25] text-xl flex-1 text-shadow-md/50 text-shadow-red-500">
		<div class="border border-4 border-red-700 [border-style:inset] bg-black h-full p-4 flex flex-col gap-4">
			<div class="flex-1">
				{ message.slice(0, progress) || '...'}
			</div>
			{#if progress > message.length + 10 }
				<section 
					class="flex gap-2 grid-cols-2 justify-center">
					<button 
						class="bg-black text-[red] border-2 border-[red] p-1 cursor-pointer w-full shadow-md/75 shadow-red-500 text-shadow-md/50 text-shadow-red-500 rounded-sm hover:bg-[red] hover:text-[black] animate-[1s_pulse_infinite] hover:animate-[none]"
						onclick={() => { window.close() }}>ok</button>
				</section>
			{/if}
			
		</div>
	</div>
	
</div>
