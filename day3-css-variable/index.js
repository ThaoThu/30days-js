function handleUpdate() {

  let prefix = this.dataset.unit || ''
  console.log(this.dataset.unit, this.name, this.value + prefix);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + prefix)

}
let inputs = document.querySelectorAll('input')

inputs.forEach(item => {
  item.addEventListener('change', handleUpdate)
  item.addEventListener('mouseover', handleUpdate)

});

