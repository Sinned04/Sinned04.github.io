var product1 = document.getElementById("product1")
            var qty1 = document.getElementById("qty1")
            var price1 = document.getElementById("price1")

            var product2 = document.getElementById("product2")
            var qty2 = document.getElementById("qty2")
            var price2 = document.getElementById("price2")

            var carts = document.getElementById("carts")
            var total = document.getElementById("total")
            var cash = document.getElementById("cash")
            var change = document.getElementById("change")

            function addOrder() {
                carts.textContent=""
                if (parseFloat(qty1.value) > 0){
                    var order = qty1.value.toString() + ' pc/s x ' + price1.textContent + '------'+ product1.textContent + '------ Php' + (parseFloat(qty1.value)*parseFloat(price1.textContent)) + '\n'
                    //carts.textContent += carts.value.toString() + "\n";
                    carts.textContent += order
                }
                if (parseFloat(qty2.value) > 0){
                    var order = qty2.value.toString() + ' pc/s x ' + price2.textContent + '------' + product2.textContent + '------ Php' + (parseFloat(qty2.value)*parseFloat(price2.textContent)) + '\n'
                    //carts.textContent += carts.value.toString() + "\n";
                    carts.textContent += order
            }
           if (parseFloat(qty3.value) > 0){
                    var order = qty3.value.toString() + ' pc/s x ' + price3.textContent + '------' + product3.textContent + '------ Php' + (parseFloat(qty3.value)*parseFloat(price3.textContent)) + '\n'
                    //carts.textContent += carts.value.toString() + "\n";
                    carts.textContent += order
            }
            if (parseFloat(qty4.value) > 0){
                    var order = qty4.value.toString() + ' pc/s x ' + price4.textContent + '------' + product4.textContent + '------ Php' + (parseFloat(qty4.value)*parseFloat(price4.textContent)) + '\n'
                    //carts.textContent += carts.value.toString() + "\n";
                    carts.textContent += order
            }
            if (parseFloat(qty5.value) > 0){
                    var order = qty5.value.toString() + ' pc/s x ' + price5.textContent + '------' + product5.textContent + '------ Php' + (parseFloat(qty5.value)*parseFloat(price5.textContent)) + '\n'
                    //carts.textContent += carts.value.toString() + "\n";
                    carts.textContent += order
            }
            if (parseFloat(qty6.value) > 0){
                    var order = qty6.value.toString() + ' pc/s x ' + price6.textContent + '------' + product6.textContent + '------ Php' + (parseFloat(qty6.value)*parseFloat(price6.textContent)) + '\n'
                    //carts.textContent += carts.value.toString() + "\n";
                    carts.textContent += order
            }
            }
            qty1.addEventListener("keyup", addOrder);
            qty2.addEventListener("keyup", addOrder);
            qty3.addEventListener("keyup", addOrder);
            qty4.addEventListener("keyup", addOrder);
            qty5.addEventListener("keyup", addOrder);
            qty6.addEventListener("keyup", addOrder);ick",DisLikes1)

function DisLikes2() {
  let totalDisLikes2 = parseInt(countDisLikes2.value) + 1
   countDisLikes2.textContent = totalDisLikes2.toString()
}
btnDisLike2.addEventListener("click",DisLikes2)


const comment = document.getElementById("comment")
const submit = document.getElementById("submit")
const commentbox = document.getElementById("commentbox")

function submitComment() {
   commentbox.textContent += comment.value.toString() + "\n"
}
submit.addEventListener("click",submitComment)
