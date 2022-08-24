let listItems = document.getElementById('hlist_items')
let listItemsCounter = document.getElementById('hlist_counter')
let listItemsCounterValue = 0

function addToList() {
    let listItemValue = document.getElementById('hinput_item').value //why can I not declare it globally?
    if (listItemValue != "") {
        listItemsCounterValue++
        listItemsCounter.innerText = listItemsCounterValue
        // create the list element
        let listItem = document.createElement('li')
        let btnRemove = document.createElement('button')

        btnRemove.id = 'btnRemove'
        btnRemove.innerText = 'x'
        btnRemove.addEventListener('click', removeFromList)

        listItem.innerText = listItemValue
        listItem.appendChild(btnRemove)
        listItems.appendChild(listItem)

        // to empty the text box
        document.getElementById('hinput_item').value = ""
    }
    else {
        alert("Enter something to be added to the list!")
    }
}

function removeFromList(e) {
    listItemsCounterValue--
    listItemsCounter.innerText = listItemsCounterValue
    // targeting the button's immediate parent elemet and removing it
    e.target.parentNode.remove()
}