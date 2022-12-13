import {
	RelativeLocation,
	NOAACordinate,
	NOAACordinateProperties,
	NOAAForecast,
} from "./@types/types.ts";

/**
 * Creates an instance to easily work with the NOAA Weather API. Provides a cloure
 * around useful methods for interacting with the US National Weather Service API.
 * @example
 * import NOAA from "./mod.ts";
 * const noaa = await NOAA(40, -105.27);
 * if (noaa) {
 *   const forecast = await noaa.Forecast();
 *   console.log(forecast);
 * }
 */
export default async function NOAA(lat: number, lon: number) {
	// https://api.weather.gov/points/{lat},{lon}
	const req = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
	// Validate that the request succeeded and that the JSON could be parsed properly
	if (!req) return null;

	let location: RelativeLocation;
	let props: NOAACordinateProperties;

	// Attempt to parse JSON if fails return null
	try {
		const data = (await req.json()) as NOAACordinate;
		location = data.properties.relativeLocation;
		props = data.properties;
	} catch (_) {
		return null;
	}

	// return the API
	return {
		Forecast: () => Forecast(props.forecast),
		Location: () => location,
	};
}

// Definitions for API Methods

async function Forecast(forecastURL: string) {
	const req = await fetch(forecastURL);

	// Returns null on failed requests
	// Could be network related, server issue, too many requests.
	if (!req.ok) {
		return null;
	}

	const forecast = (await req.json()) as NOAAForecast;
	return forecast;
}
