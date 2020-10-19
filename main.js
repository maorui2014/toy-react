function createElement(tagName, attributes, ...children) {
    let e = document.createElement(tagName)

    if (attributes !== null && typeof attributes == 'object') {
        Object.keys(attributes)
            .forEach(attr => e.setAttribute(attr, attributes[attr]))
    }

    children.forEach(c => {
        if (typeof c == 'string') {
            c = document.createTextNode(c)
        }

        e.appendChild(c)
    })

    return e
}

document.body.append(<div id="h" class="c1">
    <div>hello world</div>
    <div></div>
</div>
)