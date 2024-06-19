import express, { Router, Request, Response } from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const app = express();
const route = Router();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to Weather API" });
});

app.get("/api/v1/weather/current", async (req: Request, res: Response) => {
  const { q, dt } = req.body;

  if (!q || !dt) {
    return res.status(400).send({
      error: "Parâmetros q (localização) e dt (data) são obrigatórios",
    });
  }

  try {
    const response = await axios.get(
      "https://api.weatherapi.com/v1/current.json",
      {
        params: {
          key: process.env.WEATHER_API_KEY,
          q: q,
          dt: dt,
        },
      }
    );

    res.send(response.data);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Erro ao obter dados do WeatherAPI", details: error });
  }
});

app.get("/api/v1/weather/forecast", async (req: Request, res: Response) => {
  const { q, days, hour } = req.body;
  const dt = new Date();
  if (!q || !days || !hour) {
    return res.status(400).send({
      error:
        "Parâmetros q (localização), hour (hora) e days (dias) são obrigatórios",
    });
  }

  try {
    const response = await axios.get(
      "https://api.weatherapi.com/v1/forecast.json",
      {
        params: {
          key: process.env.WEATHER_API_KEY,
          q: q,
          dt: dt,
          days: days,
          hour: hour,
        },
      }
    );

    res.send(response.data);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Erro ao obter dados do WeatherAPI", details: error });
  }
});

app.get("/api/v1/weather/archive", async (req: Request, res: Response) => {
  const { q, dt } = req.body;

  if (!q || !dt) {
    return res.status(400).send({
      error: "Parâmetros q (localização) e dt (data) são obrigatórios",
    });
  }

  try {
    const response = await axios.get(
      "https://api.weatherapi.com/v1/history.json",
      {
        params: {
          key: process.env.WEATHER_API_KEY,
          q: q,
          dt: dt,
        },
      }
    );

    res.send(response.data);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Erro ao obter dados do WeatherAPI", details: error });
  }
});

app.use(route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
