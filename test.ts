import NOAA from "./mod.ts";

// Creat an instance for Boulder, CO
const noaa = await NOAA(40, -105.27);

if (noaa) {
	const forecast = await noaa.Forecast();
	console.log(forecast);
}
