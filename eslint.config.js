import { antfu } from '@antfu/eslint-config'

export default antfu({
  react: true,
  typescript: true,
  formatters: true,
  imports: true,
  stylistic: true,
  ignores: ['./presentation/slides.md'],
})
