document.addEventListener("DOMContentLoaded", () => {
    const imagens = document.querySelectorAll("main .imagem img");
    const legendas = document.querySelectorAll("main .imagem h3");


    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "999";
    overlay.style.flexDirection = "column";
    overlay.style.padding = "20px";
    overlay.style.boxSizing = "border-box";
    overlay.style.display = "none"; 
    document.body.appendChild(overlay);

    const imgGrande = document.createElement("img");
    imgGrande.style.maxWidth = "80%";
    imgGrande.style.maxHeight = "70%";
    imgGrande.style.borderRadius = "10px";
    overlay.appendChild(imgGrande);

    const legendaGrande = document.createElement("h3");
    legendaGrande.style.color = "white";
    legendaGrande.style.marginTop = "15px";
    legendaGrande.style.textAlign = "center";
    overlay.appendChild(legendaGrande);

  
    const heartsContainer = document.createElement("div");
    heartsContainer.style.position = "absolute";
    heartsContainer.style.top = "0";
    heartsContainer.style.left = "0";
    heartsContainer.style.width = "100%";
    heartsContainer.style.height = "100%";
    heartsContainer.style.pointerEvents = "none"; 
    overlay.appendChild(heartsContainer);


    function createHeart() {
        const heart = document.createElement("div");
        heart.textContent = "💖";
        heart.style.position = "absolute";
        heart.style.fontSize = Math.random() * 30 + 20 + "px"; 
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heart.style.opacity = "0.8";
        heart.style.animation = "floatUp 4s linear forwards";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

  
    const style = document.createElement("style");
    style.textContent = `
        @keyframes floatUp {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            100% { transform: translateY(-100px) scale(1.5); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

 
    imagens.forEach((img, index) => {
        img.addEventListener("click", () => {
            imgGrande.src = img.src;
            legendaGrande.textContent = legendas[index].textContent;
            overlay.style.display = "flex";

         
            const heartsInterval = setInterval(createHeart, 300);

        
            overlay.dataset.heartsInterval = heartsInterval;
        });
    });

  
    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.style.display = "none";
            heartsContainer.innerHTML = ""; 
            clearInterval(overlay.dataset.heartsInterval);
        }
    });
});
