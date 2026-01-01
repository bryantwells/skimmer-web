<script lang="ts">
	import Checkout from "$lib/components/checkout/Checkout.svelte";
	const { data } = $props();
</script>

<Checkout data={ data.data }></Checkout>