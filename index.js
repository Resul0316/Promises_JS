//!-----------------------------

/* let p  = new Promise((resolve, reject) =>{
    let a = 1+1
    if (a == 2){
        resolve("success")
    }else{
        reject("failed")
    }
})
//!-----------------------------


//* We tell if the promises true print success otherwise failed in the code above. And .then function makes it!
 
p.then((message0) =>{
    console.log('this is in the then ' + message0 )
}).catch((message0) =>{
    console.log("this is in the catch " + message0)
})
 */

//* Example and promise compare with callback
//* Here we use Callback example
const userLeft = false
const userWatchingCatMeme = true

function watchTutorialCallBack(callback, errorCallback){
    if (userLeft){
        errorCallback({
            name:"user left",
            message:" :("
        })
    }else if(userWatchingCatMeme){
        errorCallback({
            name:"User Watching Cat Meme",
            message:"Dog are smaller than cats"
        })
    }else{
        callback("Thumbs up and follow me")
    }
}

watchTutorialCallBack((message) =>{
    console.log("success: " + message)
}, (error) =>{
    console.log(error.name + " " + error.message)
})


//* Here we transform it to Promise example
//* if we look for the code above I didn't change so much code but I have the same output
//* In here promises give us more clean code

const userleft = false;
const userWatchingCatMeme = false;

const watchingtutorialCallback = (callback, errorCallback ) =>{
    if (userleft){
        errorCallback({
            name:"user left",
            message2: "sad"
        })
    }else if (userWatchingCatMeme) {
        errorCallback({
            name:"user is watching CAt meme",
            message2:"Dogs are smarter than cats"
        })
    }else{
        callback("Thumbs up! Follow me :)")
    }
}


watchingtutorialCallback ((message2) =>{
    console.log("success", message2)
}, (error) =>{
    console.log(error.name + "  " + error.message2)
}
)

//* Some examples with promises

const recordVideo = new Promise((resolve, reject)=>{
    resolve("video 1 recorded")
})

const recordVideoTwo = new Promise((resolve, reject)=>{
    resolve("video 2 recorded")
})

const recordVideoThree = new Promise((resolve, reject)=>{
    resolve("video 3 recorded")
})

Promise.all([
    recordVideo,
    recordVideoTwo,
    recordVideoThree
]).then((messages) =>{
    console.log(messages)
})
//*if we make it with race it will take only first one
Promise.race([
    recordVideo,
    recordVideoTwo,
    recordVideoThree
]).then((messages) =>{
    console.log(messages)
})




