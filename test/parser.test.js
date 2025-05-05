const { processChange } = require("../src/parser");
const fs = require('fs');



test("one row csv parses json file", ()=>{
  const testData = "test_data.csv";
  const expected = "../outbound/test_data.json";
  processChange(testData);
  expect(fs.readFile(expected)).toBe(true);
})


test("test file is processed", () =>{
    processChange("test_data/inbound/test_data.csv");

    expect(fs.readFile("./test_data/processed/test_data.csv").toBe(true));

})