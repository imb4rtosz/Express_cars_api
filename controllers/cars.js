import { v4 as uuid } from 'uuid';

let cars = [];

export const getCars = (req, res) => {
    console.log("cars list ");

    res.send(cars);
}

export const createCar = (req, res) => {   
    const car = req.body;

    cars.push({...car, id: uuid()});
    
    console.log(`${car.brand} ${car.model} added to the database.`);

    res.send(cars);

};

export const getCar = (req, res) => {
    
    const car = cars.find((car) => car.id === req.params.id);

    console.log(`${car.brand} ${car.model} was found`)

    res.send(car);
};

export const deleteCar = (req, res) => { 
    console.log(`Car with id ${req.params.id} has been deleted`);
    
    cars = cars.filter((car) => car.id !== req.params.id);

    res.send(cars);
};

export const updateCar =  (req,res) => {
    const car = cars.find((car) => car.id === req.params.id);
    
    if(req.body.brand) car.brand = req.body.brand;
    if(req.body.model)car.model = req.body.model;
    if(req.body.producionDate)car.producionDate = req.body.producionDate

    console.log(`Brand has been updated to ${req.body.brand? req.body.brand: car.brand}.
                 Model has been updated to ${req.body.model? req.body.model: car.model}, 
                 and producion date has been updated to ${req.body.producionDate? req.body.producionDate: car.producionDate}`)

    res.send(cars);

};

