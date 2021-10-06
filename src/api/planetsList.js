import images from '../planetImages/exportImages';

function getRandomNumber() {
    return (Math.floor(Math.random() * 6)+1) * (Math.floor(Math.random() * 6)+1);
}

const planetList = [
    {
        name: 'Sol',
        distance: 0,
        position: getRandomNumber(),
        velocity: 0.0099,
        scale: 2,
        texture: images.sunImage,
        information: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar, como planetas, planetas anões, asteroides, cometas e poeira, bem como todos os satélites associados a estes corpos, giram ao seu redor.'
    },
    {
        name: 'Mercúrio',
        distance: 4,
        position: getRandomNumber(),
        velocity: 0.0099,
        scale: 0.45,
        texture: images.mercuryImage,
        information: 'Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar.'
    },
    {
        name: 'Vênus',
        distance: 5.5,
        position: getRandomNumber(),
        velocity: 0.007,
        scale: 0.5,
        texture: images.venusImage,
        information: 'Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite.'
    },
    {
        name: 'Terra',
        distance: 7,
        position: getRandomNumber(),
        velocity: 0.003,
        scale: 0.6,
        texture: images.earthImage,
        information: 'A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul.'
    },
    {
        name: 'Marte',
        distance: 8.5,
        position: getRandomNumber(),
        velocity: 0.0035,
        scale: 0.54,
        texture: images.marsImage,
        information: 'Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.'
    },
    {
        name: 'Júpiter',
        distance: 11,
        position: getRandomNumber(),
        velocity: 0.001,
        scale: 0.8,
        texture: images.jupiterImage,
        information: 'Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso!'
    },
    {
        name: 'Saturno',
        distance: 15,
        position: getRandomNumber(),
        velocity: 0.001,
        scale: 0.8,
        texture: images.saturnImage,
        information: 'Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas.'
    },
    {
        name: 'Urano',
        distance: 19,
        position: getRandomNumber(),
        velocity: 0.001,
        scale: 0.8,
        texture: images.uranusImage,
        information: 'Urano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano, o pai de Cronos e o avô de Zeus.'
    },
    {
        name: 'Netuno',
        distance: 22,
        position: getRandomNumber(),
        velocity: 0.001,
        scale: 0.8,
        texture: images.neptuneImage,
        information: 'Netuno ou Neptuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres.'
    }
];

export default planetList;