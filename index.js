 const btnlike1=document.getElementById("btnLike1")
 const btnLike2=document.getElementById("btnLike2")
 const countLike1=document.getElementById("countLike1")
 const counLike2=document.getElementById("countLike2")

function hitLike1() {
     let totalLike1=parseInt(countLike.value) + 1
     countLike1.textContent=totalLike1.toString()
 }
 btnLike1.addEventListener("click",hitLike1)
