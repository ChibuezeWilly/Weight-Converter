let form = document.querySelector('form');
form.addEventListener('input', e => {
    let target = e.target.id;

    let pounds  = document.getElementById("pdOutput").value || 0 
    let gram = document.getElementById("gramsOutput").value || 0
    let Kilogram = document.getElementById("Kilograms").value || 0
    let ounce = document.getElementById("Ounces").value || 0

    if (target === 'pdOutput') {
        document.getElementById("gramsOutput").value = pounds / 0.0022046
        document.getElementById("Kilograms").value = pounds / 2.2046
        document.getElementById("Ounces").value = pounds * 16
    } else if (target === 'gramsOutput') {
        document.getElementById("pdOutput").value = gram * 0.00220462
        document.getElementById("Kilograms").value = gram * 0.001
        document.getElementById("Ounces").value = gram * 0.035274
    } else if (target === 'Kilograms') {
        document.getElementById("pdOutput").value = Kilogram * 2.20462
        document.getElementById("gramsOutput").value = Kilogram * 1000
        document.getElementById("Ounces").value = Kilogram* 35.274
    } else if (target === 'Ounces') {
        document.getElementById("gramsOutput").value = ounce * 28.3495
        document.getElementById("pdOutput").value = ounce * 0.0625
        document.getElementById("Kilograms").value = ounce * 0.0283495
    }
})
const button = document.getElementById("clearButton")
button.addEventListener('click', () => {
   document.getElementById("pdOutput").value = ''
   document.getElementById("gramsOutput").value = ''
   document.getElementById("Kilograms").value = ''
   document.getElementById("Ounces").value = ''
})
