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