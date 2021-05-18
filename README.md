wovencli
========

&#39;Command Line CLI for Interacting with Woven File Server&#39;

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Issues](#issues)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g wovencli
$ wovencli COMMAND
running command...
$ wovencli (-v|--version|version)
wovencli/1.0.0 darwin-arm64 node-v16.1.0
$ wovencli --help [COMMAND]
USAGE
  $ wovencli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`wovencli deleteFile [userId], [DocumentType]`](#wovencli-deletefile-file)
* [`wovencli downloadFile [userId], [DocumentType]`](#wovencli-downloadfile-file)
* [`wovencli help [COMMAND]`](#wovencli-help-command)
* [`wovencli listFiles`](#wovencli-listfiles-file)
* [`wovencli uploadFile [filePath], [userId], [documentType]` ](#wovencli-uploadfile-file)

## `wovencli deleteFile [userId] [DocumentType]`

Deletes a File on the server from a userId and Document Key
```
USAGE
  $ wovencli deleteFile [userId] [DocumentType]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/deleteFile.ts](https://github.com/cdalong/wovencli/blob/v1.0.0/src/commands/deleteFile.ts)_

## `wovencli downloadFile [userId] [DocumentType]`

**TODO download a file off the server
```
USAGE
  $ wovencli downloadFile [userId] [DocumentType]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/downloadFile.ts](https://github.com/cdalong/wovencli/blob/v1.0.0/src/commands/downloadFile.ts)_

## `wovencli hello [FILE]`

describe the command here

```
USAGE
  $ wovencli hello

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ wovencli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/cdalong/wovencli/blob/v1.0.0/src/commands/hello.ts)_

## `wovencli help [COMMAND]`

display help for wovencli

```
USAGE
  $ wovencli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `wovencli listFiles`

describe the command here

```
USAGE
  $ wovencli listFiles

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/listFiles.ts](https://github.com/cdalong/wovencli/blob/v1.0.0/src/commands/listFiles.ts)_

## `wovencli uploadFile [filePath], [userId], [documentType]`

describe the command here

```
USAGE
  $ wovencli uploadFile [filePath] [userId] [documentType]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/uploadFile.ts](https://github.com/cdalong/wovencli/blob/v1.0.0/src/commands/uploadFile.ts)_
<!-- commandsstop -->

# Issues

Currently Credentials are being stored in plaintext in the req, somehow would like to implement some user/pass handling.
Payloads with Upload File, Delete File somehow I can't get to work through a TypeScript payload, even modelling the requersts through Postman first. The backend will accept the request (which is a different result from the web frontend, so perhaps it would be worthwhile to switch from axios to generic http in the frontend?)

So at least those those two commands don't complete, but instead will send a 400 response. listFiles seems to work but I want it to terminate instead of it just displaying the JSON and hanging (need to cntl - c to quit the view)



