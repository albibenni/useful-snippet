function addGlobalEventListener<K>(type: keyof DocumentEventMap, selector: string, callback: (ev: Event) => K) {
    document.addEventListener(type, e => {
        if (e.target instanceof Element) {
            if (e.target.matches(selector)) callback(e);
        }
    })
}
