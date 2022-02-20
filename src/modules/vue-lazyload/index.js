import lazyload from "./lazyload";

const VueLazyload = {
    install(Vue, options) {
        console.log('installed')
        const LazyClass = lazyload(Vue);
        const lazy = new LazyClass(options);
        Vue.directive('lazy', {
            bind: lazy.bindLazy.bind(lazy),
        })
    }
}

export default VueLazyload;
