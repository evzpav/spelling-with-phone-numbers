
window.onload = function (data) {
  let phoneMask = IMask(
    document.getElementById('phone_number'), { mask: "000-0000" });

}

function fillNumber(data) {
  setTimeout(function () {


    const url = "http://localhost:3000/suggestions"

    axios.post(url, { data })
      .then(function (response) {
        const divParent = document.getElementById("words_suggestions")
        divParent.innerHTML = ""
        for (let i = 0; i < response.data.length; i++) {

          const newDiv = document.createElement("div")

          for (let j = 0; j < response.data[i].length; j++) {
            newDiv.innerHTML = response.data[i][j].word;
            divParent.appendChild(newDiv)
          }
        }


      })
      .catch(function (error) {
        console.log(error);
      });
  }, 500)

}


function clean() {
  document.getElementById("words_suggestions").innerHTML = ""
}