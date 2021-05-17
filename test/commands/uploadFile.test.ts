import {expect, test} from '@oclif/test'

describe('uploadFile', () => {
  test
  .stdout()
  .command(['uploadFile'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['uploadFile', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
