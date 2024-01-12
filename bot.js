const { Client, GatewayIntentBits, Partials, EmbedBuilder } = require("discord.js");
const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { DeezerPlugin } = require("@distube/deezer");
const { YtDlpPlugin } = require("@distube/yt-dlp");
const config = require("./config.js");
const fs = require("fs");
const client = new Client({
  partials: [
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.User, // for discord user
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    ...Object.keys(GatewayIntentBits).map((a) => GatewayIntentBits[a]),
  ],
});
client.on('messageCreate', async (message) => {
	if (message.content == "!soporte") {
        const userIdToMention = '1025803090114387968';
        const userIdToMentionn = `<@${userIdToMention}>`;
        const embed = new EmbedBuilder()
            .setColor('#ffffff')
            .setTitle('Soporte')
            .setDescription(`Mandale un mensaje a ${userIdToMentionn} .\nEstare ahí para ti en cualquier momento. <:MioAwita:1187032892904321024> `)
            .setImage('https://i.pinimg.com/originals/b5/5a/aa/b55aaaa20383569b1449e2a7ecf8c358.gif')
            .setThumbnail(`https://cdn.discordapp.com/avatars/1025803090114387968/6c83fea407f51b30ec62e62a821dab67.webp?size=4096`)
            .setTimestamp();
    
        message.channel.send({ embeds: [embed] });
    }
	
if (message.content == "!ayuda") {
	const embed = new EmbedBuilder()
		.setTitle("  ")

		.setAuthor({
            name: "MioBOT",
            iconURL:
              "https://cdn.discordapp.com/attachments/1159963139442487346/1193323335833104454/miotequiero.png?ex=65ac4bf6&is=6599d6f6&hm=01f3b5417e646ae6d861c0b6334f9a459c614290d75d03c65c14941b20bd401b&",
            url: "https://discord.gg/ngJtg6Td",
          })
          .setDescription(
            `__**Características :**__\n\n> ** Bot update:** 3.0 👑\n> **Prefix:** !
                > ** Creado por:** **Towa** 🇦🇷\n\n__**COMANDOS :**__ `,
          )
          .addFields(
            // Basic commands category
            {
                name: "<:MioAbasho:1183249378752876645>  Musica",
                value: '`/autoplay`, `/atras`, `/canal`, `/borrar`, `/dj`, `/filter`, `/loop`, `/nowplaying`, `/pause `, `/play `, `/playlist`, `/queue`, `/resume`, `/save`, `/search`, `/seek`, `/shuffle`, `/skip`, `/stop`, `/time`, `/volume`.',
                inline: true,
            },
            // Music commands category
            {
                name: "<:MioHug:1175162030374789130>  Anime",
                value: "`!abrazo`, `!hola`, `!adios`, `!caricia`, `!lamer`, `!golpear`, `!soplar`, `!nya`, `!bailar`, `!cantar`, `!enojado`, `!menear`, `!comer`, `!guiñar`, `!gumorni`, `!gudnait`, `!cocinar`.",
                inline: true,
            },
            //fun category
            {
                name: '<:MioAwita:1187032892904321024>  Utilidad',
                value: '`/estadistica`, `/language`, `/ayuda`, `/servers`, `/ping`.',
                inline: true,
            },
            

        
            // Utility commands category
            {
                name: "<:MioYamero:1179106697030152262>  Errores",
                value: ' `!soporte` para cualquier duda..',
                inline: true,
            },
        )
          .setTimestamp()
          .setImage(
            `https://cdn.discordapp.com/attachments/1172738528774475887/1172738590493642802/shiraxMio.jpg?ex=65ab3cec&is=6598c7ec&hm=e25ade6b08cfc9e79a5e0e89b997062e153bc3da74a01693d24c482a24934754&`,
          )
          .setColor("ffffff");
	message.channel.send({ embeds: [embed] })
}

    const content = message.content.toLowerCase();

    // Verificar si el mensaje es "!no" y responder con un gif
    



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (message.content.startsWith('!comer')) {
        // Comprueba si el usuario se mencionó a sí mismo
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {
            const nickname = message.member.displayName;
            const emojiPersonalizado = '<:MioAwita:1187032892904321024>';

            const mensajesMC = [
                `**${message.member.displayName}** se puso a **Comer**. ${emojiPersonalizado}`,
            ];

            const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];

            const imagenesAleatorias = [
                'https://media.tenor.com/1So986xxzI8AAAAd/anime-girl.gif',
                'https://media.tenor.com/FQv6dtaVpu8AAAAC/anime-laid-back-camp.gif',
                'https://media.tenor.com/v2Y1s3etfDUAAAAC/charlotte-anime.gif',
                'https://media.tenor.com/VXmlon1jWxEAAAAC/anime-girl.gif',
                'https://media.tenor.com/QgStD0Kw-zEAAAAC/eat-anime.gif',
                'https://media.tenor.com/uKVf2mPx7swAAAAC/shoujo-shuumatsu-ryokou-girls-last-tour.gif',
                'https://media.tenor.com/DfAXrqya-8UAAAAC/eating-anime.gif',
                'https://media.tenor.com/51l2Vl3A9ZcAAAAC/zombielandsaga-eat.gif',
                'https://media.tenor.com/4XzCV-yPOroAAAAC/anime-eating.gif'
                


            ];

            const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];

            const embedMA = new EmbedBuilder()
                .setTitle('  ')
                .setDescription(mensajeAleatorio)
                .setImage(imagenAleatoria)
                .setColor('Random')
                .setTimestamp();

            message.channel.send({ embeds: [embedMA] });
        }
    }






    if (message.content.startsWith('!cocinar')) {
        // Comprueba si el usuario se mencionó a sí mismo
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {
            const nickname = message.member.displayName;
            const emojiPersonalizado = '<:MioHug:1175162030374789130>';

            const mensajesMC = [
                `**${message.member.displayName}** Se puso a **Cocinar**. ${emojiPersonalizado}`,
            ];

            const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];

            const imagenesAleatorias = [
                'https://media.tenor.com/owsVZUg_wt8AAAAd/date-a-live-iv-kotori.gif',
                'https://media.tenor.com/bNluel7XiRMAAAAC/kafuu-chino-anime.gif',
                'https://media.tenor.com/wip_GhFKUYwAAAAC/tokita-moeko-wakaba-girl.gif',
                'https://media.tenor.com/lJr_T1xokwIAAAAd/anime-senko-san.gif',
                'https://media.tenor.com/gYpZS5deEmkAAAAd/itachi-naruto.gif',
                'https://media.tenor.com/H4p41H5setIAAAAd/bocchi-the-rock-bocchi.gif',
                'https://media.tenor.com/yZCowKJy4UoAAAAd/anime-anime-gif.gif',
                'https://media.tenor.com/8sJbtdo2rUUAAAAC/kon-yui.gif',
                'https://media.tenor.com/noT3CaP6YMIAAAAC/anime-ally-val.gif',
                'https://media.tenor.com/B6FPTNuewiIAAAAC/paella-anime.gif'








            ];

            const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];

            const embedMA = new EmbedBuilder()
                .setTitle('  ')
                .setDescription(mensajeAleatorio)
                .setImage(imagenAleatoria)
                .setColor('Random')
                .setTimestamp();

            message.channel.send({ embeds: [embedMA] });
        }
    }


    if (message.content.startsWith('!gumorni')) {
        // Comprueba si el usuario se mencionó a sí mismo
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {
            const nickname = message.member.displayName;
            const emojiPersonalizado = '<:MioHi:1170750556726378556>';

            const mensajesMC = [
                `**${message.member.displayName}** Le dice Buenos Días a **Todos**. ${emojiPersonalizado}`,
            ];

            const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];

            const imagenesAleatorias = [
                'https://media.tenor.com/Ox-YPgNY6rMAAAAC/anime-morning.gif',
                'https://media.tenor.com/hOXmY2CmM2MAAAAC/good-morning-anime.gif',
                'https://media.tenor.com/h1tbAqlMRZoAAAAC/gif.gif',
                'https://media.tenor.com/pXLDlms6KakAAAAd/anime-good-morning.gif',
                'https://media.tenor.com/YDV4jEpOF1oAAAAC/nadeshiko-yawn.gif',
                'https://media.tenor.com/NJmROna3XVwAAAAC/ohayo-ohayou.gif',
                'https://i.pinimg.com/originals/d5/83/87/d58387362b6cea96c4399130b61684f0.gif',
                'https://media.tenor.com/QTbfXaY9f1sAAAAd/aoi-inuyama-yuru-camp.gif',
                'https://media.tenor.com/9zvbpTzUW3sAAAAC/anime-good-morning.gif'








            ];

            const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];

            const embedMA = new EmbedBuilder()
                .setTitle('  ')
                .setDescription(mensajeAleatorio)
                .setImage(imagenAleatoria)
                .setColor('Random')
                .setTimestamp();

            message.channel.send({ embeds: [embedMA] });
        }
    }


    if (message.content.startsWith('!gudnait')) {
        // Comprueba si el usuario se mencionó a sí mismo
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {
            const nickname = message.member.displayName;
            const emojiPersonalizado = '<:Miohearth:1166441624696520724>';

            const mensajesMC = [
                `**${message.member.displayName}** les dice Buenas noches a **Todos**. ${emojiPersonalizado}`,
            ];

            const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];

            const imagenesAleatorias = [
                'https://media.tenor.com/5jfy9sd-AcEAAAAd/good-night-im-sleepy.gif',
                'https://media.tenor.com/yECo6w-cyNIAAAAC/anime.gif',
                'https://media.tenor.com/SkP5OA_hX38AAAAC/anime-bedtime.gif',
                'https://media.tenor.com/5p400p_2_k4AAAAd/spy-x-family-anya-forger.gif',
                'https://media.tenor.com/0WU4kckmSfsAAAAC/anime-animu.gif',
                'https://media.tenor.com/7tez8J6r_VMAAAAC/maoujou-de-oyasumi-sleep.gif',
                'https://media.tenor.com/ssMAXsyy7jsAAAAC/sleep-anime.gif',
                'https://media.tenor.com/lc_ZdiRuc-4AAAAC/yawn-anime.gif',
                'https://media.tenor.com/vdUn-uU1EWwAAAAC/nadeshiko-kagamihara-yuru-camp.gif',
                'https://media.tenor.com/EO_k8kxEyTgAAAAC/noela-anime.gif'







            ];

            const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];

            const embedMA = new EmbedBuilder()
                .setTitle('  ')
                .setDescription(mensajeAleatorio)
                .setImage(imagenAleatoria)
                .setColor('Random')
                .setTimestamp();

            message.channel.send({ embeds: [embedMA] });
        }
    }
    if (message.content.startsWith('!hola')) {
        // Comprueba si el usuario se mencionó a sí mismo
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {
            const nickname = message.member.displayName;
            const emojiPersonalizado = '<:MioHi:1170750556726378556>';

            const mensajesMC = [
                `**${message.member.displayName}** Le dice hola a **Todos**. ${emojiPersonalizado}`,
            ];

            const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];

            const imagenesAleatorias = [
                'https://cdn.discordapp.com/attachments/1177435462093262868/1181060374821359697/20231203_232918.gif?ex=657faf30&is=656d3a30&hm=919224464568e5ef34773e57d9b2afea5fb88bca8bdcfcf3d1b290509046f6d8&',
               'https://cdn.discordapp.com/attachments/1177435462093262868/1181166462367445062/20231203_234333.gif?ex=658011fd&is=656d9cfd&hm=dcb9dae80dc1410513a03a705860399c2711eea34fde3de68aab48dce95405db&',
                'https://cdn.discordapp.com/attachments/1177435462093262868/1181061551021625344/20231203_233334.gif?ex=657fb048&is=656d3b48&hm=49ea4759a515910aa776f4ad043868fba9ac34864c3638c585fbec9f263556d4&',
                'https://cdn.discordapp.com/attachments/1177435462093262868/1181062299386134528/20231203_233720.gif?ex=657fb0fb&is=656d3bfb&hm=83e73b04a058f74b5c3ea52c95afea562295076b45d758ec7118216b71cdc0eb&'
                








            ];

            const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];

            const embedMA = new EmbedBuilder()
                .setTitle('  ')
                .setDescription(mensajeAleatorio)
                .setImage(imagenAleatoria)
                .setColor('Random')
                .setTimestamp();

            message.channel.send({ embeds: [embedMA] });
        }
    }
    if (message.content.startsWith('!cantar')) {
        // Comprueba si el usuario se mencionó a sí mismo
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {
            const nickname = message.member.displayName;
            const emojiPersonalizado = '<:Miohearth:1166441624696520724>';

            const mensajesMC = [
                `**${message.member.displayName}** Se puso a **Cantar**. ${emojiPersonalizado}`,
            ];

            const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];

            const imagenesAleatorias = [
                'https://media.tenor.com/_hCGxc4PySQAAAAC/sayaka-maizono.gif',
                'https://media.tenor.com/8Uhz38H6_-gAAAAd/chika-fujiwara.gif',
                'https://media.tenor.com/R5IBeiEwHfYAAAAC/aru-singing.gif',
                'https://media.tenor.com/bpyS9wdazBgAAAAC/aki-adagaki.gif',
                'https://media.tenor.com/5vOy6sCOqCQAAAAC/silica-sao.gif',
                'https://media.tenor.com/GDVp6TIDeSkAAAAC/mio-sing.gif',
                'https://media.tenor.com/3LdSwrFZ_-cAAAAd/k-on-akiyama-mio.gif',
                'https://i.pinimg.com/originals/47/9c/8a/479c8a26eaa887287b6a3275a5a0cdbb.gif',
                'https://media.tenor.com/WHCGVn5Ca2oAAAAC/aru-anime.gif',
                'https://media.tenor.com/NWApM0WeRc4AAAAd/excited-anime-girl-singing-anime.gif'







            ];

            const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];

            const embedMA = new EmbedBuilder()
                .setTitle('  ')
                .setDescription(mensajeAleatorio)
                .setImage(imagenAleatoria)
                .setColor('Random')
                .setTimestamp();

            message.channel.send({ embeds: [embedMA] });
        }
    }

    if (message.content.startsWith('!enojado')) {
        // Comprueba si el usuario se mencionó a sí mismo
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {
            const nickname = message.member.displayName;
            const emojiPersonalizado = ' ';

            const mensajesMC = [
                `**${message.member.displayName}** se **emputo**. ${emojiPersonalizado}`,
            ];

            const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];

            const imagenesAleatorias = [
                'https://media.tenor.com/cYRAeQqpaUMAAAAC/anime-angry-slow-loop.gif',
                'https://media.tenor.com/uV22etKl3QEAAAAC/anime-angry.gif',
                'https://media.tenor.com/jLav4j3saDsAAAAd/chika-fujiwara-fujiwara-chika.gif ',
                'https://media.tenor.com/t9M94jpQ-YYAAAAC/anime-girl.gif',
                'https://media.tenor.com/fovBuonF-dIAAAAC/aikatsu-aikatsu-stars.gif',
                'https://media.tenor.com/yCR6JOoxS6wAAAAd/anime-angry.gif',
                'https://gifdb.com/images/high/angry-face-anime-girl-nt2uyysukea312o5.gif',
                'https://gifdb.com/images/high/angry-cute-anime-girl-in-sleepwear-p8bxzg2gsx1t31d4.gif',
                'https://media.tenor.com/cYRAeQqpaUMAAAAC/anime-angry-slow-loop.gif',
                'https://media.tenor.com/lBlcEFqoDnEAAAAC/annoyed-anime.gif',
                'https://media.tenor.com/1xiMFy-EPn4AAAAC/anime-angry.gif'






            ];

            const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];

            const embedMA = new EmbedBuilder()
                .setTitle('  ')
                .setDescription(mensajeAleatorio)
                .setImage(imagenAleatoria)
                .setColor('Random')
                .setTimestamp();

            message.channel.send({ embeds: [embedMA] });
        }
    }

    if (message.content.startsWith('!adios')) {
        // Comprueba si el usuario se mencionó a sí mismo
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {
            const nickname = message.member.displayName;
            const emojiPersonalizado = '';

            const mensajesMC = [
                `**${message.member.displayName}** Le dice adios a **Todos**. ${emojiPersonalizado}`,
            ];

            const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];

            const imagenesAleatorias = [
                'https://media.tenor.com/_iFfcNyLwToAAAAC/hug-anime.gif',
                'https://media.tenor.com/LnBP33iICOkAAAAC/finral-black-clover.gif',
                'https://media.tenor.com/YfKB0nMMKYQAAAAd/aharen-san-aharen-san-anime.gif',
                'https://media.tenor.com/_M7zXM-HEDMAAAAC/yuudachi-anime.gif',
                'https://media.tenor.com/0-r9OR4DYsEAAAAC/remi-bye-bye.gif',
                'https://media.tenor.com/SPkUmWsvnGIAAAAd/sumi-sakurasawa-rent-a-girlfriend.gif'






            ];

            const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];

            const embedMA = new EmbedBuilder()
                .setTitle('  ')
                .setDescription(mensajeAleatorio)
                .setImage(imagenAleatoria)
                .setColor('Random')
                .setTimestamp();

            message.channel.send({ embeds: [embedMA] });
        }
    }
    if (message.content.startsWith('!bailar')) {
        // Comprueba si el usuario se mencionó a sí mismo
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {
            const nickname = message.member.displayName;
            const emojiPersonalizado = '';

            const mensajesMC = [
                `**${message.member.displayName}** Se puso a **Bailar**. ${emojiPersonalizado}`,
            ];

            const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];

            const imagenesAleatorias = [

                'https://media.tenor.com/j27fdi4b0OcAAAAC/my-dress-up-darling-sono-bisque-doll-wa-koi-wo-suru.gif',
                'https://media.tenor.com/BWST3OpBMPsAAAAC/chuunibyou-anime.gif',
                'https://media.tenor.com/fim-ddZD7c8AAAAC/dance-anime.gif',
                'https://media.tenor.com/2vRn7mgoMRMAAAAd/cute-anime-dance.gif',
                'https://media.tenor.com/HApNrYhaX5sAAAAC/dancing-loli.gif',
                'https://cdn.discordapp.com/attachments/1159963139442487346/1160671557778157669/936.gif?ex=6535829f&is=65230d9f&hm=33286d50d446d1ea1cab26a1f2f081c6209dd5f435b646279b3e7e9725fce30e&',
                'https://cdn.discordapp.com/attachments/1159963139442487346/1160671733993451590/anime-dance.gif?ex=653582c9&is=65230dc9&hm=8df2a8e7b53a8d1648af26f41df56209a6f2fb92afde17f89463f61c997f441b&',
                'https://media.tenor.com/Nyjhda63CCcAAAAC/anime-dance-cat-girl.gif',
                'https://gifdb.com/images/high/anime-dancing-eiko-paripi-koumei-wt4i4141lcyp8y2w.webp',
                'https://i.pinimg.com/originals/ce/7a/f8/ce7af890d23444939a9ed0b019dc46c6.gif',
                'https://image.myanimelist.net/ui/Ik_Vp0LpzawyH5e_tQqsNzCYlU5doivB8xs5zR2VGzYGiwd-UyPyM-HG0jtAO90iqv662ARCXbTFWYA8wE3RoJTGoPI-AYM_cSILmcxAcb-nTXCtbKM2_MlNtqgEUvYR',
                'https://media.tenor.com/mlIEYbikQtoAAAAC/sleepy-princess-in-the-demon-castle-smug.gif'






            ];

            const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];

            const embedMA = new EmbedBuilder()
                .setTitle('  ')
                .setDescription(mensajeAleatorio)
                .setImage(imagenAleatoria)
                .setColor('Random')
                .setTimestamp();

            message.channel.send({ embeds: [embedMA] });
        }
    }

    if (message.content.startsWith('!nya')) {
        // Comprueba si el usuario se mencionó a sí mismo
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {
            const nickname = message.member.displayName;
            const emojiPersonalizado = '';

            const mensajesMC = [
                `**${message.member.displayName}** dice **Nya**. ${emojiPersonalizado}`,
            ];

            const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];

            const imagenesAleatorias = [
                'https://media.tenor.com/9r8sppLtPOMAAAAC/angel-beats-cute-girl.gif',
                'https://media.tenor.com/LhGIR486YogAAAAC/neko-anime.gif',
                'https://media.tenor.com/LE0wTcrrVDgAAAAC/koneko-toujou-koneko-tojo.gif',
                'https://media.tenor.com/GhSgj5M8kkUAAAAC/hakase-nya.gif',
                'https://media.tenor.com/KAkfnyE6VO0AAAAC/anime-cute.gif',
                'https://media.tenor.com/GTPNzKpr-gcAAAAC/neko-tatenashi-ready-to-pounce.gif',
                'https://media.tenor.com/BCECtxwZ-DAAAAAC/neko-cat.gif',
                'https://64.media.tumblr.com/ee5fff80d5345e370db0357d4d5f9b40/tumblr_mk8hfaVVkV1r6giyqo1_500.gif',
                'https://cdn.discordapp.com/attachments/1159963139442487346/1160696586486165594/descarga.gif?ex=653599ee&is=652324ee&hm=0618f08f1c5b2941afe76bb10d3b7924506bc615f7812f138d9c9b863c946777&',
                'https://cdn.discordapp.com/attachments/1159963139442487346/1160696586981085265/neko-cat.gif?ex=653599ef&is=652324ef&hm=e0a2da82e7a5ce541978a83472106e6f63865bec5baf95aecaf8893118c9e52c&'






            ];

            const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];

            const embedMA = new EmbedBuilder()
                .setTitle('  ')
                .setDescription(mensajeAleatorio)
                .setImage(imagenAleatoria)
                .setColor('Random')
                .setTimestamp();

            message.channel.send({ embeds: [embedMA] });
        }
    }

    /////////////////////lkfañskjfñajfwje{fklqejflkqa{fl{lk{ñlkñl,{lñk{ñlk{ñkl{ñlk{kl{}}}}}}}}}}/////////////////////
    if (message.content.startsWith('!abrazo')) {
        // Verifica si el comando incluye una mención a otro usuario
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {

            return message.reply({ content: 'Menciona a un usuario para abrazar.' });
        }


        const nickname = mentionedMember.displayName;


        const emojiPersonalizado = '<:Miohearth:1166441624696520724>';


        const mensajesMC = [
            `**${message.member.displayName}** le dio un abrazo a **${nickname}**. ${emojiPersonalizado}`,
        ];

        const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];




        const imagenesAleatorias = [
            'https://media.tenor.com/_iFfcNyLwToAAAAC/hug-anime.gif',
            'https://media.tenor.com/bYJizNjuGosAAAAC/hug-anime.gif',
            'https://cdn.discordapp.com/attachments/1159963139442487346/1160665552931520562/anime-anime-girl.gif?ex=65357d07&is=65230807&hm=9248e28ce22740a53f22e45df36608e3988605f5b9114b99a3c6edb062b529d2&',
            'https://cdn.discordapp.com/attachments/1159963139442487346/1160665553363546282/anime-hug.gif?ex=65357d08&is=65230808&hm=b716d3ee897327f5578ce70120886c7d18c8a4c2b49da8ebdb25b6898dcb98a1&',
            'https://cdn.discordapp.com/attachments/1159963139442487346/1160665553904607352/anime-hug-hug.gif?ex=65357d08&is=65230808&hm=e4d90f88285273bf22bcb86def743d7caaf402eac150730deebd49e4dbe93a1a&',
            'https://cdn.discordapp.com/attachments/1159963139442487346/1160665554357596320/chainsaw-man-hug.gif?ex=65357d08&is=65230808&hm=3d50658cd8b4238435815888b77c91379ded71ba30830818a653b0def870e96c&',
            'https://cdn.discordapp.com/attachments/1159963139442487346/1160665554797993994/cute-kawaii.gif?ex=65357d08&is=65230808&hm=330eab66231f14d08ce4b28afd22b5a9a49c8777514a6d9a133446d01f8c5667&',
            'https://cdn.discordapp.com/attachments/1159963139442487346/1160665555179667596/hug.gif?ex=65357d08&is=65230808&hm=3768b86016bd35ade382b9ebb3b13726ebd992a24f87f5251f7fa4cc6cb114b2&',
            'https://cdn.discordapp.com/attachments/1159963139442487346/1160665555653636106/hug-anime_1.gif?ex=65357d08&is=65230808&hm=d2bfbbd2f1ceac8105730d4cb0ef6288310197333a906eaa0bb35fc4d02a581b&',
            'https://cdn.discordapp.com/attachments/1159963139442487346/1160665556110811186/hug-anime.gif?ex=65357d08&is=65230808&hm=1925376dfdfea649b22cb00293d440c8cc7967866cb0e1aeedfe9c67ec1fe280&',
            'https://cdn.discordapp.com/attachments/1159963139442487346/1160665556479901727/kitsune-upload-tackle.gif?ex=65357d08&is=65230808&hm=475e9e35bc1c7a505b281506ab7721e3ea81046049f8b29fc7e0f516e2b2dec4&',
            'https://cdn.discordapp.com/attachments/1159963139442487346/1160665556878373006/one-piece-yamato.gif?ex=65357d08&is=65230808&hm=5ded5c021cf9c870f65b17e1790dd8c211890337158e2c854306e6963aa2263a&'
        ];


        const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];


        const embedMA = new EmbedBuilder()
            .setTitle('  ')
            .setDescription(mensajeAleatorio)
            .setImage(imagenAleatoria)
            .setColor('Random')
            .setTimestamp();


        message.channel.send({ embeds: [embedMA] });

    }
    if (message.content.startsWith('!caricia')) {
        // Verifica si el comando incluye una mención a otro usuario
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {

            return message.reply({ content: 'Menciona a un usuario para acariciar.' });
        }


        const nickname = mentionedMember.displayName;


        const emojiPersonalizado = '<:Miopatpat:1153428968075186327>';


        const mensajesMC = [
            `**${message.member.displayName}** le dio una caricia a **${nickname}**. ${emojiPersonalizado}`,
        ];

        const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];




        const imagenesAleatorias = [
            'https://media.tenor.com/YBAvI3np3NwAAAAC/hlop.gif',
            'https://media.tenor.com/AslEAmkLHbIAAAAC/hug-head-pat.gif',
            'https://media.tenor.com/b-WObdL85ggAAAAC/caress-hair-anime.gif',
            'https://media.tenor.com/GPeAwtOCjY8AAAAC/anime-pet.gif',
            'https://media.tenor.com/JBC-2GUXwSwAAAAC/headpat-pat.gif',
            'https://media.tenor.com/VQcJx17ofBcAAAAC/pat-mimos.gif',
            'https://media.tenor.com/iEYauu62hqAAAAAC/neko-headpat.gif',
            'https://i.imgur.com/eOJlnwP.gif',
            'https://pa1.narvii.com/6400/0acda86549adf0c63629ff63d5d8997352d354e3_hq.gif',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/86ebbf60-4927-43d9-8f97-ac8b2c07d042/dfc5t8e-a5c9a66c-18d1-4f47-96fd-17f658006011.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2ZWJiZjYwLTQ5MjctNDNkOS04Zjk3LWFjOGIyYzA3ZDA0MlwvZGZjNXQ4ZS1hNWM5YTY2Yy0xOGQxLTRmNDctOTZmZC0xN2Y2NTgwMDYwMTEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dEFX97yonSvnMgf64l2yEPy8OTtmDdfJdHJ7WJT_5Ag'
        ];


        const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];


        const embedMA = new EmbedBuilder()
            .setTitle('  ')
            .setDescription(mensajeAleatorio)
            .setImage(imagenAleatoria)
            .setColor('Random')
            .setTimestamp();


        message.channel.send({ embeds: [embedMA] });

    }
    if (message.content.startsWith('!lamer')) {
        // Verifica si el comando incluye una mención a otro usuario
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {

            return message.reply({ content: 'Menciona a un usuario para lamer.' });
        }


        const nickname = mentionedMember.displayName;


        const emojiPersonalizado = '<:Miohearth:1166441624696520724>';


        const mensajesMC = [
            `**${message.member.displayName}** le dio una lamida a **${nickname}**. ${emojiPersonalizado}`,
        ];

        const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];




        const imagenesAleatorias = [
            'https://media.tenor.com/286PoD-NAiIAAAAC/anime-hajimete-no-gal.gif',
            'https://media.tenor.com/Go7wnhOWjSkAAAAC/anime-lick-face.gif',
            'https://media.tenor.com/Ja6awViaQkUAAAAC/anime-lick.gif',
            'https://media.tenor.com/0LMxPQdFBKAAAAAC/nekopara-kiss.gif',
            'https://media.tenor.com/rK5iY4CspSgAAAAC/lick.gif',
            'https://pa1.aminoapps.com/7150/ec41cd480f0424b8f89eb907f608e51a5374b263r1-960-540_hq.gif',
            'https://gifdb.com/images/high/school-girl-anime-lick-gx7pqsylx3b1d2ie.gif',
            'https://pa1.aminoapps.com/6528/c18e0ab4948e05970b8a2b8bded3316b9a0f3efa_hq.gif',
            'https://2.bp.blogspot.com/-eIfbvrA9mwk/XW351cpjVYI/AAAAAAABnTs/tjrdbZ74dlsheSV1oJwI0emk3s_xw1xMwCKgBGAs/s1600/HenSuki%2B-%2BEpisode%2B6%2B-%2BSayuki%2BLicks%2BKeiki.gif',
            'https://64.media.tumblr.com/360e93cb0fac30eae46e192057bd0994/2e30f5c7b4d8f61b-74/s500x750/119c0f3b3358db207ed7af80f9c66b78d9e78d0b.gif'
        ];


        const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];


        const embedMA = new EmbedBuilder()
            .setTitle('  ')
            .setDescription(mensajeAleatorio)
            .setImage(imagenAleatoria)
            .setColor('Random')
            .setTimestamp();


        message.channel.send({ embeds: [embedMA] });

    }
    if (message.content.startsWith('!golpear')) {
        // Verifica si el comando incluye una mención a otro usuario
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {

            return message.reply({ content: 'Menciona a un usuario para golpear.' });
        }


        const nickname = mentionedMember.displayName;


        const emojiPersonalizado = ' ';


        const mensajesMC = [
            `**${message.member.displayName}** le dio un putazo a **${nickname}**. ${emojiPersonalizado}`,
        ];

        const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];




        const imagenesAleatorias = [
            'https://media.tenor.com/SwMgGqBirvcAAAAC/saki-saki-kanojo-mo-kanojo.gif',
            'https://media.tenor.com/E3OW-MYYum0AAAAC/no-angry.gif',
            'https://media.tenor.com/jiCBkz55jdIAAAAC/anime.gif',
            'https://media.tenor.com/qUMgV2nMuGkAAAAC/angry-sassy.gif',
            'https://media.tenor.com/bbVqU5Z_00gAAAAC/anime-hit.gif',
            'https://media.tenor.com/ra17G61QRQQAAAAC/tapa-slap.gif',
            'https://media.tenor.com/q18Huf0xeLcAAAAC/golpe-anya.gif',
            'https://usagif.com/wp-content/uploads/funny-anime-gif-31.gif',
            'https://i.pinimg.com/originals/e6/66/16/e66616eaabbac84b177ba64f4e04ff27.gif',
            'https://pa1.aminoapps.com/6352/28593c18ecc89d9f3c8dfc28b137113c091a2ae2_hq.gif',
            'https://i.pinimg.com/originals/76/ef/14/76ef149dcade1d160a5629dbafc24b7e.gif',
            'https://pa1.aminoapps.com/6142/1a55fab78eb0cfab75a8a25478cf13ceeea11b13_hq.gif'

        ];


        const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];


        const embedMA = new EmbedBuilder()
            .setTitle('  ')
            .setDescription(mensajeAleatorio)
            .setImage(imagenAleatoria)
            .setColor('Random')
            .setTimestamp();


        message.channel.send({ embeds: [embedMA] });

    }
      
    if (message.content.startsWith('!guiño')) {
        // Verifica si el comando incluye una mención a otro usuario
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {

            return message.reply({ content: 'Menciona a un usuario para guiñarle.' });
        }


        const nickname = mentionedMember.displayName;


        const emojiPersonalizado = ' ';


        const mensajesMC = [
            `**${message.member.displayName}** guiño a **${nickname}**. ${emojiPersonalizado}`,
        ];

        const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];




        const imagenesAleatorias = [
            'https://media.tenor.com/1XNTOsFJQY8AAAAC/wink-blushing.gif',
            'https://media.tenor.com/mFX0gzBmX68AAAAC/marin-wink-marin-cool.gif',
            'https://media.tenor.com/gJdHbEPDlOYAAAAC/amine-girl-wink.gif',
            'https://media.tenor.com/SENM5TMtwIMAAAAC/anime-banished-from-the-heros-party.gif',
            'https://media.tenor.com/83KICXAA2DgAAAAC/himouto-umaru.gif',
            'https://media.tenor.com/WYtyZP1TAlAAAAAC/wink-cute.gif'

        ];


        const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];


        const embedMA = new EmbedBuilder()
            .setTitle('  ')
            .setDescription(mensajeAleatorio)
            .setImage(imagenAleatoria)
            .setColor('Random')
            .setTimestamp();


        message.channel.send({ embeds: [embedMA] });

    }
     

    if (message.content.startsWith('!soplar')) {
        // Verifica si el comando incluye una mención a otro usuario
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {

            return message.reply({ content: 'Menciona a un usuario para soplarle.' });
        }


        const nickname = mentionedMember.displayName;


        const emojiPersonalizado = '<:MioOmegalul:1153706598359896074>';


        const mensajesMC = [
            `**${message.member.displayName}** le soplo a **${nickname}**. ${emojiPersonalizado}`,
        ];

        const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];




        const imagenesAleatorias = [
            'https://media.tenor.com/FN4yEyW6Ft4AAAAC/kaichou-wa-maid-sama-love-blow.gif',

        ];


        const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];


        const embedMA = new EmbedBuilder()
            .setTitle('  ')
            .setDescription(mensajeAleatorio)
            .setImage(imagenAleatoria)
            .setColor('Random')
            .setTimestamp();


        message.channel.send({ embeds: [embedMA] });

    }
    if (message.content.startsWith('!menear')) {
        // Verifica si el comando incluye una mención a otro usuario
        const mentionedMember = message.mentions.members.first();

        if (!mentionedMember) {

            return message.reply({ content: 'Menciona a un usuario para menarle la cola.' });
        }


        const nickname = mentionedMember.displayName;


        const emojiPersonalizado = ' ';


        const mensajesMC = [
            `**${message.member.displayName}** le menea la cola a **${nickname}**. ${emojiPersonalizado}`,
        ];

        const mensajeAleatorio = mensajesMC[Math.floor(Math.random() * mensajesMC.length)];




        const imagenesAleatorias = [
            'https://media.tenor.com/aqrVj-YBUucAAAAC/shino-wag.gif',
            'https://media.tenor.com/kpsu6FcmZbYAAAAC/noella-drug-store.gif',
            'https://media.tenor.com/NVZZyfIogigAAAAC/holo-wisewolf.gif',
            'https://media.tenor.com/SNLQJ7-fupUAAAAC/goals-pillow.gif',
            'https://64.media.tumblr.com/5b3e9520e429a2935cbf995f79a510a5/tumblr_mwot9vpsQ51sljg1oo1_500.gif',
            'https://media.tenor.com/G2geLnRU5aAAAAAC/anime-cat-tail-wagging.gif'

        ];


        const imagenAleatoria = imagenesAleatorias[Math.floor(Math.random() * imagenesAleatorias.length)];


        const embedMA = new EmbedBuilder()
            .setTitle('  ')
            .setDescription(mensajeAleatorio)
            .setImage(imagenAleatoria)
            .setColor('Random')
            .setTimestamp();


        message.channel.send({ embeds: [embedMA] });

    }





    

})
client.config = config;
client.player = new DisTube(client, {
  leaveOnStop: config.opt.voiceConfig.leaveOnStop,
  leaveOnFinish: config.opt.voiceConfig.leaveOnFinish,
  leaveOnEmpty: config.opt.voiceConfig.leaveOnEmpty.status,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  plugins: [
    new SpotifyPlugin(),
    new SoundCloudPlugin(),
    new YtDlpPlugin(),
    new DeezerPlugin(),
  ],
});


