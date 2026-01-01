<div class="p-6 h-full flex flex-col justify-center bg-[red] leading-none">
	<div class="w-full max-w-[max-content] mx-auto grid gap-6">
		<div class="bg-linear-to-b from-[black] to-red-700 p-4 grid gap-4 text-[red] border border-6 border-[red] [border-style:inset] shadow-[-10px_-10px_20px_rgba(0,0,0,0.25)] outline-1 outline-[black]">
			
			<header class="text-center flex flex-col p-5 ">
				<span class="font-[cursive] text-5xl text-[red] text-shadow-[0px_0px_5px_rgba(255,0,0,1)]">Dream Market</span>
			</header>

			<section class="grid gap-3">

				<input class="bg-black border border-6 border-red-700 [border-style:outset] w-full p-2 placeholder-red-900 outline-1 outline-[black]" type="text" placeholder="E-Mail">
				<input class="bg-black border border-6 border-red-700 [border-style:outset] w-full p-2 placeholder-red-900 outline-1 outline-[black]" type="password" name="password" placeholder="Password">
				
				<section class="flex gap-2 grid-cols-2 justify-center">
					<a href="/checkout" class="text-[red] border-6 border-red-600 [border-style:inset] p-2 cursor-pointer bg-linear-to-b from-black to-red-800 outline-1 outline-[black]">Login</a>
				</section>

			</section>
			
		</div>
		<div class="underline text-xs cursor-pointer">
			forgot your password?
		</div>
	</div>
	
</div>

<style>
	.text-stroke {
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: black;
		paint-order: stroke fill;
	}
</style>