console.log("Sangeet");

let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songName"));

let songs=[
    {songName : "Kaise Hua", filePath:"1.mp3", coverPath : "1i.jpg"},
    {songName : "Mehbooba", filePath:"2.mp3", coverPath : "2i.jpg"},
    {songName : "Kahani Suno", filePath:"3.mp3", coverPath : "3i.jpg"},
    {songName : "Apna Bana Le", filePath:"4.mp3", coverPath : "4i.jpg"},
    {songName : "Khairayat", filePath:"5.mp3", coverPath : "5i.jpg"},
    {songName : "Hare Murari", filePath:"6.mp3", coverPath : "6i.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;

}
)
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;
})

