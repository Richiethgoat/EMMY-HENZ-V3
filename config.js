//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZLMHoyS0ZheEZ2NlgvZWNGZjJmZjZXM3A1ZDJINTFXUVpZcVF4UFBGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHVmL2Y0UGNqajNqM3N5SlF5WGdCU2V5SzVzTmNQaTJqNmFubFJJZy8zWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrR3Y0WFR3bVhDamxVTi93MEEwQWl3bHpiSnBZayt6TnhYSUxpNWpoNzB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJta2NwZzBMOXVhdjFZUjdMK1NLZmp3NU1HajY2N2twa3pGNWFZNFI2SGg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdFV1pUeTFsRE1sNkl4QWhPKzZmTnhLNjZLQkFWUlBnK3RPdXcya1FhWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI1WEJwREplRDV2NDRQSzc0YnQrOFc3VnNnR3Y0NVl3amovUkNCcm5QREU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1B3c1Q2bWFrNTBQR0N5MzFGTFZIejJEeHRTaktjOU1yNkNscXd1UGpFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2s4QmJUNUhXUmZTTTVoVzdHUlJsb2R5RW1Ua3NnaFNycHNVenhLNjhBbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldPK2lJMmI4LzZTSEQ2TlMrTzFkQzB1dGd0eUlPSDk0dWlhbHFicEliK0c3T0ZKTjJNNnRXamhtRzJic3FyR0hsOXN2R3NMNmc4YmZjaGZScU1aVWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiJmWXR2eG5kV0pHSDRhQTM2aEdaYjAwa096WEFybURWVUZNandLbDh5RXRJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMjc0NTM3MjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOUVGNEJCQUI2NEFFOUE3OTgyOTU5OEE5MENEM0EwQ0QifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTM3NzU0Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTAyNzQ1MzcyNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2RUU4REEyRDE1RUQ3RDdGQzAwNERCOTQ1OTNEMjhEOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI5Mzc3NTQ2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCajZ4U0VBOFJxYVJIS1I4X3dGb0lBIiwicGhvbmVJZCI6IjY0MjliNGRmLTU3NjEtNDk3OS05NWRkLTJhM2YyMGIzZGEyYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYbG8xaFh2RWEwUU1EQmxlMG9zclY1elhNdlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVJGMjB2TStmaE1ZMkNTbjFOVkFqVWU0U2tZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFGRVJHVldaIiwibWUiOnsiaWQiOiIyMzQ5MDI3NDUzNzI2OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi5Lyf5aSn55qE6YeM5aWHyrPhtYnhtZfigbHKs+G1ieG1iOGthCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3U0b3ZrRkVQbnAwTGdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYVRTcmtENkt5ekQxNTcxVkptYTNyVWQyNkpVWXA1SUg1TDJuRUpxZXhFMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoibnZJRzV2elhWYkczMzVpYlNRb3BHcHFQbC9IVmZaa3hCMFhZWTkwTGZtSE5rZzRmdDNzczdmWXBJL3B4TVlKNVdaUGJMOURIMEN4VzJEWTRONVNSQUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImFJS3dVbEQxdkttYTdXNmx0ekE2SkNzd0hxaVl2MVBlbEpLMHI4OEM2Z1hIbG02UDZ1akxPQTR4RXJIWHdRTXVSMldKdCtlOUUwYm1SV1plbWVVemhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAyNzQ1MzcyNjoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldrMHE1QStpc3N3OWVlOVZTWm10NjFIZHVpVkdLZVNCK1M5cHhDYW5zUk4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkzNzc1NDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0RJIn0="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
