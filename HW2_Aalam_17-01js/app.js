const block = document.querySelector(".block")
console.log(block)

const button = document.getElementById("button")
const input = document.getElementById("input")

button.onclick = () => {
    const div = document.createElement("div")
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "delete"
    const changeButton = document.createElement("button")
    changeButton.innerText = "change"
    div.setAttribute("class", "block")
    div.innerText = input.value

    deleteButton.onclick = () => {
        div.remove()
    }
    changeButton.onclick = () => {
        const change = prompt("Change your text")
        div.innerText = change
        div.append(deleteButton, changeButton)
        document.body.append(div)
    }
    div.append(deleteButton, changeButton)
    document.body.append(div)
}
