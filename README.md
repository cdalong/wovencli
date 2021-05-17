wovencli
========

&#39;Command Line CLI for Interacting with Woven File Server&#39;

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/wovencli.svg)](https://npmjs.org/package/wovencli)
[![Downloads/week](https://img.shields.io/npm/dw/wovencli.svg)](https://npmjs.org/package/wovencli)
[![License](https://img.shields.io/npm/l/wovencli.svg)](https://github.com/cdalong/wovencli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
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
* [`wovencli deleteFile [FILE]`](#wovencli-deletefile-file)
* [`wovencli downloadFile [FILE]`](#wovencli-downloadfile-file)
* [`wovencli hello [FILE]`](#wovencli-hello-file)
* [`wovencli help [COMMAND]`](#wovencli-help-command)
* [`wovencli listFiles [FILE]`](#wovencli-listfiles-file)
* [`wovencli uploadFile [FILE]`](#wovencli-uploadfile-file)

## `wovencli deleteFile [FILE]`

describe the command here

```
USAGE
  $ wovencli deleteFile [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/deleteFile.ts](https://github.com/cdalong/wovencli/blob/v1.0.0/src/commands/deleteFile.ts)_

## `wovencli downloadFile [FILE]`

describe the command here

```
USAGE
  $ wovencli downloadFile [FILE]

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
  $ wovencli hello [FILE]

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

## `wovencli listFiles [FILE]`

describe the command here

```
USAGE
  $ wovencli listFiles [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/listFiles.ts](https://github.com/cdalong/wovencli/blob/v1.0.0/src/commands/listFiles.ts)_

## `wovencli uploadFile [FILE]`

describe the command here

```
USAGE
  $ wovencli uploadFile [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/uploadFile.ts](https://github.com/cdalong/wovencli/blob/v1.0.0/src/commands/uploadFile.ts)_
<!-- commandsstop -->
