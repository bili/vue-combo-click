import Vue from 'vue'
import VueComboClick from '../dist/vue-combo-click.min.js'

Vue.use(VueComboClick)

let app = new Vue({
    el: '#app',
    data: {
        count: 0,
        options: {
            count: 10,
            delay: 500,
            change(count) {
                app.count = count
                if (count === 0) {
                    app.$el.querySelector('.box').classList.remove('finish')
                }
            },
            finish(count) {
                app.$el.querySelector('.box').classList.add('finish')
            },
        }
    }
})