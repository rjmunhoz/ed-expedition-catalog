import { config } from './app.config'
import discord from './presentation/discord/app'

discord.start(config)
  .catch(err => console.error(`Error starting discord layer: ${err.message}`))
