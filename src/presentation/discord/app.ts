import { AppConfig } from '../../app.config'
import { Client as DiscordClient } from 'discord.js'
import commands from './commands'

export async function start (config: AppConfig) {
  const client = new DiscordClient()

  client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`)
  })

  client.on('message', msg => {
    const command = commands.findCommand(msg.content)

    if (!command) return

    command.run(msg, client)
      .catch(async err => msg.reply(`Error running command: ${err.message}`))
      .catch(console.error)
  })

  return client.login(config.discord.token)
}

export default { start }
