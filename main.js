var startBtn = document.getElementById('start')
var stopBtn = document.getElementById('stop')
var start2 = document.getElementById('start2')
num = 1;

document.getElementById('reset').addEventListener('click' ,function(){
location.reload()
})

function sound(frequency, time){
    console.log('f =' + frequency)

audioCtx = new(window.AudioContext || window.webkitAudioContext)();
var oscillator = audioCtx.createOscillator();
var g = audioCtx.createGain()
oscillator.connect(g)
oscillator.type = 'sine'
oscillator.frequency.value = frequency;
g.connect(audioCtx.destination);
oscillator.start()

var timeout = setTimeout(()=>{

    g.gain.setTargetAtTime(0, audioCtx.currentTime, 0.015);
    //oscillator.stop()

},time)

}

startBtn.addEventListener('click', function(){
   repeateSound()
})


function repeateSound(){

if (num<30){
    var timeOut = setTimeout(()=>{
        sound((notes[num]), time[num])

    moveBars(notes[num])

        num = num+1  
        console.log(time[num])
        console.log('repeating')
        repeateSound()
    },time[num])
}
else{
    console.log('stoped')
    clearInterval(interval)
}

}

var multipliers = {
    1: 0.2,
    2: 0.4,
    3: 0.6,
    4: 0.8,
    5: 1,
    6: 0.8,
    7: 0.6,
    8: 0.4,
    9: 0.2,
    10: 0.1,
    11: 0.2,
    12: 0.4,
    13: 0.6,
    14: 0.8,
    15: 1,
    16: 0.8,
    17: 0.6,
    18: 0.4,
    19: 0.2,
    20: 0.1,

    21: 0.2,
    22: 0.4,
    23: 0.6,
    24: 0.8,

    25: 1,
    26: 0.8,
    27: 0.6,
    28: 0.4,
    29: 0.2,
}

function moveBars(baseFreq){

    document.getElementById('freq').innerHTML = baseFreq + 'Hz'

    for (i=1; i<30; i++){

        barRef= ('bar'+i)

if(baseFreq==0){
    document.getElementById(barRef).style.height = (200 + 'px')
    document.getElementById(barRef).style.transform = ('translateY(' + -200 + 'px)')
}else{
    document.getElementById(barRef).style.height = ((baseFreq*multipliers[i])+ 'px') //----
    document.getElementById(barRef).style.transform = ('translateY(' + -1*(baseFreq*multipliers[i])+ 'px)' )
}
     }
}

var pause = 0;
var c4 = 261.63;
var d4 = 293.66;
var e4 = 329.63;
var f4 = 329.63;
var g4 = 392.00;
var a4 = 440.00;
var b4 = 493.88;
var c5 = 523.25;
var d5 = 587.33;
var e5 = 659.25;
var f5 = 698.46;
var g5 = 783.99;
var a5 = 880;
var b5 = 887.77
var c6 = 1046.50

var qn = 492;
var dqn = 738;
var en = 246;
var den = 369;
var sn = 123;
var dsn = 184;

var sp = 492;
dp1 = 246;
dp2 = 123;
dp3 = 61;







var notes = {
    1: pause,
    2: 440,
    3: 293.6,
    4: 329.6,
    5: 349.2,
    6: 349.2,
    7: 329.6, // 
    8: 329.6,
    9: pause,
    10: 329.6,
    11: pause,
    12: 329.6,
    13: 293.6,
    14: 293.6,
    15: 261.6,// 
    16: 261.6,
    17: pause,
    18: 261.6,
    19: 0,
    20: 293.6,
    21: 391.9,
    22: 440,
    23: pause,
    24: pause,
    25: pause,
    26: 293.6,
    27: 391.9,
    28: 440,
    29: pause,
}

var time = {
    1: dp1,
    2: en,
    3: en,
    4: en,
    5: qn,
    6: den,
    7: sn,//
    8: sn,
    9: dp2,
    10: en,
    11: dp1,
    12: en,
    13: qn,
    14: den,
    15: sn,//
    16: dp2,
    17: en,
    18: dp1,
    19: en,
    20: den,
    21: qn,
    22: dp2,
    23: sp,
    24: dp1,
    25: en,
    26: den,
    27: qn,
    28: dp2,
}