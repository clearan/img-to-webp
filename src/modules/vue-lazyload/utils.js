export function getScrollParent(el) {
    let _parent =  el.parentNode;
    while(_parent) {
        const styleOverflow = getComputedStyle(_parent)['overflow'];
        if (/(scroll)|(auto)/.test(styleOverflow)) {
            return _parent;
        }
        _parent = _parent.parentNode;
    }
}
