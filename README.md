# vue-combo-click
A simple vue directive that count the combo-clicking times.

# Use
``` html
<div v-combo-click="options"></div>
```

``` javascript
import Vue from 'vue'
import VueComboClick from 'vue-combo-click'

Vue.use(VueComboClick)

export default {
    data() {
        return {
            count: 0,
            options: {
                count: 10,
                delay: 200,
                reset: false,
                change(count) {
                    console.log(count)
                },
                finish(count) {
                    console.log(`combo`)
                }
            }
        }
    }
}
```