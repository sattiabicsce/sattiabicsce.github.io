const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());

const upload = multer({ dest: __dirname + "/public/images" });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

let cars = [{
        _id: 1,
        make: "Toyota",
        model: "Camry",
        year: 2022,
        color: "Silver",
        price: 25000,
        features: ["Automatic Transmission", "Power Windows", "Bluetooth Connectivity"],
    },
    {
        _id: 2,
        make: "Honda",
        model: "Civic",
        year: 2021,
        color: "Blue",
        price: 22000,
        features: ["Apple CarPlay", "Lane Departure Warning", "Keyless Entry"],
    },
    {
        _id: 3,
        make: "Ford",
        model: "Mustang",
        year: 2023,
        color: "Red",
        price: 35000,
        features: ["Convertible", "V8 Engine", "Leather Seats"],
    },
    {
        _id: 4,
        make: "Chevrolet",
        model: "Equinox",
        year: 2022,
        color: "Black",
        price: 28000,
        features: ["SUV", "Backup Camera", "Dual-zone Climate Control"],
    },
    {
        _id: 5,
        make: "Nissan",
        model: "Altima",
        year: 2023,
        color: "White",
        price: 24000,
        features: ["Push Button Start", "Adaptive Cruise Control", "Rear Cross Traffic Alert"],
    },
    {
        _id: 6,
        make: "Tesla",
        model: "Model 3",
        year: 2023,
        color: "Midnight Silver Metallic",
        price: 50000,
        features: ["Electric", "Autopilot", "Long Range"],
    }
];

app.get("/api/cars", (req, res) => {
    res.send(cars);
});

app.post("/api/cars", upload.single("img"), (req, res) => {
    const result = validateCar(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const car = {
        _id: cars.length + 1,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        color: req.body.color,
        price: req.body.price,
        features: req.body.features.split(","),
    };

    cars.push(car);
    res.send(cars);
});

const validateCar = (car) => {
    const schema = Joi.object({
        _id: Joi.allow(""),
        features: Joi.allow(""),
        make: Joi.string().min(3).required(),
        model: Joi.string().min(3).required(),
        year: Joi.number().min(1900).max(2030).required(),
        color: Joi.string().min(3).required(),
        price: Joi.number().min(0).required(),
    });

    return schema.validate(car);
};

app.listen(3000, () => {
    console.log("I'm listening");
});