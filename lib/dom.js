export function getFormFields(formFields) {
    let values = [];
    for (const id of formFields) {
        values[id] = document.getElementById(id).value;
    }
    return values;
}

export function onClick (selector, eventHandler)
{
    let elements = document.querySelectorAll(selector);
    for (const element of elements) {
        element.addEventListener("click", eventHandler)
    }
}
