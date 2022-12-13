package weather

type Forecast struct {
}

func GetForecast(latitude int32, longitude int32) (Forecast, error) {
	return Forecast{}, nil
}
