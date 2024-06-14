function ConvertHandler() {
  const unitMap = {
    gal: "L",
    l: "gal",
    lbs: "kg",
    kg: "lbs",
    mi: "km",
    km: "mi"
  };
  const spellOutMap = {
    gal: "gallons",
    l: "liters",
    lbs: "pounds",
    kg: "kilograms",
    mi: "miles",
    km: "kilometers"
  };
  this.getNum = function(input) {
    let result;
    const emptyPattern= /^[a-zA-Z]*$/;
    const fractionPattern = /^\d+(\.\d*)?\/\d+(\.\d*)?[a-zA-Z]*$/;
    const numPattern = /^\d+(\.\d*)?[a-zA-Z]*$/;
    
    if(emptyPattern.test(input)){
      return 1
    }
    else if(fractionPattern.test(input)) {
      let Match=input.match(/^\d+(\.\d*)?\/\d+(\.\d*)?/);
      //let denominator=input.match(/^\d+(\.\d*)?/);
      fraction = Match[0]
      .split("/")
      .map(element=>parseFloat(element))

      result=fraction[0]/fraction[1];
    }
    else if(numPattern.test(input)){
      let Match = input.match(/^\d+(\.\d*)?/);
     result=parseFloat(Match[0]);
    }
    else{
      result="invalid number"
    }
    return result;
  };
  
  this.getUnit = function(input) {
    let checkunit =/[a-zA-Z]+$/;
    let result;
    let match = input.match(checkunit);

    if(!match){
      result = "invalid unit"
    }
    else{
    if(!unitMap.hasOwnProperty(match[0].toLowerCase())){
      result = "invalid unit"
    }
    else{
      result = match[0].toLowerCase();
      if(result=="l"){
        result = result.toUpperCase();
      }
       }
      }
  return result
    
  };
  
  this.getReturnUnit = function(initUnit) {
     
      return unitMap[initUnit.toLowerCase()] || "";
     
  };

  this.spellOutUnit = function(unit) {

    return spellOutMap[unit.toLowerCase()] || "";
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    if(initNum && initUnit){
      switch (initUnit){
        case "gal":
          result=(initNum*galToL).toFixed(5);
          break;
        case "L":
          result=(initNum/galToL).toFixed(5);
          break;
        case "lbs":
          result=(initNum*lbsToKg).toFixed(5);
          break;
        case "kg":
          result=(initNum/lbsToKg).toFixed(5);
          break;
        case "mi":
          result=(initNum*miToKm).toFixed(5);
          break;
        case "km":
          result=(initNum/miToKm).toFixed(5);
          break;
      }
     
    }
    return parseFloat(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result
    if(initNum=="invalid number" && initUnit=="invalid unit"){
      result="invalid number and unit"
    }
    else if(initNum=="invalid number"){
      result="invalid number"
    }
    else if(initUnit=="invalid unit"){
      result="invalid unit"
    }
    else{
      let initUnitString=this.spellOutUnit(initUnit);
      let returnUnitString= this.spellOutUnit(returnUnit);
      result=`${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`
    }
    return result;
  };
  
}

module.exports = ConvertHandler;
