import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (conn.user.jid == conn.user.jid) {
    const { key } = await conn.sendMessage(m.chat, {text: `🚀🚀`}, {quoted: m});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `🚀🚀🚀🚀`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `🚀🚀🚀🚀🚀🚀`, edit: key});
await conn.sendMessage(m.chat, {text: `[🌼]𝐸𝑥𝑖𝑡𝑜/𝑆𝑢𝑐𝑒𝑠𝑠 𝑅𝑒𝑖𝑛𝑖𝑐𝑖𝑜 𝑐𝑜𝑚𝑝𝑙𝑒𝑡𝑜 𝐵𝑦 𝐷𝑖𝑎𝑏𝑙𝑎-𝐵𝑜𝑡-𝑀𝐷💖🌠`, edit: key});
    process.send('reset')
  } else throw 'eh'
}
handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['data000', 'datanula', 'dt', 'restart', 'reinciar'] 
handler.rowner = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
