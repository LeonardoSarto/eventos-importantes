const countdownLabel = document.querySelector('.countdown-label')
const countdownItemsAnimeinga = document.querySelectorAll('.countdown-value-animeinga')
const countdownItemsCancelar = document.querySelectorAll('.countdown-value-cancelar')
const audio = [new Audio('assets/musics/cupid.mp3'), new Audio('assets/musics/creep.mp3'),
    new Audio('assets/musics/girls-like-me-dont-cry.mp3'), new Audio('assets/musics/collide-sped-up.mp3')];
let indiceAudio = 0;

// Define a data do evento (31 de maio de 2023 às 21h)
const eventDateAnimeinga = new Date('2023-07-16T08:00:00')
const eventDateCancelar = new Date('2021-01-01T00:00:00')

function updateCountdownAnimeinga() {
    const currentDate = new Date()
    const diff = eventDateAnimeinga - currentDate

    // Calcula o tempo restante em dias, horas, minutos e segundos
    const days = Math.floor(diff / 1000 / 60 / 60 / 24)
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24
    const minutes = Math.floor(diff / 1000 / 60) % 60
    const seconds = Math.floor(diff / 1000) % 60

    // Atualiza os valores do contador na tela
    countdownItemsAnimeinga[0].textContent = days.toString().padStart(2, '0')
    countdownItemsAnimeinga[1].textContent = hours.toString().padStart(2, '0')
    countdownItemsAnimeinga[2].textContent = minutes.toString().padStart(2, '0')
    countdownItemsAnimeinga[3].textContent = seconds.toString().padStart(2, '0')

    // Atualiza a mensagem do contador
    countdownLabel.textContent = 'Dias'
}

function updateCountdownCancelar() {
    const currentDate = new Date()
    const diff = currentDate - eventDateCancelar

    // Calcula o tempo restante em dias, horas, minutos e segundos
    const days = Math.floor(diff / 1000 / 60 / 60 / 24)
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24
    const minutes = Math.floor(diff / 1000 / 60) % 60
    const seconds = Math.floor(diff / 1000) % 60

    // Atualiza os valores do contador na tela
    countdownItemsCancelar[0].textContent = days.toString().padStart(2, '0')
    countdownItemsCancelar[1].textContent = hours.toString().padStart(2, '0')
    countdownItemsCancelar[2].textContent = minutes.toString().padStart(2, '0')
    countdownItemsCancelar[3].textContent = seconds.toString().padStart(2, '0')

    // Atualiza a mensagem do contador
    countdownLabel.textContent = 'Dias'
}

function startCountdown() {
    updateCountdownAnimeinga()
    updateCountdownCancelar()
}
// Executa a função startCountdown assim que a página for carregada
document.addEventListener('DOMContentLoaded', startCountdown)

// Executa a função updateCountdown a cada segundo
setInterval(updateCountdownAnimeinga, 1000)
setInterval(updateCountdownCancelar, 1000)

audio[indiceAudio].addEventListener("ended", function (e) {
    nextMusic()
})
function startsMusic() {
    if (!audio[indiceAudio].paused) {
        document.getElementById("play-pause").classList.add("fa-play")
        document.getElementById("play-pause").classList.toggle("fa-pause")
        audio[indiceAudio].pause();
    } else {
        document.getElementById("play-pause").classList.toggle("fa-play")
        document.getElementById("play-pause").classList.add("fa-pause")
        audio[indiceAudio].play()
    }
}

function stopMusic() {
    audio[indiceAudio].currentTime = 0
    startsMusic()
}

async function nextMusic() {
    if(audio[indiceAudio].duration > 0 && !audio[indiceAudio].paused) {
        if(indiceAudio + 1 < audio.length) {
            stopMusic()
            indiceAudio++
            startsMusic()
        } else {
            alert("Última música da playlist")
        }
    } else {
        alert("Dê o play para pular de música")
    }
}

async function previousMusic() {
    if(audio[indiceAudio].duration > 0 && !audio[indiceAudio].paused) {
        stopMusic()
        if(indiceAudio - 1 >= 0) {
            indiceAudio--
        }
        startsMusic()
    } else {
        alert("Dê o play para voltar de música")
    }
}

document.getElementById("customRange").value = audio[indiceAudio].volume * 100
document.getElementById("customRange").addEventListener("input", function(e) {
    audio[indiceAudio].volume = this.value / 100;
})
