<script lang="ts">
	import CreditCard from "$lib/components/checkout/CreditCard.svelte";
	
	const cellStyle = "p-2 border border-zinc-400 align-top leading-[1.25] text-sm text-zinc-600";
	const cellContainerStyle = "line-clamp-3 overflow-hidden"
</script>

<div class="max-w-300 mx-auto">
	<header class="p-4 text-4xl text-center border border-zinc-400 text-zinc-600 border-b-0">
		Fullz
	</header>
	<table class="table-fixed w-full leading-none">
		<thead class="">
			<tr class="bg-zinc-100">
				<td class="{cellStyle} w-[10ch] font-bold">Type</td>
				<td class="{cellStyle} font-bold">Person</td>
				<td class="{cellStyle} font-bold">Object</td>
				<td class="{cellStyle} font-bold">Extra</td>
				<td class="{cellStyle} font-bold">Base</td>
				<td class="{cellStyle} w-[7ch] font-bold">Price</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="{cellStyle} !p-0">
					<CreditCard name="jcb"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr class="bg-zinc-50">
				<td class="{cellStyle} !p-0">
					<CreditCard name="mastercard"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr>
				<td class="{cellStyle} !p-0">
					<CreditCard name="amex"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr class="bg-zinc-50">
				<td class="{cellStyle} !p-0">
					<CreditCard name="discover"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr>
				<td class="{cellStyle} !p-0">
					<CreditCard name="jcb"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr class="bg-zinc-50">
				<td class="{cellStyle} !p-0">
					<CreditCard name="visa"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr>
				<td class="{cellStyle} !p-0">
					<CreditCard name="visa"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr class="bg-zinc-50">
				<td class="{cellStyle} !p-0">
					<CreditCard name="maestro"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr>
				<td class="{cellStyle} !p-0">
					<CreditCard name="mastercard"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr class="bg-zinc-50">
				<td class="{cellStyle} !p-0">
					<CreditCard name="amex"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr>
				<td class="{cellStyle} !p-0">
					<CreditCard name="discover"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr class="bg-zinc-50">
				<td class="{cellStyle} !p-0">
					<CreditCard name="jcb"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr>
				<td class="{cellStyle} !p-0">
					<CreditCard name="diners"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr class="bg-zinc-50">
				<td class="{cellStyle} !p-0">
					<CreditCard name="visa"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr>
				<td class="{cellStyle} !p-0">
					<CreditCard name="discover"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr class="bg-zinc-50">
				<td class="{cellStyle} !p-0">
					<CreditCard name="mastercard"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr>
				<td class="{cellStyle} !p-0">
					<CreditCard name="amex"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr class="bg-zinc-50">
				<td class="{cellStyle} !p-0">
					<CreditCard name="discover"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr>
				<td class="{cellStyle} !p-0">
					<CreditCard name="jcb"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr class="bg-zinc-50">
				<td class="{cellStyle} !p-0">
					<CreditCard name="visa"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr>
				<td class="{cellStyle} !p-0">
					<CreditCard name="visa"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr class="bg-zinc-50">
				<td class="{cellStyle} !p-0">
					<CreditCard name="maestro"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr>
				<td class="{cellStyle} !p-0">
					<CreditCard name="mastercard"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr class="bg-zinc-50">
				<td class="{cellStyle} !p-0">
					<CreditCard name="amex"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr>
				<td class="{cellStyle} !p-0">
					<CreditCard name="discover"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr class="bg-zinc-50">
				<td class="{cellStyle} !p-0">
					<CreditCard name="diners"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr>
				<td class="{cellStyle} !p-0">
					<CreditCard name="visa"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr class="bg-zinc-50">
				<td class="{cellStyle} !p-0">
					<CreditCard name="discover"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr>
				<td class="{cellStyle} !p-0">
					<CreditCard name="visa"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
			<tr class="bg-zinc-50">
				<td class="{cellStyle} !p-0">
					<CreditCard name="visa"></CreditCard>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Name: oula ***
						<br>city/zip: United States, MI, dearborn,
						<br>full_address: <span class="text-[green]">yes</span>
						<br>phone: <span class="text-[green]">yes</span>
						<br>email: <span class="text-[green]">yes</span>
						<br>ip: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Own/Rent: None
						<br>Years At Residence: <span class="text-[green]">yes</span>
						<br>Income Type: <span class="text-[green]">yes</span>
						<br>Employer: <span class="text-[green]">yes</span>
						<br>Occupation: <span class="text-[green]">yes</span>
						<br>Years Employed: <span class="text-[green]">yes</span>
						<br>Work Phone: <span class="text-[green]">yes</span>
						<br>Net Monthly Income: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						Credit Report: <span class="text-[green]">yes</span>
						<br>Credit Card: <span class="text-[green]">yes</span>
						<br>Checking Account: <span class="text-[green]">yes</span>
						<br>SSN: <span class="text-[green]">yes</span>
						<br>DOB: <span class="text-[green]">yes</span>
						<br>MMN: <span class="text-[green]">yes</span>
						<br>Driver License (MI): <span class="text-[green]">yes</span>
						<br>Account: <span class="text-[green]">yes</span>
						<br>Routing: <span class="text-[green]">yes</span>
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						0914 FULLZ CREDIT REPORT DLN ZIP
					</div>
				</td>
				<td class="{cellStyle}">
					<div class="{cellContainerStyle}">
						59.95$
					</div>
				</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td class="{cellStyle}"></td>
				<td class="{cellStyle}"></td>
				<td class="{cellStyle}"></td>
				<td class="{cellStyle}"></td>
				<td class="{cellStyle} font-bold">Total</td>
				<td class="{cellStyle}">59.95$</td>
			</tr>
		</tfoot>
	</table>
	<div class="p-4 ml-auto w-100 grid gap-4">
		<table class="table-fixed w-full">
			<tbody>
				<tr>
					<td class="{cellStyle} font-bold">Total Amount:</td>
					<td class="{cellStyle}">38.00$</td>
				</tr>
				<tr>
					<td class="{cellStyle} font-bold">Checker Fee:</td>
					<td class="{cellStyle}">0.00$</td>
				</tr>
				<tr>
					<td class="{cellStyle} font-bold">Discount:</td>
					<td class="{cellStyle}">3% (0.63$)</td>
				</tr>
				<tr>
					<td class="{cellStyle} font-bold">Summary Amount:</td>
					<td class="{cellStyle}">37.37$</td>
				</tr>
			</tbody>
		</table>
		<div>
			<div class="p-3 bg-green-500 inline-block rounded-md leading-none text-white">
				Go to My Orders
			</div>
		</div>
	</div>
</div>