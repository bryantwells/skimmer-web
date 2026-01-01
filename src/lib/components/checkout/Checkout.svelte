<script lang="ts">
	import Header from "$lib/components/checkout/Header.svelte";
	import Nav from "$lib/components/checkout/Nav.svelte";
	import Message from "$lib/components/checkout/Message.svelte";
	import Table from "$lib/components/checkout/Table.svelte";

	const { data } = $props();
</script>

<div class="p-6 grid gap-6 bg-linear-to-b from-blue-100 to-white to-5%">
	<Header></Header>
	<hr class="border border-zinc-400 border-b-0">
	<Nav></Nav>
	<Message></Message>
	<Table data={data} ></Table>
</div>