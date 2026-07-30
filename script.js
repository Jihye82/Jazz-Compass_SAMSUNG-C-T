let step = 0;

let answers=[];


const questions=[

{
q:"오늘 하루는 어땠나요?",
a:["😊 좋은 하루","🙂 평범한 하루","😮‍💨 지친 하루","🌙 생각이 많은 하루"]
},

{
q:"지금 듣고 싶은 악기는?",
a:["🎹 피아노","🎷 색소폰","🎺 트럼펫","🎤 보컬"]
},

{
q:"평소 좋아하는 음악 장르는?",
a:[
"🎤 K-POP",
"🎸 Rock",
"🎧 Hip-Hop/R&B",
"🌎 다양하게 듣는 편"
]
},

{
q:"지금 가장 하고 싶은 것은?",
a:[
"☕ 카페",
"🚶 산책",
"📖 휴식",
"🍺 친구 만나기"
]

}

];


const results=[

{
title:"🌙 Midnight Blue",
artist:"Chet Baker",
song:"I Fall In Love Too Easily",
msg:"오늘은 조금 천천히 걸어도 괜찮은 하루입니다."
},

{
title:"☕ Coffee Break",
artist:"Norah Jones",
song:"Don't Know Why",
msg:"커피 한 잔과 함께 듣기 좋은 재즈입니다."
},

{
title:"🌧 Rainy Mood",
artist:"Bill Evans",
song:"Waltz For Debby",
msg:"조용한 생각이 필요한 날의 피아노입니다."
},

{
title:"🌞 Bright Morning",
artist:"Louis Armstrong",
song:"What A Wonderful World",
msg:"좋은 에너지가 필요한 하루입니다."
},

{
title:"🌃 City Lights",
artist:"Dave Brubeck Quartet",
song:"Take Five",
msg:"도시의 밤과 잘 어울리는 리듬입니다."
},

{
title:"🌌 Adventure",
artist:"Miles Davis",
song:"So What",
msg:"새로운 음악을 발견하는 즐거움을 느껴보세요."
},

{
title:"🎺 Classic Swing",
artist:"Frank Sinatra",
song:"Fly Me To The Moon",
msg:"익숙하지만 오래 사랑받는 명곡입니다."
},

{
title:"🇰🇷 Korean Jazz",
artist:"김오키",
song:"스며가는 것",
msg:"한국 재즈만의 개성을 느껴보세요."
}

];


function showQuestion(){

document.getElementById("question").innerHTML=
questions[step].q;


let html="";

questions[step].a.forEach(x=>{

html+=`
<div class="answer" onclick="selectAnswer('${x}')">
${x}
</div>
`;

});


document.getElementById("answers").innerHTML=html;

}



function selectAnswer(a){

answers.push(a);

step++;


if(step < questions.length){

showQuestion();

}

else{

showResult();

}

}



function showResult(){


document.getElementById("quiz").classList.add("hidden");

let r=
results[Math.floor(Math.random()*results.length)];


document.getElementById("resultTitle").innerHTML=r.title;

document.getElementById("artist").innerHTML=
r.artist;


document.getElementById("song").innerHTML=
"🎵 "+r.song;


document.getElementById("message").innerHTML=
r.msg;


document.getElementById("result")
.classList.remove("hidden");

}



function restart(){

step=0;
answers=[];

document.getElementById("result")
.classList.add("hidden");

document.getElementById("quiz")
.classList.remove("hidden");


showQuestion();

}


showQuestion();
