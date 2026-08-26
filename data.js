const fs = require("fs");
const addPerson = (id, fname, lname, age, city) => {
  const item = {
    id,
    fname: fname,
    lname: lname,
    age,
    city,
  };

  if (fs.existsSync("data.json")) {
    let allData = read();
    // const pool = allData.some((itm)=>itm.fname === item.fname)
    // if(pool){
    //   console.log("this name found already")
    //   return;
    // }
    const dublicate = allData.filter((obj) => obj.id === id);
    if (dublicate.length === 0) {
      allData.push(item);
      write(allData);
      console.log("added successfully")
    } else {
      console.log("error dublicated");
    }
  } else {
    fs.writeFileSync("data.json", JSON.stringify([item]));
  }
};
// ///////////////////////////////////
const deletePerson = (id) => {
  const allData = read();
  const delPerson = allData.filter((obj) => obj.id !== id);
  if(allData.length === delPerson.length){
    console.log("Bad Request,person not found")
    return;
  }
  write(delPerson);
  console.log("delete this person successfully")
};
// ////////////////////////////////////
const deleteAllPerson = () => {
  const allData = read();
  allData.splice(0,allData.length)
  write(allData)
  console.log("deleted all successfully")
};
// /////////////////////////////////////
const readPerson = (id) => {
  const allData = read();
  const findPerson = allData.find((obj) => obj.id === id);
  if (findPerson) {
    console.log(findPerson);
  } else {
    console.log("this person not found");
  }
};
// ///////////////////////////////////////
const readAllPerson = () => {
  const allData = read();
  allData.map((obj)=>console.log(obj))
};
// ///////////////////////////////////////
const list = () => {
  const allData = read();
  allData.forEach((obj) => console.log(obj.fname, obj.lname,"",obj.city));
};
// ///////////////////////////////////
function read() {
  return JSON.parse(fs.readFileSync("./data.json").toString());
}
// ////////////////////////////
function write(allData) {
  fs.writeFileSync("data.json", JSON.stringify(allData));
}
// /////////////////////////////
module.exports = {
  addPerson,
  deletePerson,
  readPerson,
  list,
  readAllPerson,
  deleteAllPerson,
};
