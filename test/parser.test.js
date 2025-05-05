const { processChange } = require("../src/parser");
const fs = require('fs');



test("one row csv parses json file", ()=>{
  const testData = "test_data.csv";
  const expected = "../outbound/test_data.json";
  processChange(testData);
  expect(fs.readFile(expected)).toBe(true);
})

