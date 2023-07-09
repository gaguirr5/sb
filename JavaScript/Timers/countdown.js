function countDown(num){
    let interval = setInterval(function(){
        num -= 1
        if(num > 0){
            console.log(num)
        }else{
            console.log('DONE!')
            clearInterval(interval)
        }
        
    }, 1000)
}

countDown(4);
// 3
// 2
// 1
// "DONE!"