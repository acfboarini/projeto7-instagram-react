export default function Post() {
    return (
        <div class="post">
            <Conteudo/>
            <Imagem src="./images/gato-telefone.png"/>
            <Conteudo2/>
            <Curtidas/>
            <Comentarios/>
            <AddComentario/>
        </div>
    );
}

function Conteudo() {
    return (
        <div class="conteudo1">
            <div class="nome">
                <Imagem src="./images/respondeai.png"/>
                <h1>Meowed</h1>
            </div>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    );
}

function Conteudo2() {
    let icones = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
    return (
        <div class="conteudo1">
            <div class="nome">
                {
                    icones.map(icone => {
                        return <IonIcon name={icone}/>
                    })
                }
            </div>
            <IonIcon name="bookmark-outline"/>
        </div>
    );
}

function Curtidas() {
    return (
        <div class="conteudo1">
            <div class="nome">
                <Imagem src="./images/respondeai.png" alt=""/>
                <h1>
                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </h1>
            </div>
        </div>
    );
}

function Comentarios() {
    return (
        <div class="conteudo1">
            <h1>diegopinho</h1>
            <ion-icon class="like-comentario" name="heart-outline"/>
        </div>
    );
}

function AddComentario() {
    return (
        <div class="conteudo1">
            <IonIcon name="happy-outline"/>
            <input type="text" placeholder="Adicione um comentario..."/>
            <a href="#">Publicar</a>
        </div>
    );
}

function Imagem(prop) {
    return (
        <img src={prop.src} alt=""/>
    );
}

function IonIcon(prop) {
    return (
        <ion-icon name={prop.name}></ion-icon> 
    );
}