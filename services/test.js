/**
 * Write a function to retrieve a blob of json
 * Make Ajax request! Use 'fetch' api function.
 * http://rallycoding.herokuapp.com/api/music_albums
 */

 /**
function getAlbums() {
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
        .then(res => res.json())
        .then(json => console.log(json));
}
*/

// Async / Await 
const getAlbums = async () => {
    const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()
    console.log(json);
}

getAlbums()