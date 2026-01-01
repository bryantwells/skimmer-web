// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Entry {
			'Card Number': string;
			'Expiry Date': string;
			'CVV2': string;
			'Type': string;
			'Debit/Credit': string;
			'Subtype': string;
			'Cardholder Name': string;
			'Country Code': string;
			'State': string;
			'City': string;
			'ZIP': string;
			'Address': string;
			'Phone': string;
			'E-Mail': string;
			'Extra Info': string;
			'DOB': string;
			'SSN': string;
			'MMN': string;
			'AT&T PIN': string;
			'ATM PIN': string;
			'OTP': string;
			'IP address': string;
			'Email password': string;
			'Driver License': string;
			'Last Paid Amount': string;
			'User-Agent': string;
			'Purchase Date': string;
			'Price': string;
		}
	}
}

export { };
