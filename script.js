console.log("welcome to spotify");

// initialize the variables 
let songindex= 0 ;
let audioelement = new Audio('songs/3.mp3');
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let mastersongname = document.getElementById("mastersongname");
let gif = document.getElementById("gif");
let songitems = Array.from(document.getElementsByClassName("songitem"));//ya ye  kar raha hai ki saara element songname ka ussa array mai convert kar dega 

let songs=[
   {songname:"jashn-e-ishq", filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},   
   {songname:"Cielo - Huma-Huma", filepath:"songs/2.mp3", coverpath:"covers/2.jpg"},
   {songname:"DEAF KEV - Invinciblea" , filepath:"songs/3.mp3", coverpath:"covers/3.jpg"},
   {songname:"Different Heaven &", filepath:"songs/4.mp3", coverpath:"covers/4.jpg"},
   {songname:"Janji-Heroes", filepath:"songs/5.mp3", coverpath:"covers/5.jpg"},
   {songname:"Rabba - Salam-e-Ishq", filepath:"songs/6.mp3", coverpath:"covers/6.jpg"},
   {songname:"Sakhiyaan - Salam-e-Ishq", filepath:"songs/7.mp3", coverpath:"covers/6.jpg"},
   {songname:"Bhula Dena ", filepath:"songs/8.mp3", coverpath:"covers/1.jpg"},
   {songname:"Tumhari Kasam ", filepath:"songs/9.mp3", coverpath:"covers/1.jpg"},
   {songname:"Na Jaana ", filepath:"songs/10.mp3", coverpath:"covers/1.jpg"}
]


songitems.forEach((element,i)=>{
    
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerHTML = songs[i].songname;
   
})
// audioelement.play();


// handle play/pause click 

masterplay.addEventListener('click',()=>{
    if(audioelement.paused|| audioelement.currentTime<=0){
        audioelement.play();
        gif.style.opacity = 1 ; 
        masterplay.classList.remove('fa-play-circle');  /*issa kya ho raha hai ki jo play wali button hai wo pause ho rahi and pause wali play isslia hata raha hai and add kar raha hai  */
        masterplay.classList.add('fa-pause-circle');
    }

    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');  /*issa kya ho raha hai ki jo play wali button hai wo pause ho rahi and pause wali play isslia hata raha hai and add kar raha hai  */
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0 ; 
    }
})



// listen the events 

audioelement.addEventListener("timeupdate",()=>{
    //update seek bar 
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
   
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime = myprogressbar.value*audioelement.duration/100;
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
       
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        
}
)
}
function aditya(){
    mastersongname.innerText = songs[songindex].songname;
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeallplays();
        songindex = parseInt(e.target.id);
        gif.style.opacity = 1;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songindex+1}.mp3`;
        aditya();
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioelement.src = `songs/${songindex+1}.mp3`;
    aditya();
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})



document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioelement.src = `songs/${songindex+1}.mp3`;
   aditya();
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

