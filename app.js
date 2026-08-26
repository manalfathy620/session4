const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const data = require("./data.js");

yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "add item",
    builder: {
      fname: {
        describe: "add first name",
        demandOption: true,
        type: "string",
      },
      lname: {
        describe: "add last name",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      data.addPerson(argv.id,argv.fname, argv.lname,argv.age,argv.city);
    },
  })

  .command({
    command: "delete",
    describe: "delete item",
    builder: {
      id: {
        describe: "add id ",
        demandOption: true,
        type: "number",
      },
    },
    handler: (argv) => {
      data.deletePerson(argv.id);
    },
  })
    .command({
    command: "deleteAll",
    describe: "delete All items",
    handler: () => {
      data.deleteAllPerson();
    },
  })

  .command({
    command: "read",
    describe: "read item",
    builder: {
      id: {
        describe: "add id ",
        demandOption: true,
        type: "number",
      },
    },
    handler: (argv) => {
      data.readPerson(argv.id);
    },
  })
    .command({
    command: "readAll",
    describe: "read All items",
    handler: () => {
      data.readAllPerson();
    },
  })

  .command({
    command: "list",
    describe: "list item",
    handler: (argv) => {
      data.list();
    },
  })
  .parse();
