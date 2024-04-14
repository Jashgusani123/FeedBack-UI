let first = document.querySelectorAll(".rat").forEach((i) => {
    i.addEventListener("click", function (o) {
        let cotent = o.srcElement.nextElementSibling.innerText;
        let btn = document.getElementById("btn");
        btn.addEventListener("click", function (e) {
            let a = document.getElementById("con");
            a.style.display = "none";
            let div = document.createElement("div");
            let contenar = document.getElementById("main");
            div.innerHTML = `<div class="con1">
                <strong>Thank You!</strong>
                <br>
                <strong>FeedBack: ${cotent}</strong>
                <br>
                <p>We'll use your feedback to improve our customer support.</p>
            </div>`;

            contenar.append(div)

        })
    })

})