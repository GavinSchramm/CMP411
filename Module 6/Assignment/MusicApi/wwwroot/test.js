const uri = 'api/MusicItems';

async function addItem() {
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

    var response = await fetch(uri);

    var jsonData = await response.json();

    var test = jsonData[0]["songName"];

    document.getElementById("test").innerHTML = test;
}