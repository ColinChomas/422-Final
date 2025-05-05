const fs = require('fs');


test("files exist", () => {
    if(!fs.existsSync("./test_data/test")){
        fs.mkdirSync("./test_data/test")
    }
    
    expect(fs.existsSync("./test_data/test")).toBe(true);
})


test("files exist", () => {
    if(!fs.existsSync("./test_data/inbound")){
        fs.mkdirSync("./test_data/inbound")
    }
    if(!fs.existsSync("./test_data/outbound")){
        fs.mkdirSync("./test_data/outbound")
    }
    if(!fs.existsSync("./test_data/processed")){
        fs.mkdirSync("./test_data/processed")
    }
    
    expect(fs.existsSync("./test_data/inbound")).toBe(true);
    expect(fs.existsSync("./test_data/outbound")).toBe(true);
    expect(fs.existsSync("./test_data/processed")).toBe(true);
})


test("processed file is in outbound", () =>{
    if(fs.readFile("./test_data/processed/test_data.csv")){
        expect(fs.readFile("./test_data/outbound/test_data.json").toBe(true));
    }
    else{
        expect(fs.readFile("./test_data/outbound/test_data.json").toBe(false));
    }
})

