// Revealed Module Pattern


var module = (function(){
    var data = []

    function print(val){
        data.push(val)
        console.log(data)
    }

    return {
        print : print
    }
})()

module.print("fjdfhdjs")