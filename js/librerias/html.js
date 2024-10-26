export const p = function (parent, attributtes) {
    return createElement('p', parent, attributtes)
}

export const div = function (parent, attributtes) {
    return createElement('div', parent, attributtes)
}

export const createElement = function (type, parent, attributtes) {
    let element = document.createElement(type)
    parent.appendChild(element);

    if (attributtes != null) {
        for (const attributte in attributtes) {
            element[attributte] = attributtes[attributte];
        }
    }
    return element;
}