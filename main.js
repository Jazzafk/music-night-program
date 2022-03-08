var startBtn = document.getElementById('start')
var stopBtn = document.getElementById('stop')
var start2 = document.getElementById('start2')
num = 1;

function sound(frequency, time){
audioCtx = new(window.AudioContext || window.webkitAudioContext)();
var oscillator = audioCtx.createOscillator();
oscillator.frequency.value = frequency;
oscillator.connect(audioCtx.destination);
oscillator.start()

var timeout = setTimeout(()=>{
    oscillator.stop();
},time)


}




startBtn.addEventListener('click', function(){
   repeateSound()
})


function repeateSound(){
var interval = setInterval(function(){
    sound((notes[num]), 500)
    num = num+1
    console.log(num)

if (num==8){
    clearInterval(interval)}
}, 500*num);

}

var notes = {
    1: 220,
    2: 349.228,
    3: 261.626,
    4: 261.626,
    5: 220,
    6: 349.228,
    7: 261.626,
    8: 261.626,
}