window.onload = function() {
  let elements = document.querySelectorAll("*");

  for (let i = 0; i < elements.length; i++) {
    let attributes = elements[i].getAttributeNames();
    for (let j = 0; j < attributes.length; j++) {
      let attribute = attributes[j];
      elements[i].classList.add(attribute);
    }
  }
}
  