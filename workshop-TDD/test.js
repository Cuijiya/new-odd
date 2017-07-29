const sinon = require('sinon')
const readlineSync = require('readline-sync')
const guessNumModule = require('./main')

function get0A0B() {
    const systemNumArr = sinon.stub(guessNumModule.guessNumObj,'getSystemNumArr').returns(['1','2','3','4'])
    const guessNumStr=sinon.stub(readlineSync,'question').returns('5678')
    const output=guessNumModule.getOutput()
    console.log(output==='0A0B'?'get0A0B is passed':'get0A0B is failed')
    guessNumStr.restore()
}


function get0A1B() {
    const guessNumStr=sinon.stub(readlineSync,'question').returns('6178')
    const output=guessNumModule.getOutput()
    console.log(output==='0A1B'?'get0A1B is passed':'get0A1B is failed')
    guessNumStr.restore()
}

function get0A2B() {
    const guessNumStr=sinon.stub(readlineSync,'question').returns('2178')
    const output=guessNumModule.getOutput()
    console.log(output==='0A2B'?'get0A0B is passed':'get0A2B is failed')
    guessNumStr.restore()
}

function get0A3B() {
    const guessNumStr=sinon.stub(readlineSync,'question').returns('4328')
    const output=guessNumModule.getOutput()
    console.log(output==='0A3B'?'get0A3B is passed':'get0A3B is failed')
    guessNumStr.restore()
}

function get0A4B() {
    const guessNumStr=sinon.stub(readlineSync,'question').returns('4321')
    const output=guessNumModule.getOutput()
    console.log(output==='0A4B'?'get0A4B is passed':'get0A4B is failed')
    guessNumStr.restore()
}

function get1A0B() {
    const guessNumStr=sinon.stub(readlineSync,'question').returns('1678')
    const output=guessNumModule.getOutput()
    console.log(output==='1A0B'?'get1A0B is passed':'get1A0B is failed')
    guessNumStr.restore()
}

function get1A1B() {
    const guessNumStr=sinon.stub(readlineSync,'question').returns('1648')
    const output=guessNumModule.getOutput()
    console.log(output==='1A1B'?'get1A1B is passed':'get1A1B is failed')
    guessNumStr.restore()
}

function get1A2B() {
    const guessNumStr=sinon.stub(readlineSync,'question').returns('1328')
    const output=guessNumModule.getOutput()
    console.log(output==='1A2B'?'get1A2B is passed':'get1A2B is failed')
    guessNumStr.restore()
}

function get1A3B() {
    const guessNumStr=sinon.stub(readlineSync,'question').returns('1423')
    const output=guessNumModule.getOutput()
    console.log(output==='1A3B'?'get1A3B is passed':'get1A3B is failed')
    guessNumStr.restore()
}

function get2A0B() {
    const guessNumStr=sinon.stub(readlineSync,'question').returns('1278')
    const output=guessNumModule.getOutput()
    console.log(output==='2A0B'?'get2A0B is passed':'get2A0B is failed')
    guessNumStr.restore()
}

function get2A1B() {
    const guessNumStr=sinon.stub(readlineSync,'question').returns('1248')
    const output=guessNumModule.getOutput()
    console.log(output==='2A1B'?'get2A1B is passed':'get2A1B is failed')
    guessNumStr.restore()
}

function get2A2B() {
    const guessNumStr=sinon.stub(readlineSync,'question').returns('1243')
    const output=guessNumModule.getOutput()
    console.log(output==='2A2B'?'get0A0B is passed':'get2A2B is failed')
    guessNumStr.restore()
}

function get3A0B() {
    const guessNumStr=sinon.stub(readlineSync,'question').returns('1238')
    const output=guessNumModule.getOutput()
    console.log(output==='3A0B'?'get3A0B is passed':'get3A0B is failed')
    guessNumStr.restore()
}

function get4A0B() {
    const guessNumStr=sinon.stub(readlineSync,'question').returns('1234')
    const output=guessNumModule.getOutput()
    console.log(output==='4A0B'?'get0A0B is passed':'get4A0B is failed')
    guessNumStr.restore()
}

get0A0B()
get0A1B()
get0A2B()
get0A3B()
get0A4B()
get1A0B()
get1A1B()
get1A2B()
get1A3B()
get2A0B()
get2A1B()
get2A2B()
get3A0B()
get4A0B()