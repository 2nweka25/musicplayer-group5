import firebase from "firebase/app";
import "firebase/storage";
import Songs from "./song";


const downloadSongUrl =async()=> {
  
  const storageRef = firebase.storage().ref();

  // [START storage_download_full_example]
  // Create a reference to the file we want to download
  var starsRef = storageRef.child('songs/' + Songs.getAudioUrl);

  // Get the download URL
  starsRef.getDownloadURL()
  .then((url) => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  })
  .catch((error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });
  // [END storage_download_full_ex
}

const downloadSong = {downloadSongUrl};

export default downloadSong;