import {Command, flags} from '@oclif/command'
import * as http from 'http'
import * as querystring from 'querystring'
import * as FormData from 'form-data'

export default class DeleteFile extends Command {
  static description = 'describe the command here'

  static args = [{name: 'userId'}, {name: 'docType'}]

  async run() {
    const form = new FormData()

    const {args} = this.parse(DeleteFile)
    if (args.userId && args.docType) {
      form.append('userId', `${args.userId}`)
      this.log(`${args.userId}`)
      this.log(`${args.docType}`)
      form.append('docType', `${args.docType}`)
      const options = {
        hostname: 'localhost',
        port: 8083,
        path: '/deleteFile',
        method: 'DELETE',
        auth: 'wovendb:cC5sNH1nDc^H',
        query: {
          userId: `${args.userId}`,
          docType: `${args.docType}`,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }

      const req = http.request(options, res => {
        this.log(`STATUS: ${res.statusCode}`)
        this.log(`HEADERS: ${JSON.stringify(res.headers)}`)
        res.setEncoding('utf8')
        res.on('data', chunk => {
          this.log(`BODY: ${chunk}`)
        })
        res.on('end', () => {
          this.log('No more data in response.')
        })
      })
      req.on('error', e => {
        this.error(`problem with request: ${e.message}`)
      })

      // Write data to request body
      req.end()
    }
  }
}
