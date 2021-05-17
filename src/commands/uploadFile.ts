import {Command, flags} from '@oclif/command'

export default class UploadFile extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}, {name: 'userId'}, {name: 'docType'}]

  static options = {
    hostname: 'localhost',
    port: 8083,
    path: '/uploadFile',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  async run() {
    const {args} = this.parse(UploadFile)

    this.log(`hello ${name} from /Users/fisk/Documents/code/cli/wovencli/src/commands/uploadFile.ts`)
    if (args.file && args.userId && args.docType) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
