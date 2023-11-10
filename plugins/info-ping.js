
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

var handler = async (m, { conn }) => {
      
let timestamp = speed()
let latensi = speed() - timestamp

exec(`neofetch --stdout`, (error, stdout, stderr) => {
let child = stdout.toString('utf-8')
let ssd = child.replace(/Memory:/, 'Ram:')
m.reply(`*🏓 Pong  ${latensi.toFixed(4)}*`)})

}
handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed']
handler.register = true

export default handler
