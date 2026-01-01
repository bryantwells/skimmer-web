<script lang="ts">
	import bitcoin from '$lib/assets/bitcoin.png'
</script>

<header class="grid grid-cols-[3fr_1fr] items-center">
	<div class="grid gap-8 text-blue-500">
		<div class="text-center flex flex-col">
			<span class="font-[cursive] text-7xl">Dream Market</span>
			<span class="text-xs">dreammarketz2v0bw9yzw1vbmv5b3jkawu.world</span>
		</div>
	</div>
	<div class="grid gap-3">
		<div class="w-full flex rounded-sm overflow-hidden border border-zinc-500 p-0.5 bg-linear-to-b from-zinc-200 to-zinc-100">
			<div class="flex-1"></div>
			<div class="p-1 bg-linear-to-b from-zinc-400 to-zinc-500 border-2 border-zinc-400 [border-style:outset] rounded-sm">
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 18 18"><path d="M15.75 15.75L11.6386 11.6386" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-color="color-2" fill="none"></path> <path d="M7.75 13.25C10.7875 13.25 13.25 10.7875 13.25 7.75C13.25 4.7125 10.7875 2.25 7.75 2.25C4.7125 2.25 2.25 4.7125 2.25 7.75C2.25 10.7875 4.7125 13.25 7.75 13.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
			</div>
		</div>
		<div class="grid gap-1 text-sm">
			<div class="text-left leading-[1.25] text-zinc-600">
				<p>Welcome <span class="font-mono">M33ZY</span></p>
				<p><strong>Balance:</strong> 4.97 USD</p>
				<p><strong>Current Server Time:</strong> 01:14:09</p>
			</div>
			<div class="flex gap-1 leading-none items-end">
				<img class="w-10 inline-block" src={ bitcoin } alt="bitcoin"/><span class="text-blue-500 underline">Add funds</span> 
			</div>
		</div>
	</div>
</header>
