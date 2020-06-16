import Discord from 'discord.js'

export async function run (msg: Discord.Message, _client: Discord.Client) {
  await msg.reply('Hi there :)')
}

export default {
  name: 'create',
  match: (text: string) => /^!create/.test(text),
  run
}
