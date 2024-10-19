const testimonialsContainer = document.getElementById('testimonialsContainer');

const testimonialsTexts = [
    "A experiência no curso MaisPraTI foi incrível! Aprendi muito e me sinto preparado para os desafios do mercado de trabalho.",
    "No MaisPraTI, adquiri conhecimentos essenciais para minha carreira e adorei a forma como o conteúdo foi apresentado.",
    "O curso MaisPraTI superou minhas expectativas. Me sinto muito mais confiante para encarar projetos no dia a dia.",
    "O MaisPraTI me proporcionou uma imersão prática e direta no mercado de TI. Saí com as ferramentas certas para crescer na área.",
    "Recomendo o MaisPraTI para todos que querem se destacar no mundo da tecnologia. O aprendizado foi muito enriquecedor!",
    "Fiz o MaisPraTI e fiquei impressionado com a qualidade dos instrutores e do material. Excelente curso!",
    "O curso é bem completo e cobre os principais aspectos que o mercado procura. Me ajudou muito a dar os primeiros passos.",
    "Gostei muito do curso! As aulas são práticas e diretas, o que facilitou meu entendimento dos conceitos.",
    "Aprendi tanto com o MaisPraTI que já estou aplicando os conhecimentos no meu dia a dia de trabalho.",
    "Se você quer crescer na área de TI, o MaisPraTI é o caminho. O curso é dinâmico, prático e vale a pena!"
];



async function getUserInfo(){
    const response = await fetch("https://randomuser.me/api/?results=5");
    const result = await response.json();
    console.log(result);
    setUserInfo(result);
}

function setUserInfo(result) {
    result.results.forEach((user, index) => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimonial');

        if (index % 2 === 0) {
            testimonialDiv.setAttribute('data-aos', 'fade-left');
        } else {
            testimonialDiv.setAttribute('data-aos', 'fade-right');
        }

        const img = document.createElement('img');
        img.src = user.picture.large;
        img.alt = 'Foto do usuário';

        const name = document.createElement('h3');
        name.textContent = user.name.first + " " + user.name.last;

        const text = document.createElement('p');
        text.innerHTML = `"<span>${testimonialsTexts[index]}</span>"`;

        testimonialDiv.appendChild(img);
        testimonialDiv.appendChild(name);
        testimonialDiv.appendChild(text);

        testimonialsContainer.appendChild(testimonialDiv);
    });

}

window.onload = getUserInfo;
