type Vehicle = {
  brand: string;
  year: string;
}

type Car = {
  brandAlt: Vehicle['brand'];
  yearAlt: Vehicle['year'];
  name: string;
}

const car: Car = {
  brandAlt: 'Porsche',
  yearAlt: '2025',
  name: 'Carrera'
}

console.log(car);
