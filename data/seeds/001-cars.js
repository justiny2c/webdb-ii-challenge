
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 123, make: "Chevy", model: "Corvette", mileage: 1000 },
        { VIN: 234, make: "Toyota", model: "Prius", mileage: 1500 },
        { VIN: 456, make: "Honda", model: "Accord", mileage: 2000 },
        { VIN: 567, make: "Ferrari", model: "F355", mileage: 1200 },
      ]);
    });
};
