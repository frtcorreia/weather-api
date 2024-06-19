# Weather API

Welcome to the Weather API using weatherapi.com! This is a Node.js API that provides current weather data, forecasts, and historical weather data using the WeatherAPI.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Routes](#routes)
  - [Current Weather Data](#current-weather-data)
  - [Weather Forecast](#weather-forecast)
  - [Historical Weather Data](#historical-weather-data)
- [Running the Server](#running-the-server)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/frtcorreia/weather-api.git
   cd weather-api
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root of the project and add your WeatherAPI key and the server port:

```env
WEATHER_API_KEY=your_weatherapi_key
PORT=3000
```

Replace `your_weatherapi_key` with your WeatherAPI key.

## Routes

### Current Weather Data

`GET /api/v1/weather/current`

Parameters:

- `q`: Location (required)
- `dt`: Date in `yyyy-MM-dd` format (required)

Request example:

json
`{
  "q": "London",
  "dt": "2023-06-19"
}`

### Weather Forecast

`GET /api/v1/weather/forecast`

Parameters:

- `q`: Location (required)
- `days`: Number of forecast days (required)
- `hour`: Hour of the day for the forecast (required)

Request example:
json
`{
  "q": "London",
  "days": 3,
  "hour": 14
}`

### Historical Weather Data

`GET /api/v1/weather/archive`

Parameters:

- `q`: Location (required)
- `dt`: Date in `yyyy-MM-dd` format (required)

Request example:
json
`{
  "q": "London",
  "dt": "2023-06-19"
}`

## Running the Server

---

To start the server, run the command:

bash
`npm start`

The server will be running on the port specified in the `.env` file (default: 3000).

## Contributing

---

Contributions are welcome! Feel free to open issues or pull requests.

## License

---

This project is licensed under the MIT License. See the LICENSE file for details.

javascript
`In this document, the JSON examples are properly formatted and highlighted using the `json` keyword after the triple backticks. This ensures that the JSON is displayed correctly and is easy to read in your Markdown file.`
