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

var notes = {
    1: 440,
    2: 0,
    3: 440,
    4: 0,
    5: 440,
    6: 0,
    7: 523.251, //i rember 
    8: 0,
    9: 329.628,
    10: 0,
    11: 329.628,
    12: 0,
    13: 329.628,
    14: 0,
    15: 440,//our last summer 
    16: 0,
    17: 349.228,
    18: 0,
    19: 349.228,
    20: 0,
    21: 349.228,
    22: 0,
    23: 440,
    24: 0,
    25: 391.995,

}
var time = {
    1: 200,
    2: 150,//pause
    3: 200,
    4: 150,//pause
    5: 350,
    6: 2,//pause
    7: 400,//------i rember -----
    8: 500,//pause
    9: 150,
    10: 150,//pause
    11: 200,
    12: 150,//pause
    13: 350,
    14: 1,//pause
    15: 500,//-------our last summer------
    16: 500,//pause
    17: 200,
    18: 80,//pause
    19: 200,
    20: 80,//pause
    21: 350,
    22: 400,//pause
    23: 250,
    24: 10,//pause
    25: 600,//-----when your heart met mine----

   



}