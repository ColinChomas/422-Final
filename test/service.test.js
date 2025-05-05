const fs = require('fs');


test("files exist", () => {
    if(!fs.existsSync("./test_Data/test")){
        fs.mkdirSync("./test_data/test")
    }
    
    expect(fs.existsSync("./test_data/test")).toBe(true);
})


test("files exist", () => {
    if(!fs.existsSync("./test_Data/inbound")){
        fs.mkdirSync("./test_data/inbound")
    }
    if(!fs.existsSync("./test_Data/outbound")){
        fs.mkdirSync("./test_data/outbound")
    }
    if(!fs.existsSync("./test_Data/processed")){
        fs.mkdirSync("./test_data/processed")
    }
    
    expect(fs.existsSync("./test_data/inbound")).toBe(true);
    expect(fs.existsSync("./test_data/outbound")).toBe(true);
    expect(fs.existsSync("./test_data/processed")).toBe(true);
})