import type { PageLoad } from './$types';

function parseCSV(csv: string) {
    const [headerLine, ...lines] = csv.trim().split('\n');
    const headers = headerLine.split(';');
    return lines
        .filter(line => line.trim().length > 0)
        .map(line => {
            const values = line.split(';');
            return Object.fromEntries(headers.map((h, i) => [h, values[i]]));
        });
}

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/api/data.csv');
	const csv = await res.text();
	const data = parseCSV(csv);

    return { data };
};