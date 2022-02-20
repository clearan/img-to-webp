import {getScrollParent} from "./utils";

export default function (Vue) {
    return class Lazy {
        constructor(options) {
            this.options = options;
        }
        bindLazy(el, bindings, vnode) {
            Vue.nextTick(() => {
                const scrollParent = getScrollParent(el);
            })
        }
    }
}