const player = client.player;
client.language = config.language || "en";
let lang = require(`./languages/${config.language || "en"}.js`);

fs.readdir("./events", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`${lang.loadclientevent}: ${eventName}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

fs.readdir("./events/player", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const player_events = require(`./events/player/${file}`);
    let playerName = file.split(".")[0];
    console.log(`${lang.loadevent}: ${playerName}`);
    player.on(playerName, player_events.bind(null, client));
    delete require.cache[require.resolve(`./events/player/${file}`)];
  });
});

client.commands = [];
fs.readdir(config.commandsDir, (err, files) => {
  if (err) throw err;
  files.forEach(async (f) => {
    try {
      if (f.endsWith(".js")) {
        let props = require(`${config.commandsDir}/${f}`);
        client.commands.push({
          name: props.name,
          description: props.description,
          options: props.options,
        });
        console.log(`${lang.loadcmd}: ${props.name}`);
      }
    } catch (err) {
      console.log(err);
    }
  });
});

if (config.TOKEN || process.env.TOKEN) {
  client.login(config.TOKEN || process.env.TOKEN).catch((e) => {
    console.log(lang.error1);
  });
} else {
  setTimeout(() => {
    console.log(lang.error2);
  }, 2000);
}


if(config.mongodbURL || process.env.MONGO){
  const mongoose = require("mongoose")
  mongoose.connect(config.mongodbURL || process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }).then(async () => {
    console.log(`Conectado a MongoDB`)
  }).catch((err) => {
    console.log("\nMongoDB Error: " + err + "\n\n" + lang.error4)
    })
  } else {
  console.log(lang.error4)
  }


const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response?.sendStatus(200);
});
app.listen(process?.env?.PORT);
