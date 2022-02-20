export default {
    install(Vue) {
        Vue.myFun = () => {
            console.log('我是电竞刘德华')
        }
        Vue.directive('webp', {
            bind(el, bindings) {
                console.log(el, bindings)
                const src = el.getAttribute('src');
                const res = src.replace(/jpg/, 'webp')
                el.setAttribute('src', res)
            }
        })
    }
}
