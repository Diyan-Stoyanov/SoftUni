function e(type, classList, text, children) {
    let el = document.createElement(type);

    if (classList) {
        for (let classL in classList) {
            el[classL] = classList[classL]
        }

    }

    if (text) {
        el.textContent = text;
        el.value = text
    }

    if (children) {
        children.forEach((c) => el.appendChild(c));
    }

    return el;
}
