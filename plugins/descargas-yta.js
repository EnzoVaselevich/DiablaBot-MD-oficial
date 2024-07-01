import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch' 
import yts from 'yt-search'
import ytdl from 'ytdl-core'

var handler = async (m, { text, conn, args, usedPrefix, command }) => {

if (!args[0]) conn.reply(m.chat, '*🌠 𝑬𝑹𝑹𝑶𝑹 🌠 𝒊𝒏𝒈𝒓𝒆𝒔𝒆́ 𝒖𝒏 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 + 𝒖𝒏 𝒆𝒏𝒍𝒂𝒄𝒆𝒔 𝒅𝒆 𝒚𝒐𝒖𝒕𝒖𝒃𝒆*',  m, fake, )

let youtubeLink = ''
if (args[0].includes('you')) {
youtubeLink = args[0]
} else {
const index = parseInt(args[0]) - 1
if (index >= 0) {
if (Array.isArray(global.videoList) && global.videoList.length > 0) {
const matchingItem = global.videoList.find(item => item.from === m.sender)
if (matchingItem) {
if (index < matchingItem.urls.length) {
youtubeLink = matchingItem.urls[index]
} else {
return conn.reply(m.chat, `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥒ᥆ sᥱ ᥱᥒᥴ᥆ᥒ𝗍r᥆ ᥙᥒ ᥱᥒᥣᥲᥴᥱ ⍴ᥲrᥲ ᥱsᥱ ᥒᥙmᥱr᥆ іᥒgrᥱsᥲ ᥙᥒ ᥒᥙ́mᥱr᥆ ძᥱᥣ 1 ᥲᥣ ${matchingItem.urls.length}*`,  m, fake, )
}} else {
return conn.reply(m.chat, `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ⍴ᥲrᥲ ⍴᥆ძᥱr ᥙsᥲr ᥱs𝗍ᥱ ᥴ᥆mᥲᥒძ᥆ ძᥱ ᥣᥲ mᥲᥒᥱrᥲ${usedPrefix + command} <numero>), rᥱᥲᥣіzᥲ ᥣᥲ ᑲᥙs𝗊ᥙᥱძᥲ ძᥱ ᥎іძᥱ᥆s ᥴ᥆ᥒ ${usedPrefix}playlist <texto>*`,  m, fake, )
}} else {
return conn.reply(m.chat, `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ⍴ᥲrᥲ ᥙsᥲr ᥱs𝗍ᥱ ᥴ᥆mᥲᥒძ᥆ ძᥱ ᥣᥲ mᥲᥒᥱrᥲ ${usedPrefix + command} <numero>), rᥱᥲᥣіzᥲ ᥣᥲ ᑲᥙ́s𝗊ᥙᥱძᥲ ᥴ᥆ᥒ ${usedPrefix}playlist <texto>*`,  m, fake, )
}}} 
await conn.reply(m.chat, `*🍭 𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐 𝒆𝒔𝒑𝒆𝒓𝒆́.. ッ၇*`, m, fake, )

try {

let q = '128kbps'
let v = youtubeLink
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
  
try {

let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${youtubeLink}`)
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'

await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
} catch {

try {

let searchh = await yts(youtubeLink)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
m.react(done)
conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })
} catch {
m.react(error)
await conn.reply(m.chat, '*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱrr᥆r, ᥒ᥆ sᥱ ⍴ᥙძ᥆ ᥱᥒ᥎іᥲr ᥱᥣ ᥲᥙძі᥆*', m, fake, )}
}}

}
handler.help = ['yta']
handler.tags = ['descargas']
handler.command = /^audio|fgmp3|dlmp3|getaud|yt(a|mp3)$/i

handler.register = true
handler.limit = true

export default handler
