function addGlobalEventListener<K, E extends HTMLElement>(type: keyof DocumentEventMap, selector: string, callback: (ev: Event) => K, parentElement: Document | E = document) {
    parentElement.addEventListener(type, (e: Event) => {
        if (e.target instanceof Element) {
            if (e.target.matches(selector)) callback(e);
        }
    })
}
