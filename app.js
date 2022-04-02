const profileDataArgs = process.argv.slice(2, process.argv.length)


const printProfileData = (profileDataArr) => {
    // THIS...
    for(let i = 0; i < profileDataArr.length; i++){
        console.log(profileDataArr[i])
    }

    console.log('================')

    // IS THE SAME AS THIS...
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem)
    }); 
}

printProfileData(profileDataArgs)