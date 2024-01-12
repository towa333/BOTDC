module.exports = {
    TOKEN: "MTE4MjMzNzI0NjEwODU4MTg5OQ.GEdz59.uJZTaCZmzfjat4Pa_0qi_mOJMXhmHnweiuX4_8",
    ownerID: ["283814406058541056", "1025803090114387968"], //write your discord user id. example: ["id"] or ["id1","id2"]
    botInvite: "https://discord.com/api/oauth2/authorize?client_id=1182337246108581899&permissions=8&scope=bot+applications.commands", //write your discord bot invite.
    supportServer: "https://discord.gg/jmJGzucpBr", //write your discord bot support server invite.
    mongodbURL: "mongodb+srv://pee33:wnn99e@cluster0.fgivnid.mongodb.net/?retryWrites=true&w=majority", //write your mongodb url.
    status: 'Maten al Towa',
    commandsDir: './commands', //Please don't touch
    language: "en", //en, tr, nl, pt, fr, ar, zh_TW, it, ja
    embedColor: "ffffff", //hex color code
    errorLog: "", //write your discord error log channel id.


    sponsor: {
        status: true, //true or false
        url: "https://www.twitch.tv/miorawrr", //write your discord sponsor url.
    },

    voteManager: { //optional
        status: false, //true or false
        api_key: "", //write your top.gg api key. 
        vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "play", "playlist", "queue", "resume", "save", "search", "skip", "stop", "time", "volume"], //write your use by vote commands.
        vote_url: "", //write your top.gg vote url.
    },

    shardManager: {
        shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
    },

    playlistSettings: {
        maxPlaylist: 10, //max playlist count
        maxMusic: 75, //max music count
    },

    opt: {
        DJ: {
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
        },

        voiceConfig: {
            leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
            leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

            leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
                status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
                cooldown: 10000000, //1000 = 1 second
            },

        },

        maxVol: 150, //You can specify the maximum volume level.

    }
}
