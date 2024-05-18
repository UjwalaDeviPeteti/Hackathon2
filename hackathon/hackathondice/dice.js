// const canva=document.getElementById("canvadice")
// const ctx=canva.getContext("2d")

// const dice=()=>{
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//       // draw base
//       ctx.rect(50, 370, 300, 20);
//       ctx.stroke();
//       ctx.font
      
// }

const canvas = document.getElementById('canvadice');
const ctx = canvas.getContext('2d');

function Draw(number){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '70px bold';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(number, canvas.width / 2, canvas.height / 2);
}
function random(){
    return Math.floor(Math.random() * 6) + 1;
}
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        const rand = random();
        Draw(rand);
    }
});
Draw(1);







