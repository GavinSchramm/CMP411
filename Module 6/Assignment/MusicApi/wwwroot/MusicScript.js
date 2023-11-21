const uri = 'api/MusicItems';
let todos = [];

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

function addItem() {
    const song = document.getElementById('song');
    const artist = document.getElementById('artist');
    const rating = document.getElementById('rating');

    const item = {
        songName: song.value.trim(),
        artistName: artist.value.trim(),
        rating: rating.value.trim()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            document.getElementById("song").value = '';
            document.getElementById("artist").value = '';
            document.getElementById("rating").value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}

function deleteItem(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to delete item.', error));
}

function displayEditForm(id) {
    const item = todos.find(item => item.id === id);

    document.getElementById('edit-songName').value = item.songName;
    document.getElementById('edit-artistName').value = item.artistName;
    document.getElementById('edit-rating').value = item.rating;
    document.getElementById('edit-id').value = item.id;
    document.getElementById('editForm').style.display = 'block';
}

function updateItem() {
    const song = document.getElementById('edit-songName');
    const artist = document.getElementById('edit-artistName');
    const rating = document.getElementById('edit-rating');
    const itemId = document.getElementById('edit-id').value;
    const item = {
        id: parseInt(itemId, 10),
        songName: song.value.trim(),
        artistName: artist.value.trim(),
        rating: rating.value.trim()
    };
    
    fetch(`${uri}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to update item.', error));

    closeInput();

    return false;
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'object' : 'objects';

    document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function _displayItems(data) {
    const tBody = document.getElementById('songList');
    tBody.innerHTML = '';

    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {        

        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let textNode1 = document.createTextNode(item.songName);
        td1.appendChild(textNode1);

        let td2 = tr.insertCell(1);
        let textNode2 = document.createTextNode(item.artistName);
        td2.appendChild(textNode2);

        let td3 = tr.insertCell(2);
        let textNode3 = document.createTextNode(item.rating);
        td3.appendChild(textNode3);

        let td4 = tr.insertCell(3);
        td4.appendChild(editButton);

        let td5 = tr.insertCell(4);
        td5.append(deleteButton);
    });

    todos = data;
}