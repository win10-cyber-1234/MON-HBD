// Vérifie si l'utilisateur est connecté
window.onload = () => {
    const user = localStorage.getItem("username");
    if (!user) {
      window.location.href = "login.html";
    } else {
      document.getElementById("user-name").innerText = user;
    }
  };
  
  // Zoom sur image
  function zoom(imgElement) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    popupImg.src = imgElement.src;
    popup.style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  // Ajouter une photo à la galerie
  function addPhoto() {
    const fileInput = document.getElementById("fileInput");
    const gallery = document.getElementById("gallery");
  
    const file = fileInput.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = function (e) {
      const newImg = document.createElement("img");
      newImg.src = e.target.result;
      newImg.alt = "Nouvelle photo";
      newImg.onclick = () => zoom(newImg);
      gallery.appendChild(newImg);
    };
    reader.readAsDataURL(file);
  }
  
  // Déconnexion
  function logout() {
    localStorage.removeItem("username");
    window.location.href = "login.html";
  }
  