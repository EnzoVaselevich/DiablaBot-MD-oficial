/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

 global.owner = [
['5491168758497', '🍁 𝗢𝘄𝗻𝗲𝗿 - 𝗖𝗹𝗲𝗮𝘁𝗼𝗿 🐼', true],
['5492215034412', '🪷 𝐌𝐚𝐭𝐢𝐬𝐬 - 𝐂𝐫𝐢𝐩𝐭𝐨𝐎𝐅𝐂 🌠', true],
['527561175278', 'Matias2 Owner', true]]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['5214531287294']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [ /* ['5217294888993'], */ ['5214434703586'], ['5492266466080'], ['5492266613038'], ['573012482597'], ['5215610314499'], ['51935531943'], ['33760536110'], ['5492964650915'], ['50558124470'], ['573012482597']]

global.packname = '🌸 𝑵𝒆𝒘𝒕𝒘𝒐𝑩𝒐𝒕-𝑴𝑫 🐼'
global.author = 'Enzito'
global.wm = '𝐍𝐞𝐰𝐭𝐰𝐨𝐁𝐭𝐨𝐭-𝐌𝐃 💫'
global.wm2 = '🍁 𝙽𝚎𝚠𝚝𝚠𝚘𝙱𝚘𝚝-𝙼𝙳 🌸'
global.jxtxn = 'Enzito'
global.cb = '𝗡𝗲𝘁𝘄𝘁𝘄𝗼𝗕𝗼𝘁-𝗠𝗗 💖'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'ʙʏ ᴱⁿᶻᵒ.ᴏғᴄ'
global.devnum = '+51929972576'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
