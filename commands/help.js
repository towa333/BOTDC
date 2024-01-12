const { ApplicationCommandOptionType } = require('discord.js')
const db = require("../mongoDB");
module.exports = {
	name: "ayuda",
	description: "Te ayuda a obtener información sobre bot y comandos.",
	permissions: "0x0000000000000800",
	options: [],
	showHelp: false,
	run: async (client, interaction) => {
		try {
			const youtubeLink = 'https://discord.gg/GYpcwUcs6x';
			const InstagramLink = 'https://www.instagram.com/rtxxgg/';
			const { EmbedBuilder } = require('discord.js')
			const embed = new EmbedBuilder()
				.setColor('#ffffff')
				.setAuthor({
					name: "MioBOT",
					iconURL:
						"https://cdn.discordapp.com/attachments/1159963139442487346/1193323335833104454/miotequiero.png?ex=65ac4bf6&is=6599d6f6&hm=01f3b5417e646ae6d861c0b6334f9a459c614290d75d03c65c14941b20bd401b&",
					url: "https://discord.gg/ngJtg6Td",
				})
				.setDescription(
					`__**Características :**__\n\n> ** Bot update:** 2.0.1 👑\n> **Prefix:** !
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
			interaction.reply({ embeds: [embed] }).catch(e => { });

		} catch (e) {
			console.error(e);
		}
	},
};

