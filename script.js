let step = 0;


let score = {

Chet:0,
Norah:0,
Bill:0,
Louis:0,
Dave:0,
Miles:0,
Sinatra:0,
Kim:0

};



const questions = [

{
q:"오늘 하루의 분위기는?",
a:[
["😊 기분 좋은 하루","Louis"],
["🙂 평범한 하루","Norah"],
["😮‍💨 조금 지친 하루","Chet"],
["🌙 생각이 많은 하루","Miles"]
]
},

{
q:"가장 끌리는 악기는?",
a:[
["🎹 피아노","Bill"],
["🎷 색소폰","Dave"],
["🎺 트럼펫","Chet"],
["🎤 보컬","Norah"]
]
},

{
q:"평소 가장 좋아하는 음악 장르는?",
a:[
["🎤 K-POP / Pop","Sinatra"],
["🎸 Rock","Kim"],
["🎧 Hip-Hop / R&B","Miles"],
["🎼 Classical","Bill"],
["🌎 장르 안 가리고 듣는 편","Dave"]
]
},

{
q:"재즈를 듣고 싶은 순간은?",
a:[
["☕ 카페","Norah"],
["🚶 산책","Dave"],
["📚 집중","Bill"],
["🌃 밤에 혼자","Chet"]
]
},

{
q:"지금 공간의 분위기는?",
a:[
["☀️ 밝은 낮","Louis"],
["🌧 비 오는 날","Bill"],
["🌆 도시의 밤","Miles"],
["🌌 조용한 밤","Chet"]
]
}

];




const results = {


Chet:{
type:"🌙 Midnight Blue",
artist:"Chet Baker",
song:"I Fall In Love Too Easily",
songs:"My Funny Valentine · Almost Blue",
spotify:"https://open.spotify.com/search/Chet%20Baker",
youtube:"https://www.youtube.com/results?search_query=Chet+Baker",
message:"오늘은 조금 천천히 걸어도 괜찮은 하루입니다."
},


Norah:{
type:"☕ Coffee Break",
artist:"Norah Jones",
song:"Don't Know Why",
songs:"Come Away With Me · Sunrise",
spotify:"https://open.spotify.com/search/Norah%20Jones",
youtube:"https://www.youtube.com/results?search_query=Norah+Jones",
message:"커피 한 잔과 함께 듣기 좋은 재즈입니다."
},


Bill:{
type:"🌧 Rainy Piano",
artist:"Bill Evans",
song:"Waltz for Debby",
songs:"Peace Piece · My Foolish Heart",
spotify:"https://open.spotify.com/search/Bill%20Evans",
youtube:"https://www.youtube.com/results?search_query=Bill+Evans",
message:"조용한 생각이 필요한 순간의 피아노입니다."
},


Louis:{
type:"🌞 Bright Morning",
artist:"Louis Armstrong",
song:"What A Wonderful World",
songs:"La Vie En Rose · Hello Dolly!",
spotify:"https://open.spotify.com/search/Louis%20Armstrong",
youtube:"https://www.youtube.com/results?search_query=Louis+Armstrong",
message:"좋은 에너지가 필요한 하루입니다."
},


Dave:{
type:"🌃 City Lights",
artist:"Dave Brubeck Quartet",
song:"Take Five",
songs:"Blue Rondo à la Turk · Unsquare Dance",
spotify:"https://open.spotify.com/search/Dave%20Brubeck",
youtube:"https://www.youtube.com/results?search_query=Dave+Brubeck",
message:"도시의 밤과 잘 어울리는 리듬입니다."
},


Miles:{
type:"🌌 Deep Jazz",
artist:"Miles Davis",
song:"So What",
songs:"Blue in Green · Freddie Freeloader",
spotify:"https://open.spotify.com/search/Miles%20Davis",
youtube:"https://www.youtube.com/results?search_query=Miles+Davis",
message:"새로운 음악을 발견하는 즐거움을 느껴보세요."
},


Sinatra:{
type:"🎺 Classic Swing",
artist:"Frank Sinatra",
song:"Fly Me To The Moon",
songs:"My Way · The Way You Look Tonight",
spotify:"https://open.spotify.com/search/Frank%20Sinatra",
youtube:"https://www.youtube.com/results?search_query=Frank+Sinatra",
message:"익숙하지만 오래 사랑받는 명곡입니다."
},


Kim:{
type:"🇰🇷 Korean Jazz",
artist:"김오키",
song:"스며가는 것",
songs:"대표 라이브 · 협업곡 추천",
spotify:"https://open.spotify.com/search/%EA%B9%80%EC%98%A4%ED%82%A4",
youtube:"https://www.youtube.com/results?search_query=%EA%B9%80%EC%98%A4%ED%82%A4",
message:"한국 재즈만의 독특한 에너지를 느껴보세요."
}

};





function showQuestion(){

let current = questions[step];

document.getElementById("question").innerHTML=current.q;


let html="";


current.a.forEach(item=>{

html += `
<div class="answer" onclick="selectAnswer('${item[1]}')">
${item[0]}
</div>
`;

});


document.getElementById("answers").innerHTML=html;

}





function selectAnswer(type){

score[type]++;

step++;


if(step < questions.length){

showQuestion();

}

else{

showResult();

}

}





function showResult(){

let maxScore = Math.max(...Object.values(score));


let candidates = Object.keys(score).filter(
x => score[x] === maxScore
);


let winner =
candidates[Math.floor(Math.random()*candidates.length)];


let r = results[winner];


document.getElementById("quiz")
.classList.add("hidden");


document.getElementById("type").innerHTML=r.type;

document.getElementById("artist").innerHTML=r.artist;

document.getElementById("song").innerHTML="🎵 "+r.song;

document.getElementById("songs").innerHTML=
"함께 들어보세요 : "+r.songs;


document.getElementById("spotifyLink").href=r.spotify;

document.getElementById("youtubeLink").href=r.youtube;


document.getElementById("message").innerHTML=r.message;


document.getElementById("result")
.classList.remove("hidden");

}





function restart(){

step=0;


Object.keys(score)
.forEach(x=>score[x]=0);


document.getElementById("result")
.classList.add("hidden");


document.getElementById("quiz")
.classList.remove("hidden");


showQuestion();

}




showQuestion();
