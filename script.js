const url = 'https://open-weather13.p.rapidapi.com/city/Mumbai/EN';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3af42d2136msh4ba7ef5ea516c03p1cfdecjsn19dcf5686a00',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}