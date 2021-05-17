import {Command, flags} from '@oclif/command'
import * as http from 'http'

export default class ListFiles extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = []

  async run() {
    http.get({host: 'localhost',
      port: 8083,
      path: '/listFiles',
      auth: 'wovendb:cC5sNH1nDc^H',
    }, res => {
      const {statusCode} = res
      const contentType = res.headers['content-type']

      let error
      // Any 2xx status code signals a successful response but
      // here we're only checking for 200.
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          `Status Code: ${statusCode}`)
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      } else if (!/^application\/json/.test(<string>contentType)) {
        error = new Error('Invalid content-type.\n' +
          `Expected application/json but received ${contentType}`)
      }
      if (error) {
        this.error(error.message)
        // Consume response data to free up memory
        res.resume()
        return
      }

      res.setEncoding('utf8')
      let rawData = ''
      res.on('data', chunk => {
        rawData += chunk
      })
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData)
          this.log(parsedData)
          // eslint-disable-next-line unicorn/catch-error-name
        } catch (e) {
          this.error(e.message)
        }
      })
    }).on('error', e => {
      this.error(`Got error: ${e.message}`)
      this.error('Sorry, try again')
    })

    // Create a local server to receive data from
    const server = http.createServer((req, res) => {
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify({
        data: 'Hello World!',
      }))
    })

    server.listen(8000)
  }
}
