const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('convertHandler should correctly read a whole number input.', function(done) {
        const input = '32L';
        const expected = 32;
        assert.strictEqual(convertHandler.getNum(input), expected);
        done();
      });
    test("convertHandler should correctly read a decimal number input.",(done)=>{
        assert.strictEqual(convertHandler.getNum('32.4L'), 32.4);
        done();
    });
    test("convertHandler should correctly read a fractional input.",(done)=>{
        assert.strictEqual(convertHandler.getNum('2/4L'), 0.5);
        done();
    });
    test("convertHandler should correctly read a fractional input with a decimal.",(done)=>{
        assert.strictEqual(convertHandler.getNum('2.5/4L'), 0.625);
        done();
    });
    test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).",(done)=>{
        assert.strictEqual(convertHandler.getNum('3/2/3L'), "invalid number");
        done();
    });
    test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.",(done)=>{
        assert.strictEqual(convertHandler.getNum('l'), 1);
        done();
    });
    test("convertHandler should correctly read each valid input unit.",(done)=>{
        assert.strictEqual(convertHandler.getUnit('43mi'), "mi");
        done();
    });
    test("convertHandler should correctly return an error for an invalid input unit.",(done)=>{
        assert.strictEqual(convertHandler.getUnit('43mdi'), "invalid unit");
        done();
    });
    test("convertHandler should return the correct return unit for each valid input unit.",(done)=>{
        assert.strictEqual(convertHandler.getReturnUnit('mi'), "km");
        done();
    });
    test("convertHandler should correctly return the spelled-out string unit for each valid input unit.",(done)=>{
        assert.strictEqual(convertHandler.spellOutUnit('mi'), "miles");
        done();
    });
    test("convertHandler should correctly convert gal to L.",(done)=>{
        assert.strictEqual(convertHandler.convert(1,'gal'), 3.78541);
        done();
    });
    test("convertHandler should correctly convert L to gal",(done)=>{
        assert.strictEqual(convertHandler.convert(1,'L'), 0.26417);
        done();
    });
    test("convertHandler should correctly convert mi to km",(done)=>{
        assert.strictEqual(convertHandler.convert(1,'mi'), 1.60934);
        done();
    });
    test("convertHandler should correctly convert km to mi",(done)=>{
        assert.strictEqual(convertHandler.convert(1,'km'), 0.62137);
        done();
    });
    test("convertHandler should correctly convert lbs to kg",(done)=>{
        assert.strictEqual(convertHandler.convert(1,'lbs'), 0.45359);
        done();
    });
    test("convertHandler should correctly convert kg  to lbs",(done)=>{
        assert.strictEqual(convertHandler.convert(1,'kg'), 2.20462);
        done();
    });
});