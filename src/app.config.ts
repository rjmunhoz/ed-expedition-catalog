import env from 'sugar-env'

export type AppConfig = {
  discord: {
    token: string
  }
}

export const config: AppConfig = {
  discord: {
    token: env.get('DISCORD_TOKEN', '')
  }
}
