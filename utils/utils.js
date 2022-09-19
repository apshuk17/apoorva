export const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const addInlineStyles = (element, style) => {
    for (const property in style) {
        element.style[property] = style[property];
    }
}