
import firebase from "firebase/app";
import "firebase/storage";
import Songs from "./song";

const uploadHandle = async (data) => {
    const { title, imgUrl, songUrl, description, tags, userId, first_name, last_name } = data;
    const img = await uploadImage(imgUrl)
    const song = await uploadSong(songUrl)
    const newSong = await Songs.setSong({ img, song, title, description, tags, userId, first_name, last_name })
    return newSong
}

const uploadImage = (img) => {
    const split = img.split("/")
    const name = split[split.length - 1]

    var newMetadata = {
        contentType: 'image/jpeg'
    };

    const storageRef = firebase.storage().ref();
    var uploadTask = storageRef.child('artwork/' + name).put(img, newMetadata);

    return uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING:
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                return downloadURL
            });
        }
    );
}

const uploadSong = (song) => {
    // Get image name
    const split = song.split("/")
    const name = split[split.length - 1]

    var newMetadata = {
        contentType: 'audio/mpeg'
    };

    const storageRef = firebase.storage().ref();
    var uploadTask = storageRef.child('songs/' + name).put(song, newMetadata);

    return uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING:
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                return downloadURL
            });
        }
    );
}

const uploadService = { uploadHandle };

export default uploadService