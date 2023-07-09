function randomGame(){
    let attempts = 1
    let goUntilZero = setInterval(function(){
        let randNumber = Math.random()
        if(randNumber > .75){
            clearInterval(goUntilZero)
            console.log(`Number of Attempts: ${attempts}`)
        }else{
            attempts += 1
        }
    }, 1000)
}

randomGame()