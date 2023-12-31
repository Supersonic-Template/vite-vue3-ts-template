/**
 * plugins/permission.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins

import 'uno.css'
import 'virtual:uno.css'

import router from '@/router'
import pinia from '@/store'
import head from './head'

// Types
import type { App } from 'vue'

export function registerPlugins(app: App) {
    app
        .use(router)
        .use(pinia)
        .use(head)

}
