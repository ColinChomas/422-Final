const { watch } = require("../src/watcher");
const fs = require('fs');

const watched = "../test_data/inbound";
const outbound ="../test_data/outbound";
const process = "../test_data/processed";

test("check if file is moved", () =>{
    const inbound = "test_data.csv";
    // watch(watched, outbound, process);
    expect(fs.readFile(process,"/",inbound)).toBe(true);
})