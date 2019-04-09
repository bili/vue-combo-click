export default {
    install(Vue, options) {
        Vue.directive('combo-click', {
            bind(el, binding) {
                const delay = parseInt(binding.value.delay)
                const countAmount = parseInt(binding.value.count)
                const reset = binding.value.reset
                let changeFn = binding.value.change
                let finishFn = binding.value.finish
                let now, lastTime, timeout, count = 0

                el.addEventListener('click', () => {
                    if (typeof reset == 'undefined' || reset == true) {
                        if (timeout) clearTimeout(timeout)
                        timeout = setTimeout(() => {
                            count = 0
                            now = lastTime = null
                            if (changeFn) changeFn(0)
                        }, delay)
                    }
                    if (countAmount === 1) {
                        if (changeFn) changeFn(1)
                        if (finishFn) finishFn(1)
                    } else {
                        now = new Date().getTime()
                        if (count === 0) {
                            count++
                            if (changeFn) changeFn(count)
                            lastTime = now
                        } else {
                            if (now - lastTime <= delay) {
                                count++
                                if (changeFn) changeFn(count)
                                if (count >= countAmount) {
                                    if (finishFn) finishFn(countAmount)
                                    count = 0
                                    now = lastTime = null
                                } else lastTime = now
                            } else {
                                count = 1
                                if (changeFn) changeFn(count)
                                lastTime = now
                            }
                        }
                    }
                }, false)
            },
            unbind(el) {
                el.removeEventListen('click')
            }
        })
    }
}