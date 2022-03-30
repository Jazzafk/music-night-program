var startBtn = document.getElementById('start')
var stopBtn = document.getElementById('stop')
var start2 = document.getElementById('start2')
num = 1;

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

if (num<26){
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
}



function moveBars(baseFreq){

    for (i=1; i<21; i++){

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


var notes = {
    1: 0,
    2: 440,
    3: 293.6,
    4: 329.6,
    5: 349.2,
    6: 349.2,
    7: 329.6, // 
    8: 329.6,
    9: 0,
    10: 329.6,
    11: 0,
    12: 329.6,
    13: 293.6,
    14: 293.6,
    15: 261.6,// 
    16: 261.6,
    17: 0,
    18: 261.6,
    19: 0,
    20: 293.6,
    21: 391.9,
    22: 440,
    23: 0,
    24: 0,
    25: 0,
    26: 293.6,
    27: 391.9,
    28: 440,
    29: 0,
}

var time = {
    1: 246,
    2: 492,
    3: 492,
    4: 492,
    5: 492,
    6: 738,
    7: 492,//
    8: 123,
    9: 123,
    10: 246,
    11: 246,
    12: 246,
    13: 482,
    14: 738,
    15: 492,//
    16: 123,
    17: 123,
    18: 246,
    19: 246,
    20: 246,
    21: 369,
    22: 492,
    23: 123,
    24: 492,
    25: 246,
    26: 246,
    27: 369,
    28: 492,
    29: 123,

   



}