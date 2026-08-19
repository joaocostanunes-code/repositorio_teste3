// Adiciona funcionalidade ao botão de curtir em cada card
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const countSpan = button.querySelector('.like-count');
            let currentLikes = parseInt(countSpan.textContent);
            
            // Incrementa as curtidas
            currentLikes++;
            countSpan.textContent = currentLikes;

            // Efeito visual temporário
            button.style.transform = 'scale(1.1)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
        });
    });
});