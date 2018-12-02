{
  "name": "müzikaç",
  "permissions": "VIEW_CHANNEL",
  "restriction": "1",
  "_id": "AXPkW",
  "actions": [
    {
      "condition": "0",
      "comparison": "0",
      "value": "1",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "2",
      "name": "Check Parameters"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "**${member} Bir Video Urlsi Girmelisin ?**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "name": "Join Voice Channel"
    },
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "video",
      "name": "Store Command Params"
    },
    {
      "url": "${tempVars(\"video\")}",
      "seek": "0",
      "volume": "",
      "passes": "1",
      "bitrate": "",
      "type": "0",
      "name": "Play YouTube Video"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "```\nSıraya Eklendi Sırada Bir Şarkı Yoksa Şarkı Hemen Çalıcaktır... \n```",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ]
}