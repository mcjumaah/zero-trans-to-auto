import type { App } from 'vue'
import { ZeroTransToAuto } from './components'

export default {
  install: (app: App) => {
    app.component('ZeroTransToAuto', ZeroTransToAuto)
  }
}

export { ZeroTransToAuto }
