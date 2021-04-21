
import firebase from "firebase/app";
import "firebase/storage";

const uploadHandle = async (data, ownerId) => {
    const { title, imgUrl, songUrl } = data;
    // img & song should return {message: Success, url: fileUrl}
    const img = await uploadImage(imgUrl)
    //const imgUploadResult = await img
    const song = await uploadSong(songUrl)
    //const songUploadResult = await song

    //const metadata = await uploadMetadata(imgUploadResult.url, songUploadResult.url, ownerId, title)
    return { message: 'Success' }
}

const uploadMetadata = (img, song, ownerId) => {
    // create song in songs
    // upload imageUrl
    // upload songUrl
    // upload ownerId
    // upload title
}

const uploadImage = (img) => {

    // Get image name
    const split = img.split("/")
    const name = split[split.length - 1]

    const storageRef = firebase.storage().ref();

    // Upload file
    var uploadTask = storageRef.child('artwork/' + name).put(img);

    // Listen for state changes, errors, and completion of the upload.
    return uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                return { message: 'Success', url: `${downloadURL}` }
            });
        }
    );
}

const uploadSong = (song) => {

    // Get image name
    const split = song.split("/")
    const name = split[split.length - 1]

    const storageRef = firebase.storage().ref();

    // Upload file
    var uploadTask = storageRef.child('songs/' + name).put(song);

    // Listen for state changes, errors, and completion of the upload.
    return uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                return { message: 'Success', url: `${downloadURL}` }
            });
        }
    );
}



const uploadService = { uploadHandle, uploadImage };

export default uploadService