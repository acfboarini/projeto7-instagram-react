export default function ConteudoTopo() {
    return (
        <div class="conteudo-topo">
            <Seta/>
            <Stories usuario="Meowed" src="./images/9gag.png"/>
            <Stories usuario="Meowed" src="./images/9gag.png"/>
            <Stories usuario="Meowed" src="./images/9gag.png"/>
            <Stories usuario="Meowed" src="./images/9gag.png"/>
            <Stories usuario="Meowed" src="./images/9gag.png"/>
            <Stories usuario="Meowed" src="./images/9gag.png"/>
            <Stories usuario="Meowed" src="./images/9gag.png"/>
            <Stories usuario="Meowed" src="./images/9gag.png"/>
        </div>
    );
}

function Seta() {
    return (
        <div class="seta">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            <div class="sombra"></div>
        </div>
    );
}

function Stories(prop) {
    return (
        <div class="stories">
            <div class="img-stories">
                <img src={prop.src} alt=""/>
                <img src="./images/stories_background.jpg" alt=""/>
            </div>
            <h2>{prop.usuario}</h2>
        </div>
    );
}