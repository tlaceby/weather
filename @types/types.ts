export interface NOAACordinate {
	id: string;
	type: string;
	geometry: Geometry;
	properties: NOAACordinateProperties;
}

export interface Geometry {
	type: string;
	coordinates: number[];
}

export interface NOAACordinateProperties {
	"@id": string;
	"@type": string;
	cwa: string;
	forecastOffice: string;
	gridId: string;
	gridX: number;
	gridY: number;
	forecast: string;
	forecastHourly: string;
	forecastGridData: string;
	observationStations: string;
	relativeLocation: RelativeLocation;
	forecastZone: string;
	county: string;
	fireWeatherZone: string;
	timeZone: string;
	radarStation: string;
}

export interface RelativeLocation {
	type: string;
	geometry: Geometry;
	properties: RelativeLocationProperties;
}

export interface RelativeLocationProperties {
	city: string;
	state: string;
	distance: DistanceClass;
	bearing: DistanceClass;
}

export interface DistanceClass {
	unitCode: string;
	value: number;
}

export interface NOAAForecast {
	type: string;
	geometry: ForecastGeometry;
	properties: Properties;
}

export interface ForecastGeometry {
	type: string;
	coordinates: Array<Array<number[]>>;
}

export interface Properties {
	updated: string;
	units: string;
	forecastGenerator: string;
	generatedAt: string;
	updateTime: string;
	validTimes: string;
	elevation: Elevation;
	periods: Period[];
}

export interface Elevation {
	unitCode: string;
	value: number;
}

export interface Period {
	number: number;
	name: string;
	startTime: string;
	endTime: string;
	isDaytime: boolean;
	temperature: number;
	temperatureUnit: TemperatureUnit;
	temperatureTrend: null | string;
	windSpeed: string;
	windDirection: string;
	icon: string;
	shortForecast: string;
	detailedForecast: string;
}

export enum TemperatureUnit {
	F = "F",
	C = "C",
}
