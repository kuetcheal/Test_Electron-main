import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})

export default vuetify