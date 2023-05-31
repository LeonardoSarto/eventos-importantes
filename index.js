const countdownLabel = document.querySelector('.countdown-label')
const countdownItemsFoz = document.querySelectorAll('.countdown-value-foz')
const countdownItemsAnimeinga = document.querySelectorAll('.countdown-value-animeinga')

// Define a data do evento (31 de maio de 2023 às 21h)
const eventDateFoz = new Date('2023-05-31T21:00:00')
const eventDateAnimeinga = new Date('2023-07-16T08:00:00')

function updateCountdown() {
    const currentDate = new Date()
    const diff = eventDateFoz - currentDate

    // Calcula o tempo restante em dias, horas, minutos e segundos
    const days = Math.floor(diff / 1000 / 60 / 60 / 24)
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24
    const minutes = Math.floor(diff / 1000 / 60) % 60
    const seconds = Math.floor(diff / 1000) % 60

    // Atualiza os valores do contador na tela
    countdownItemsFoz[0].textContent = days.toString().padStart(2, '0')
    countdownItemsFoz[1].textContent = hours.toString().padStart(2, '0')
    countdownItemsFoz[2].textContent = minutes.toString().padStart(2, '0')
    countdownItemsFoz[3].textContent = seconds.toString().padStart(2, '0')

    // Atualiza a mensagem do contador
    countdownLabel.textContent = 'Dias'
}

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

function startCountdown() {
    updateCountdown()
    updateCountdownAnimeinga()
}
// Executa a função startCountdown assim que a página for carregada
document.addEventListener('DOMContentLoaded', startCountdown)

// Executa a função updateCountdown a cada segundo
setInterval(updateCountdown, 1000)
setInterval(updateCountdownAnimeinga, 1000)
