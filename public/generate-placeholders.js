// Este é um script para gerar imagens de placeholder para a timeline
// Execute no navegador para baixar as imagens para sua pasta timeline-images

const eventImages = [
    { name: 'fundacao-2015.jpg', width: 800, height: 500 },
    { name: 'templo-2017.jpg', width: 800, height: 500 },
    { name: 'celulas-2019.jpg', width: 800, height: 500 },
    { name: 'social-2021.jpg', width: 800, height: 500 },
    { name: 'ampliacao-2023.jpg', width: 800, height: 500 }
];

// Para cada evento, gere uma URL para uma imagem de placeholder do Placekitten
eventImages.forEach(image => {
    const label = image.label || image.name;
    const text = encodeURIComponent(label);
    const url = `https://placehold.co/${image.width}x${image.height}?text=${text}`;

    console.log(`Imagem para ${image.name}:`);
    console.log(url);
});

const pastoresImages = [
    { name: 'pastor1.jpg', width: 400, height: 400, label: 'Pastor Titular' },
    { name: 'pastor2.jpg', width: 400, height: 400, label: 'Pastor Auxiliar' },
    { name: 'pastora1.jpg', width: 400, height: 400, label: 'Pastora de Louvor' },
    { name: 'pastor3.jpg', width: 400, height: 400, label: 'Pastor de Missões' },
];

// Para cada pastor, gere uma URL para uma imagem de placeholder
pastoresImages.forEach(image => {
    const label = image.label || image.name;
    const text = encodeURIComponent(label);
    const url = `https://placehold.co/${image.width}x${image.height}?text=${text}`;

    console.log(`Imagem para ${image.name}:`);
    console.log(url);
});

const cultosImages = [
    { name: 'culto-adoracao.jpg', width: 300, height: 200, label: 'Culto de Celebração' },
    { name: 'culto-oracao.jpg', width: 300, height: 200, label: 'Culto de Oração' },
    { name: 'culto-jovem.jpg', width: 300, height: 200, label: 'Culto de Jovens' },
    { name: 'culto-celebracao.jpg', width: 300, height: 200, label: 'Culto de Família' },
    { name: 'culto-casais.jpg', width: 300, height: 200, label: 'Culto de Casais' }
]

// Para cada culto, gere uma URL para uma imagem de placeholder
cultosImages.forEach(image => {
    const label = image.label || image.name;
    const text = encodeURIComponent(label);
    const url = `https://placehold.co/${image.width}x${image.height}?text=${text}`;

    console.log(`Imagem para ${image.name}:`);
    console.log(url);
});

/*
Instruções:
1. Abra as URLs acima no navegador
2. Salve as imagens com os nomes corretos:
   - Para timeline: fundacao-2015.jpg, templo-2017.jpg, etc. na pasta public/timeline-images
   - Para pastores: pastor1.jpg, pastor2.jpg, etc. na pasta public/pastores
3. Você pode também substituir os placeholders por imagens reais com os mesmos nomes
*/
