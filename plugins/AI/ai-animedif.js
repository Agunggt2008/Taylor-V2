import fetch from "node-fetch"

let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    args
}) => {
    let text = args.length >= 1 ? args.slice(0).join(" ") : (m.quoted && m.quoted?.text || m.quoted?.caption || m.quoted?.description) || null;
    if (!text) throw 'Example: .animedif highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed'
    m.reply(wait)
    try {
        conn.sendFile(m.chat, `https://api.xyroinee.xyz/api/ai/animediffusion?q=${text}&apikey=${global.xyro}`, 'anu.jpg', `Prompt: ${text}`, m)
    } catch (e) {
        m.reply(eror)
    }

}
handler.help = ['animedif']
handler.tags = ['ai']
handler.command = /^(animedif)$/i
handler.limit = true
export default handler