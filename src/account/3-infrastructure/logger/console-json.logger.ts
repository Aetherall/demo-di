export class ConsoleJSONLogger {

  info(message: string) {
    const payload = JSON.stringify({ level: 'info', message })
    console.log(payload)
  }

  warn(message: string) {
    const payload = JSON.stringify({ level: 'warn', message })
    console.log(payload)
  }

}