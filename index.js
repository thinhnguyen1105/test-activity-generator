const jsonfile = require("jsonfile");
const moment = require("moment");
const FILE_PATH = "./data.json";
const simpleGit = require("simple-git");
const DATE = moment().subtract(2, 'd').format();

const data = {
  date: DATE,
};

jsonfile.writeFile(FILE_PATH, data);
simpleGit().add([FILE_PATH]).commit(DATE, { "--date": DATE }).push();
