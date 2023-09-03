const gifts = [
    {
        name: "Jantar Romântico",
        image: "../static/images/gifts/images/Miojo.jpg",
        price: "R$ 2,80",
        qrcode: "../static/images/gifts/qrcode/Miojo.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d52040000530398654042.805802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62520514PresenteJantar50300017br.gov.bcb.brcode01051.0.06304F2C4"
    },
    {
        name: "Kit de Spa Caseiro",
        image: "../static/images/gifts/images/SoapBubble.png",
        price: "R$ 9,99",
        qrcode: "../static/images/gifts/qrcode/SoapBubble.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d52040000530398654049.995802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62520514PresenteKitSpa50300017br.gov.bcb.brcode01051.0.063044853"
    },
    {
        name: "Calmante da Noiva",
        image: "../static/images/gifts/images/VelhoBarreiro.png",
        price: "R$ 13,43",
        qrcode: "../static/images/gifts/qrcode/VelhoBarreiro.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d520400005303986540513.435802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62590521PresenteCalmanteNoiva50300017br.gov.bcb.brcode01051.0.06304A9F7"
    },
    {
        name: "Curso de Dança Avançado",
        image: "../static/images/gifts/images/CDIvete.png",
        price: "R$ 30,00",
        qrcode: "../static/images/gifts/qrcode/CDIvete.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d520400005303986540530.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62560518PresenteCursoDanca50300017br.gov.bcb.brcode01051.0.063042DBE"
    },
    {
        name: "Despedida de Solteiro da Noiva",
        image: "../static/images/gifts/images/Nun.png",
        price: "40 Pai-Nosso",
        qrcode: "../static/images/gifts/qrcode/Pray.jpg",
        pixCopy: ""
    },
    {
        name: "Travessa de Inox",
        image: "../static/images/gifts/images/Platter.jpeg",
        price: "R$ 70,00",
        qrcode: "../static/images/gifts/qrcode/Platter.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d520400005303986540570.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62540516PresenteTravessa50300017br.gov.bcb.brcode01051.0.063048B0D"
    },
    {
        name: "Liquidificador",
        image: "../static/images/gifts/images/Mixer.jpg",
        price: "R$ 80,00",
        qrcode: "../static/images/gifts/qrcode/Mixer.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d520400005303986540580.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62600522PresenteLiquidificador50300017br.gov.bcb.brcode01051.0.06304C28F"
    },
    {
        name: "Conjunto de Talheres",
        image: "../static/images/gifts/images/Cultery.jpg",
        price: "R$ 100,00",
        qrcode: "../static/images/gifts/qrcode/Cultery.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d5204000053039865406100.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62540516PresenteTalheres50300017br.gov.bcb.brcode01051.0.0630409CB"
    },
    {
        name: "Sanduicheira",
        image: "../static/images/gifts/images/SandwichMaker.jpeg",
        price: "R$ 110,00",
        qrcode: "../static/images/gifts/qrcode/SandwichMaker.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d5204000053039865406110.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62580520PresenteSanduicheira50300017br.gov.bcb.brcode01051.0.063040254"
    },
    {
        name: "Mixer",
        image: "../static/images/gifts/images/Mix.jpeg",
        price: "R$ 130,00",
        qrcode: "../static/images/gifts/qrcode/Mix.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d5204000053039865406130.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62510513PresenteMixer50300017br.gov.bcb.brcode01051.0.063041548"
    },
    {
        name: "Espremedor de Laranja",
        image: "../static/images/gifts/images/Juicer.jpeg",
        price: "R$ 160,00",
        qrcode: "../static/images/gifts/qrcode/Juicer.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d5204000053039865406160.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62560518PresenteEspremedor50300017br.gov.bcb.brcode01051.0.063048435"
    },
    {
        name: "Jogo de Panelas",
        image: "../static/images/gifts/images/Pan.jpg",
        price: "R$ 200,00",
        qrcode: "../static/images/gifts/qrcode/Pan.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d5204000053039865406200.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62530515PresentePanelas50300017br.gov.bcb.brcode01051.0.063048122"
    },
    {
        name: "Batedeira",
        image: "../static/images/gifts/images/Mixr.jpeg",
        price: "R$ 250,00",
        qrcode: "../static/images/gifts/qrcode/Mixr.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d5204000053039865406250.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62550517PresenteBatedeira50300017br.gov.bcb.brcode01051.0.06304C94D"
    },
    {
        name: "Aspirador",
        image: "../static/images/gifts/images/Cleaner.jpg",
        price: "R$ 270,00",
        qrcode: "../static/images/gifts/qrcode/Cleaner.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d5204000053039865406270.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62550517PresenteAspirador50300017br.gov.bcb.brcode01051.0.063045FF5"
    },
    {
        name: "Airfriyer",
        image: "../static/images/gifts/images/Airfryer.jpg",
        price: "R$ 300,00",
        qrcode: "../static/images/gifts/qrcode/Airfryer.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d5204000053039865406300.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62550517PresenteAirfriyer50300017br.gov.bcb.brcode01051.0.063048F59"
    },
    {
        name: "Cafeteira",
        image: "../static/images/gifts/images/CoffeMachine.jpeg",
        price: "R$ 350,00",
        qrcode: "../static/images/gifts/qrcode/CoffeMachine.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d5204000053039865406350.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62550517PresenteCafeteira50300017br.gov.bcb.brcode01051.0.06304A466"
    },
    {
        name: "Jogo de Cama",
        image: "../static/images/gifts/images/BeddingSet.jpeg",
        price: "R$ 450,00",
        qrcode: "../static/images/gifts/qrcode/BeddingSet.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d5204000053039865406450.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62560518PresenteJogoDeCama50300017br.gov.bcb.brcode01051.0.06304CB42"
    },
    {
        name: "Ar-Condicionado",
        image: "../static/images/gifts/images/Air.jpg",
        price: "R$ 700,00",
        qrcode: "../static/images/gifts/qrcode/Air.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d5204000053039865406700.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62600522PresenteArcondicionado50300017br.gov.bcb.brcode01051.0.063043A22    "
    },
    {
        name: "Fogão",
        image: "../static/images/gifts/images/Stove.jpg",
        price: "R$ 1000,00",
        qrcode: "../static/images/gifts/qrcode/Stove.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d52040000530398654071000.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62510513PresenteFogao50300017br.gov.bcb.brcode01051.0.0630493B6"
    },
    {
        name: "Geladeira",
        image: "../static/images/gifts/images/Refrigerator.jpg",
        price: "R$ 1200,00",
        qrcode: "../static/images/gifts/qrcode/Refrigerator.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d52040000530398654071200.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62550517PresenteGeladeira50300017br.gov.bcb.brcode01051.0.0630406F0"
    },
    {
        name: "Lua de Mel",
        image: "../static/images/gifts/images/Trip.jpg",
        price: "R$ 1500,00",
        qrcode: "../static/images/gifts/qrcode/Trip.png",
        pixCopy: "00020126580014br.gov.bcb.pix01361936c090-08f4-4c29-b498-4f9a4627d07d52040000530398654071500.005802BR5925CAIO CHAVES BEZERRA ROCHA6014RIO DE JANEIRO62540516PresenteLuaDeMel50300017br.gov.bcb.brcode01051.0.06304978D"
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
    
    var span = document.createElement('a')
    span.textContent = "Pix Copia e Cola"
    span.onclick = function() {
        document.execCommand("copy");
      }
      
      span.addEventListener("copy", function(event) {
        event.preventDefault();
        if (event.clipboardData) {
          event.clipboardData.setData("text/plain", gifts[num].pixCopy);
          alert("Código Pix Copia e Cola Copiado!");
        }
      });

    var text = document.createElement('p')
    text.setAttribute('class', 'textPopup');
    text.textContent = "Muito Obrigado!"

    filha.appendChild(button);
    filha.appendChild(image);
    filha.appendChild(span);
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