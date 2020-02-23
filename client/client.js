
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
          let word = response.data[i]
          const newDiv = document.createElement("div")
          newDiv.innerHTML = word
          divParent.appendChild(newDiv)
    
        }


      })
      .catch(function (error) {
        console.log(error);
      });
  }, 500)

}


function clean() {
  document.getElementById("words_suggestions").innerHTML = ""
  document.getElementById('phone_number').value = ""
}