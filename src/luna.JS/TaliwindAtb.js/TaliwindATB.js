function TaliwindATB() {
    let elements = document.querySelectorAll("*");

    for (let i = 0; i < elements.length; i++) {
        let attributes = elements[i].getAttributeNames();
        elements[i].className = "";
        for (let j = 0; j < attributes.length; j++) {
            let attribute = attributes[j];
            if (attribute !== "class" && attribute !== "id" && attribute !== "style" && attribute !== null) {
                elements[i].classList.add(attribute);
            }
        }
    }
}

function Cdf() {
    TaliwindATB();
}

window.onload = function () {
    const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.target.nodeName === 'BODY') {
                Cdf();
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
