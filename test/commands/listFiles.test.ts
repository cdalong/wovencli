import {expect, test} from '@oclif/test'

describe('listFiles', () => {
  test
  .stdout()
  .command(['listFiles'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['listFiles', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
