//#ENJOY
/**

██╗░░██╗░█████╗░██████╗░███████╗
██║░░██║██╔══██╗██╔══██╗██╔════╝
███████║██║░░██║██████╔╝█████╗░░
██╔══██║██║░░██║██╔═══╝░██╔══╝░░
██║░░██║╚█████╔╝██║░░░░░███████╗
╚═╝░░╚═╝░╚════╝░╚═╝░░░░░╚══════╝
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "https://youtube.com/@lytamanhwa?si=OtrM7arnil9E1SzJ";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "256789810043@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://youtube.com/@lytamanhwa?si=OtrM7arnil9E1SzJ";
global.gurl =
  process.env.GURL || "https://youtube.com/@lytamanhwa?si=OtrM7arnil9E1SzJ";
global.website =
  process.env.GURL || "https://youtube.com/@lytamanhwa?si=OtrM7arnil9E1SzJ";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.ibb.co/RHqJM2Z/Free-Fire-09-19-2024-18-41-22.png";
global.devs = "2347084528285";
global.sudo = process.env.SUDO || "2347084528285";
global.owner = process.env.OWNER_NUMBER || "2347084528285";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://session-generator-bsji.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJZMkE3QUNkV2ZwdUpBVy9IdzB3ay9TZjRYdmVWUHFlQjhPTzR0S3FsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0UzSG8zbFV6MjNOMmtEQ0NmVmtYUkFHMktQVlI5VTN1S1NPaWJiNXVEaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSFFaMk1JbVZqcDhXbVJFYzJjMHA4QzZnNzMwSytzTnkwZEJ5cStwWjBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrL2dZMmsvUDQ2dWZnTlprRjRYd3N5SkNPY0Z1b0EyL3M1d2dodW4yTGxRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFMVDgyRmlvMzVKQjJESm42Y2xxMWFNNGtsdUFxWEFRV3VycEdsQ3JBVTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp0czA5UjZrcHYyY01uRFZwS0k1MWdzV2JIWEVxNzlObFhsaHpMTGJWQWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUNQejZwZ3ZsUTRSZWcvTlVjeHRIYmtwWm1zSjZZU1Z5MGdGZkppellGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0FoY08vblU1OGQrZU1GUmoxTmRZOUhPQ1NVTXd6WWQrSmx1dmUyNnlVWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRqZ2RqbTRtNVB4NllqL3M1S3p2VUxheFJlRnBHUVhYTDZZNlN0VjZVNDErcXZhUlN0V1loUDVOcUQ4Qk02QjBjb2lRT3M1WFhWbXJ3MlphbFlpV0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJsQ2JxSGR2ZnFOKzlMQk04VnBZdHBQRGJPNGtNL2JuWHF4WS9LS0NHWUtnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJocFRJdkQtLVJMLWREdV93aTZUMEZBIiwicGhvbmVJZCI6ImMzMjlmNGNkLTBiNmEtNDQ2ZC05MzU1LWRhYjQ0NmFkMmYzMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrdnJLaG1nOHhTUXQweks4Y3duKzdId3NrQlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1Rja3doSzdMK1VuSkZtWVgyK1EzU2ppRklvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVDOThEN0JRIiwibWUiOnsiaWQiOiIyMzQ3MDg0NTI4Mjg1OjIyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQZjNrZEFCRVAzRTJiY0dHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJtUjVTVzVlcDNHakRSY0V1KzlVT0pxazFqQy9QS1NmbnRrYWNWS3hpQlRVPSIsImFjY291bnRTaWduYXR1cmUiOiJDVjlQYWNwY2NvTEFLSzk5bkpZMzAyc1JQVGxoVTdZMDJhYkZ3VjNodTlMdThyVHpWemZiRnhxN1NSS2FtaXI5ZE0yTXlzdWNzOG5lRHd3WGQzRmtCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVVBZSksyd3krd2VHZlZ0SDlVcERlelhaVEp1bkpyZUxEbHc5L0hvT1V6VlBtcWZweEJ6MU13MmJNdXMrMTd0Y2xTOUMzVjVOcGdLc05tTXJvdkZ1RHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDg0NTI4Mjg1OjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlprZVVsdVhxZHhvdzBYQkx2dlZEaWFwTll3dnp5a241N1pHbkZTc1lnVTEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc0MjMxMTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1lpIn0=";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-lyta😍",
  author: process.env.PACK_AUTHER || "lyta",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "lyta-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "lyta",
  errorChat: process.env.ERROR_CHAT || "2347084528285",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
