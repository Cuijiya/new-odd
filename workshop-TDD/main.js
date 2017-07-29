const readlineSync=require('readline-sync')

const guessNumObj = {
    getSystemNumArr: function () {
        var systemNumArr = []
        systemNumArr[0] = String(Math.floor(Math.random() * 10))
        while (systemNumArr.length < 4) {
                var temp=String(Math.floor(Math.random() * 10))
                if (systemNumArr.indexOf(temp)===-1) {
                    systemNumArr.push(temp)
                }
        }
        return systemNumArr
    }
}


function getOutput() {
    const systemNumArr=guessNumObj.getSystemNumArr()//获取系统随机数
    const guessNumStr=readlineSync.question('Please input your guessed number:')//获取用户输入的随机数
    var outPut
    var outPutArr = []
    var countA=0
    var countB=0
    var guessNumArr=guessNumStr.split('')
    for (var i = 0; i < guessNumArr.length; i++) {
        if (guessNumArr[i] === systemNumArr[i]) {
            outPutArr.push('A')
        } else {
            for (var j = 0; j < systemNumArr.length; j++) {
                if (guessNumArr[i] === systemNumArr[j]) {
                    outPutArr.push('B')
                    break
                }
            }
        }
    }

    for (var i of outPutArr) {
        if (i === 'A') {
            countA++
        } else if (i === 'B') {
            countB++
        }
    }
    outPut = countA + 'A' + countB + 'B'
    return outPut
}

module.exports.guessNumObj=guessNumObj
module.exports.getOutput=getOutput


// var output=getOutput()