export class MiniReact {
    static createElement(type, props, ...children) {
        const element = Object.create(null);
        element.type = type;
        element.props = Object.assign(Object.assign({}, props), { children: children.length > 1 ? [...children] : children[0] });
        return element;
    }
}
export class MiniReactDOM {
    static render(root, element) {
        const recurse = (element) => {
            const { type, props } = element;
            const node = document.createElement(type);
            // only single child element && children is a text
            if (!Array.isArray(props.children) &&
                typeof props.children === "string") {
                node.append(props.children);
                return node;
            }
            // only single child element && children is object
            if (!Array.isArray(props.children) &&
                typeof props.children === "object") {
                return node.appendChild(recurse(props.children));
            }
            // multiple child elements
            props.children.forEach((child) => {
                if (typeof child === "string") {
                    node.append(child);
                }
                else {
                    node.appendChild(recurse(child));
                }
            });
            return node;
        };
        const node = recurse(element);
        root.appendChild(node);
    }
}
