const btnLike1 = document.getElementaryById(“btnkLike1”)
const btnLike2 = document.getElementaryById(“btnkLike2”)
const countLike1 = document.getElementaryById(“countLikes1”)
const countLike2 = document.getElementaryById(“countLikes2”)

function hitLike1() {
  let totalLike1 = parseInt(countLikes1.value) + 1
  countLike1.textContent = totallikes1.toString()
}
btnLike1.addEventListener("click",hitLikes1)
