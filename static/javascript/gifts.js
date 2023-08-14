const gifts = [
    {
        name: "Jantar Romântico",
        image: "../static/images/gifts/images/Miojo.jpg",
        price: "R$ 2,80"
    },
    {
        name: "Curso de Dança Avançado",
        image: "../static/images/gifts/images/CDIvete.png",
        price: "R$ 30,00"
    },
    {
        name: "Kit de Spa Caseiro",
        image: "../static/images/gifts/images/SoapBubble.png",
        price: "R$ 9,99"
    },
    {
        name: "Despedida de Solteiro da Noiva",
        image: "../static/images/gifts/images/Nun.png",
        price: "10 Pai-Nosso"
    },
    {
        name: "Calmante da Noiva",
        image: "../static/images/gifts/images/VelhoBarreiro.png",
        price: "R$ 13,43"
    },
    {
        name: "Liquidificador",
        image: "../static/images/gifts/images/Mixer.jpg",
        price: "R$ 80,00"
    },
    {
        name: "Conjunto de Talheres",
        image: "../static/images/gifts/images/Cultery.jpg",
        price: "R$ 100,00"
    },
    {
        name: "Jogo de Panelas",
        image: "../static/images/gifts/images/Pan.jpg",
        price: "R$ 200,00"
    },
    {
        name: "Aspirador",
        image: "../static/images/gifts/images/Cleaner.jpg",
        price: "R$ 250,00"
    },
    {
        name: "Airfriyer",
        image: "../static/images/gifts/images/Airfryer.jpg",
        price: "R$ 300,00"
    },
    {
        name: "Ar-Condicionado",
        image: "../static/images/gifts/images/Air.jpg",
        price: "R$ 700,00"
    },
    {
        name: "Fogão",
        image: "../static/images/gifts/images/Stove.jpg",
        price: "R$ 1000,00"
    },
    {
        name: "Geladeira",
        image: "../static/images/gifts/images/Refrigerator.jpg",
        price: "R$ 1200,00"
    },
    {
        name: "Lua de Mel",
        image: "../static/images/gifts/images/Trip.jpg",
        price: "R$ 1500,00"
    },
];

const handleOverlayClick = (event) => {

    if (event.target.classList.contains('overlay')) {
        var divParaDeletar = document.querySelector('.overlay');

        if (divParaDeletar) {
            divParaDeletar.remove();
        }
    };
}
const handleClose = () => {
    var divParaDeletar = document.querySelector('.overlay');

    if (divParaDeletar) {
        divParaDeletar.remove();
    }
}

function handlebuttonclick(num) {
    console.log(num)
    var novaDiv = document.createElement('div');
    novaDiv.setAttribute('class', 'overlay');
    novaDiv.addEventListener('click', handleOverlayClick)

    var filha = document.createElement('div');
    filha.setAttribute('class', 'filha');

    var button = document.createElement('img');
    button.setAttribute('class', 'buttonOverlay');
    button.src = "../static/images/Close.png"
    button.addEventListener('click', handleClose);

    var image = document.createElement('img')
    image.setAttribute('class', 'QR');
    image.src = "../static/images/qrcode.png"
    image.src = gifts[num].image;

    filha.appendChild(button);
    filha.appendChild(image);

    novaDiv.appendChild(filha);
    document.body.appendChild(novaDiv);
}

for (let i = 0; i < gifts.length; i++) {
    var divsGifts = document.createElement('div');
    divsGifts.setAttribute('class', 'element-gift')

    var image = document.createElement('img');
    image.src = gifts[i].image;
    image.setAttribute('class', 'imagem');
    image.addEventListener('click', () => {handlebuttonclick(i);});

    var price = document.createElement('div')
    price.textContent = gifts[i].price;
    price.setAttribute('class', 'price');

    var nome = document.createElement('div')
    nome.textContent = gifts[i].name;
    nome.setAttribute('class', 'nome');

    divsGifts.appendChild(image);
    divsGifts.appendChild(nome);
    divsGifts.appendChild(price);
    document.getElementById('gifts').appendChild(divsGifts);
}