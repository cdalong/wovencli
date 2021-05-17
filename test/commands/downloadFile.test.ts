import {expect, test} from '@oclif/test'

describe('downloadFile', () => {
  test
  .stdout()
  .command(['downloadFile'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['downloadFile', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
