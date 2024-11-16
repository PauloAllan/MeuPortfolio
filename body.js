function modoClaro(cor) {
    const [r, g, b] = cor;
    return [
        Math.min(r + 80, 255),
        Math.min(g + 80, 255),
        Math.min(b + 80, 255)
    ];
}

function mudarCorFundo() {
    const gradientesEscuros = [
        [0, 7, 22],
        [30, 0, 60],
        [16, 0, 37],
        [10, 20, 45],
        [5, 10, 35],
        [15, 0, 40]
    ];
    
    const gradientesClaros = [
        [100, 120, 150],
        [120, 180, 255],
        [180, 200, 255],
        [160, 200, 255],
        [180, 220, 255],
        [130, 180, 250],
        [180, 220, 240]
    ];

    const gradientesEscurosStrings = gradientesEscuros.map(cor => `rgb(${cor.join(", ")})`);
    const gradientesClarosStrings = gradientesClaros.map(cor => `rgb(${cor.join(", ")})`);

    document.body.style.backgroundImage = `radial-gradient(at 10% 80%, ${gradientesClarosStrings[0]} 0px, transparent 50%),
                                          radial-gradient(at 70% 10%, ${gradientesClarosStrings[1]} 0px, transparent 50%),
                                          radial-gradient(at 25% 25%, ${gradientesClarosStrings[2]} 0px, transparent 50%),
                                          radial-gradient(at 60% 15%, ${gradientesClarosStrings[3]} 0px, transparent 50%),
                                          radial-gradient(at 15% 90%, ${gradientesClarosStrings[4]} 0px, transparent 50%),
                                          radial-gradient(at 40% 15%, ${gradientesClarosStrings[5]} 0px, transparent 50%),
                                          radial-gradient(at 10% 10%, ${gradientesClarosStrings[6]} 0px, transparent 50%)`;

    document.body.style.backgroundColor = "#e0f7fa";
    document.getElementById('changeBgBtn').innerHTML = 'Modo Noite <i class="fa-solid fa-moon"></i>';
}

document.getElementById('changeBgBtn').addEventListener('click', function () {
    if (document.body.style.backgroundColor === "rgb(224, 247, 250)") {
        document.body.style.backgroundImage = `radial-gradient(at 10% 80%, rgb(0, 7, 22) 0px, transparent 50%),
                                              radial-gradient(at 70% 10%, rgb(30, 0, 60) 0px, transparent 50%),
                                              radial-gradient(at 25% 25%, rgb(16, 0, 37) 0px, transparent 50%),
                                              radial-gradient(at 60% 15%, rgb(20, 5, 50) 0px, transparent 50%),
                                              radial-gradient(at 15% 90%, rgb(10, 20, 45) 0px, transparent 50%),
                                              radial-gradient(at 40% 15%, rgb(5, 10, 35) 0px, transparent 50%),
                                              radial-gradient(at 10% 10%, rgb(15, 0, 40) 0px, transparent 50%)`;
        document.body.style.backgroundColor = "#000016";
        document.getElementById("btn-projetos").style.color = "white";
        document.getElementById("changeBgBtn").innerHTML = 'Light Mode <i class="fa-solid fa-sun"></i>';
    } else {
        mudarCorFundo();
    }
});

document.getElementById('changeBgBtn').addEventListener('click', function () {
    if (document.body.classList.contains("light-theme")) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        document.getElementById("changeBgBtn").innerHTML = 'Light Mode <i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        document.getElementById("changeBgBtn").innerHTML = 'Dark Mode <i class="fa-solid fa-moon"></i>';
    }
});
