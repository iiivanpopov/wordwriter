import { antfu } from '@antfu/eslint-config'

export default antfu({
  react: true,
  typescript: true,
  type: 'app',
  formatters: true,
  imports: true,
  stylistic: true,
})
