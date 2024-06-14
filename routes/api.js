'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req,res)=>{

    let value = req.query.input
    let num = convertHandler.getNum(value);
  let unit = convertHandler.getUnit(value);
  let returnUnit = convertHandler.getReturnUnit(unit);
  let returnNum = convertHandler.convert(num, unit);

  if (num !== "invalid number" && unit !== "invalid unit") {
    const response = {
      initNum: num,
      initUnit: unit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: convertHandler.getString(num, unit, returnNum, returnUnit)
    };
    res.json(response);
  } else {
    res.json(convertHandler.getString(num, unit, returnNum, returnUnit))
}
  });
  /*
  console.log(convertHandler.getNum(trial))
  console.log(convertHandler.getUnit(trial))
  console.log(convertHandler.getReturnUnit(trial))
  */
}
