const gifts = [
    {
        name: "Jantar Romântico",
        image: "../static/images/gifts/images/Miojo.jpg",
        price: "R$ 2,80",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Kit de Spa Caseiro",
        image: "../static/images/gifts/images/SoapBubble.png",
        price: "R$ 9,99",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Calmante da Noiva",
        image: "../static/images/gifts/images/VelhoBarreiro.png",
        price: "R$ 13,43",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Curso de Dança Avançado",
        image: "../static/images/gifts/images/CDIvete.png",
        price: "R$ 30,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Despedida de Solteiro da Noiva",
        image: "../static/images/gifts/images/Nun.png",
        price: "40 Pai-Nosso",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Travessa de Inox",
        image: "../static/images/gifts/images/Platter.jpeg",
        price: "R$ 70,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Liquidificador",
        image: "../static/images/gifts/images/Mixer.jpg",
        price: "R$ 80,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Conjunto de Talheres",
        image: "../static/images/gifts/images/Cultery.jpg",
        price: "R$ 100,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Sanduicheira",
        image: "../static/images/gifts/images/SandwichMaker.jpeg",
        price: "R$ 110,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Mixer",
        image: "../static/images/gifts/images/Mix.jpeg",
        price: "R$ 130,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Espremedor de Laranja",
        image: "../static/images/gifts/images/Juicer.jpeg",
        price: "R$ 160,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Jogo de Panelas",
        image: "../static/images/gifts/images/Pan.jpg",
        price: "R$ 200,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Batedeira",
        image: "../static/images/gifts/images/Mixr.jpeg",
        price: "R$ 250,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Aspirador",
        image: "../static/images/gifts/images/Cleaner.jpg",
        price: "R$ 270,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Airfriyer",
        image: "../static/images/gifts/images/Airfryer.jpg",
        price: "R$ 300,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Cafeteira",
        image: "../static/images/gifts/images/CoffeMachine.jpeg",
        price: "R$ 350,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Jogo de Cama",
        image: "../static/images/gifts/images/BeddingSet.jpeg",
        price: "R$ 450,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Ar-Condicionado",
        image: "../static/images/gifts/images/Air.jpg",
        price: "R$ 700,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Fogão",
        image: "../static/images/gifts/images/Stove.jpg",
        price: "R$ 1000,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Geladeira",
        image: "../static/images/gifts/images/Refrigerator.jpg",
        price: "R$ 1200,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
    },
    {
        name: "Lua de Mel",
        image: "../static/images/gifts/images/Trip.jpg",
        price: "R$ 1500,00",
        qrcode: "../static/images/gifts/qrcode/Account.png"
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
    image.src = gifts[num].qrcode;
    
    var text = document.createElement('p')
    text.setAttribute('class', 'textPopup');
    text.textContent = "Muito Obrigado!"

    filha.appendChild(button);
    filha.appendChild(image);
    filha.appendChild(text);

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