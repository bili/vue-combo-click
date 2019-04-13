# vue-combo-click
A simple vue directive that count the combo-clicking times.

一个可以用于监听鼠标连击事件的vue指令。

<https://github.com/bili/vue-combo-click>

# Demo
你可以查看[demo](https://codesandbox.io/embed/r743jn0ojn)，控制鼠标单击速度，观察console中数字变化。

# Install
``` bash
npm install vue-combo-click
```

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
                reset: true,
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

# Options
The defaults are: 
```
{
    count: 10,
    delay: 200,
    reset: true,
    change(count) {
        console.log(count)
    },
    finish(count) {
        console.log(`combo`)
    }
}
```
* count
  连击次数
* delay
  连击间隔，也就是多久才算是连击，单位`ms`
* reset
  是否重置
  当连击失败或是结束时，count是否自动归 0
* change
  监听连击事件中的每一次点击，count为当前计数
* finish
  触发combo的最后一次点击，count也即设定的连击次数