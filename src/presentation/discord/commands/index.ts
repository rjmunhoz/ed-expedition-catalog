import create from './create'

const commands = {
  create
}

export function findCommand (text: string) {
  for (const [ , command ] of Object.entries(commands)) {
    if (command.match(text)) return command
  }

  return null
}

export default { ...commands, findCommand }
