document.addEventListener('DOMContentLoaded', function() {

  renderName()

  document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault()

    let input = document.getElementById('name')
    setName(input.value)
    renderName()
  })
})


function setName(name) {
  localStorage.setItem('name', name)
}

function renderName() {
  let showName = document.querySelector('span')
  let name = localStorage.getItem('name')
  showName.textContent = name || "User"
}
