import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'QGizmo',

  setup () {
    return () => h(QBadge, {
      class: 'QGizmo',
      label: 'QGizmo'
    })
  }
}
