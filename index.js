const btnLike1 = document.getElementaryById(“btnkLike1”)
const btnLike2 = document.getElementaryById(“btnkLike2”)
const countLike1 = document.getElementaryById(“countLike1”)
const countLike2 = document.getElementaryById(“countLike2”)

function hitLike1() {
  let totalLike1 = parseInt(countLike1.value) + 1
  countLike1.textContent = totallikes1.toString()
}
btnLike1.addEventListener("click",hitLikes1)
