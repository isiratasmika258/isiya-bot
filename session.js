//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1DZFh3Tm1OdFZjT2ZxaGpaQ0VjZkdDMkR4bFBodjFJcm52aGZIY1ExZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGpPeDBwQ25vakVHZkk5MFV5NWZDME5MdlRwUkJKSy8zZFptbjk3dVZYbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSFg2WHYzMnVGZldJK1g3OGU3ZmJRcElDU3krZHVvRFpmN1dxQXl1TTNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLUENXdGVHaHFBUUI3NlE4c3JtR1ZLM1VVUHlTNTBrdDhJOWtaQzc4N1YwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFJaW9SdnMzcWV5blpCSlljYnZ5bUZLVzJ1ZWRYOWtRUkFSSzNPU0ZNVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRxQUVxRFRtUTlrWmx1a3MweW14aFJJQ1c3cVJsajJSSCtra3lWakVOaTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE9vbFhSZjlLRUx3aHBaQi9heW5nK1JlcVNXV1BuUHlzZkdHbW9YSTBYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHh4b29vdnM4S1F2Qk5qVXArSWN6OWpsaGJaYzBKaTkxNXF4RkdoZXdIVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhJVFVnY2R3QjZmczZlWUFqRUpJTzNiSTZoMnN6VkRjNzNQc0xxNzBRZVpBdkgrV1lZU3JsVURPbDRDTGRTcStQWGt6Q3NVc1YvS3hlMmlDcGR5bUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjExLCJhZHZTZWNyZXRLZXkiOiJNNWoyWDZRMEp5cHhod0g3VEdKaVpRK0tST0VYejlZdWkyVTJCczJKcFE4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvalhHNU5PMlJaYXRkY3hBWkVmeWNnIiwicGhvbmVJZCI6IjY4MmM4ODBhLTZmNTgtNGYzNy05MDZiLWNjZDc0M2U2YWEzNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEMlp2dmU4TDcxblR0dWh4WUJVeEtvcmVZWWM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRQOFkzUVhXK0h6ems2cTA4YXRNT21UNm5iND0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09tS2dka0hFTExsZzhNR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imszd1NjbWZES1Z3NExaL3ZqU2hJTml0OURaMDFEN1J4N0JTUVY1KzEyUjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikk3a21Vam9NWTBZeE1URGZOdGRRK0FicHNHTzRZa3B2b3JzbjBoMEZ0ZU9hVmRtbW8yYnJpbngrOFRiNHRnckJIWDI4dWNKbHBObXZjQUZnUGdDWURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0UEJEWXZKTmdwK2JHUG9CVFRWRVNVUVdPQkZYcnpJbFUvRkt3a01RVzRKc24zeWpDQmFpVGpDQWhzMkFXaDRLcktmRXdXWW9wTHJoVlNGWW9jZmdDZz09In0sIm1lIjp7ImlkIjoiOTQ3MDQ2Njc3NTc6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJpc2l5YSIsImxpZCI6IjE2MTIyOTM4MTM0NTM3MDo0QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwNDY2Nzc1Nzo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpOOEVuSm53eWxjT0MyZjc0MG9TRFlyZlEyZE5RKzBjZXdVa0ZlZnRka2YifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTE4NDA1NCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJZzAifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94701262055",
  PASSWORD: 
    process.env.PASSWORD || "123isiya@#$",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94742626388", "94701262055"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
