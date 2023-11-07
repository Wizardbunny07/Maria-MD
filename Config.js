const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "917907158261"
global.ownername = "𝙱ᴜɴɴʏ 𝚉ᴇʀ"
global.ytname = "YT: Bunny Media444"
global.socialm = "GitHub: nop!!"
global.location = "Kerala"

global.ownername = 'Bunny' //owner name
global.botname = '𝗝𝗨𝗟𝗜𝗘-𝗠𝗗' //name of the bot

//sticker details
global.stickername = '🐬⃞⃯✶₇ ⷡ₉ ͧ₀ ⷫ₇ ⷫ₁ ⷱ₅ ₈ ᷦ₂ ⷷ₆ ⷢ₁͌⌁𐂂➤'
global.packname = '⌖𝑫𝜊𝜂'𝛵 𝛭𝜖͂𝛿𝛿 𝜔𝜄𝛵𝛨 𝛭𝜖ː🧠🚮'
global.author = 'Julie Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ayush botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/DimeUmnsFBU4Y27pD08lpS'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = false //auto block +92 
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
