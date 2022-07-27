const { modul } = require('../Edit/module');
const { chalk, fs, proces } = modul;

global.wlcm = []
global.ntnsfw = []
global.ntnsfww = []
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.autoavailable = false //status online (online)
global.ownerNumber = ["6287741097274@s.whatsapp.net"]
global.namabotnya = 'RIK OHHz'
global.namaownernya = ' OHHz'
global.packname = 'RIK BOT'
global.author = 'RIK OHHz'
global.sessionName = 'istirahat'
global.lolkey = 'BloodSword'
global.dapkey = 'Kirbotz123'
global.kirkey = 'KirBotz'
global.email = 'rickytewolan02@gmail.com'
global.group = 'https://bit.ly/38oNU0D'
global.youtube = 'https://bit.ly/39Ivus6'
global.website = 'https://bit.ly/3yk3gOo'
global.github = 'https://bit.ly/3FqVBj8'
global.noown = 'https://wa.me/6287741097274'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.api = 
{
    success: '```Success✅```',
    admin: '```Fitur Khusus Admin Group!!!```',
    botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
    owner: '```Fitur Khusus Owner Bot!!!```',
    group: '```Fitur Digunakan Hanya Untuk Group!!!```',
    private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
    bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
    error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
    wait: '```Sabar Bang```',
    ban: '_Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya_',
    verif: '_Maaf Kak Kakak Belum Jadi User RIK_OHHz Silahkan Register Terlebih Dahulu Klik Di Bawah_'
}

global.thumb = fs.readFileSync('./command/Image/thumb.jpg')
global.vidkir = { url: 'https://i.top4top.io/m_20346wtuk5.mp4' }
global.menuimg = 'https://e.top4top.io/s_2392td4c80.jpg'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
proces.on('uncaughtException', console.error);