var startBtn = document.getElementById('start')
var stopBtn = document.getElementById('stop')
var start2 = document.getElementById('start2')


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
   song()
})

function song(){
    sound(500, 2000)

var timed = setTimeout(()=>{
    sound(700, 2000)
    },time)
}