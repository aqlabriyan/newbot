const fs = require("fs");
const chalk = require("chalk");

// self or public
global.self = false; //jadiin true klo gk mau fitur bot lu di pke sama org lain

// setting
global.ownername = "ZeeoneOfc";
global.ownernumber = "62887435047326";
global.botname = "Aqla-Bot";
global.thumbnail = fs.readFileSync("./settings/aqla.jpg"); //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/d4c05638fa7886a1d8060.jpg";
global.lolkey = "RIFQIBOTZ"; //apikey
global.limit = {
  free: 20,
  premium: 1000,
};
global.session_name = "session.json";

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});