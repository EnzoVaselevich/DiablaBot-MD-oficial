const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
export async function before(m, {conn, isAdmin, isBotAdmin}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  const grupo = `https://chat.whatsapp.com`;
  if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *Hey!! el anti link esta activo pero eres admin, ¡salvado!*');
  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return !0;
    }
    await this.sendMessage(m.chat, {text: `⚠️ 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 ⚠️ *¡𝐄𝐧𝐥𝐚𝐜𝐞 𝐝𝐞𝐭𝐞𝐜𝐭𝐚𝐝𝐨!, 𝐌𝐚𝐧𝐝𝐚𝐬𝐭𝐞 𝐮𝐧 𝐞𝐧𝐥𝐚𝐜𝐞 𝐩𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐩𝐨𝐫 𝐥𝐨 𝐜𝐮𝐚𝐥 𝐬𝐞𝐫𝐚𝐬 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐨.*`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *No soy admin, no puedo eliminar intrusos*');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *¡Esta característica esta desactivada!*');
  }
  return !0;
}