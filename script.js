let clockShow = document.getElementById('Clock')

clockShow.addEventListener("mouseenter", () => {

  document.getElementById("tower").innerText = "This is the Big Ben Tower!"
})

clockShow.addEventListener("mouseleave", () => {

  document.getElementById("tower").innerText = ""
})
