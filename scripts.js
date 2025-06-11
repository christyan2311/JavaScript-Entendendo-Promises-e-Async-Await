const uploadButton = document.getElementById('upload-btn');
const inptUpload = document.getElementById('image-upload');

uploadButton.addEventListener('click', () => {
    inptUpload.click();
});

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({url : leitor.result, nome: arquivo.name});
        };
        leitor.onerror = () => {
            reject(`Erro ao ler o arquivo: ${arquivo.name}`);
        };
        leitor.readAsDataURL(arquivo);
    });
}

const imagemPrincipal = document.querySelector('main-imagem');
const nomeDaImagem = document.querySelector('.container-imagem-nome p');

inptUpload.addEventListener('change', async (event) => {
    const arquivo = event.target.files[0];
    if (arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeDaImagem.textContent = conteudoDoArquivo.nome;
        } catch (error) {
            console.error(error);
        }
    }
})