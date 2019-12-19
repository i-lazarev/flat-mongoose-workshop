const { Flat } = require("../Models/flat-models");
const faker = require("faker");

const home = (req, res, next) => {
  res.send("Flat App");
};

const create = function(req, res) {
  Flat.create({
    address_full: `Street:${faker.address.streetName()} #${faker.random.number(
      2
    )}, Zipcode: ${faker.address.zipCode()}, City: ${faker.address.city()}, Country: ${faker.address.country()}`,
    district: faker.address.county(),
    area_sqm: faker.random.number({ min: 15, max: 100 }),
    rooms: faker.random.number({ min: 1, max: 6 }),
    rent: faker.random.number({ min: 150, max: 2000 }),
    landlord: `${faker.name.firstName()} ${faker.name.lastName()}`
  }).then(flat => {
    //console.log(flat)
    res.send(flat);
  });
};

const getAll = async (req, res, next) => {
  console.log("Dsplaying all flats");
  try {
    let flat = await Flat.find();
    res.send(flat);
  } catch (err) {
    next(err);
  }
};

const getOne = async (req, res, next) => {
  console.log("GET: Displaying one flat");
  console.log(req.params.id); // id from URL
  try {
    const idFlat = req.params.id;
    let flat = await Flat.findById(idFlat);
    res.send(flat);
  } catch (err) {
    next(err);
  }
};

const createOne = async (req, res, next) => {
  console.log("POST: Create one flat");
  console.log(req.body);
  Flat.create({
    address_full: req.body.address_full,
    district: req.body.district,
    area_sqm: req.body.area_sqm,
    rooms: req.body.rooms,
    rent: req.body.rent,
    landlord: req.body.landlord
  });
};

const updateFlat = async (req, res, next) => {
  console.log("PATCH: Updating a flat");
  console.log(req.params.id);
  console.log(req.body);
  try {
    const idParams = req.params.id;
    let flat = await Flat.findByIdAndUpdate(idParams, req.body, { new: true });
    res.send(flat);
  } catch (err) {
    next(err);
  }
};

const deleteFlat = async (req, res, next) => {
  console.log(`DELETE: ${req.params.id}`);
  try {
    let flat = await Flat.findByIdAndDelete(req.params.id);
    res.send(flat);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  home,
  create,
  getOne,
  createOne,
  updateFlat,
  deleteFlat,
  getAll
};
