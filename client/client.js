window.onload = function(data) {
  IMask(document.getElementById("phone_number"), {
    mask: "000-0000"
  });
};

function fillNumber(data) {
  setTimeout(async () => {
    const url = window.location.origin + "/suggestions";

    try {
      const response = await axios.post(url, { data });
      const divParent = document.getElementById("words_suggestions");
      divParent.innerHTML = "";
      for (let word of response.data) {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = word;
        divParent.appendChild(newDiv);
      }
    } catch (error) {
      console.log(error);
    }
  }, 500);
}

function clean() {
  document.getElementById("words_suggestions").innerHTML = "";
  document.getElementById("phone_number").value = "";
}
