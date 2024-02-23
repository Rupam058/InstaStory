
var arr = [
    {dp:"https://plus.unsplash.com/premium_photo-1708110920881-635419c3411f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMzJ8fHxlbnwwfHx8fHw%3D", story:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D", story:"https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vZGVsfGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1533973860717-d49dfd14cf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsfGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vZGVsfGVufDB8fDB8fHww"}

]

var clutter = ""

arr.forEach(function(elem, index) {
    clutter += `<div class="story">
    <img id="${index}" src="${elem.dp}" alt="" srcset="">
  </div>`
})

var stry = document.querySelector(".storiyan")

stry.innerHTML = clutter

stry.addEventListener("click", function(dets){
    // console.log(arr[dets.target.id].story)
    document.querySelector(".full-screen").style.display = "block"
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(() => {
        document.querySelector(".full-screen").style.display = "none"
    }, 900);
})

