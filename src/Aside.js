export default function Aside() {
    return (
        <aside>
            <section class="sidebar">   
                <div>
                    <User/>
                    <Sugestao usuario="catanacomics" desc="Catana" src="./images/9gag.png"/>
                    <Sugestao usuario="catanacomics" desc="Catana" src="./images/9gag.png"/>
                    <Sugestao usuario="catanacomics" desc="Catana" src="./images/9gag.png"/>
                    <Sugestao usuario="catanacomics" desc="Catana" src="./images/9gag.png"/>
                    <Sugestao usuario="catanacomics" desc="Catana" src="./images/9gag.png"/>
                </div>
                <Paragrafo/>
            </section>
        </aside>
    );
}

function User() {
    return (
        <div class="user">
            <div>
                <Imagem src="./images/respondeai.png"/>
                <div>
                    <h1>catanacomics</h1>
                    <h2>Catana</h2>
                </div>
            </div>

            <div class="sugestao sugestao2">
                <h2>Sugestões para você</h2>
                <h2>Ver tudo</h2>
            </div>
        </div>
    );
}

function Sugestao(prop) {

    return (
        <div class="sugestao">
            <div class="usuario">
                <img class="img-menor" src={prop.src}alt=""/>
                <div>
                    <h1>{prop.usuario}</h1>
                    <h2>{prop.desc}</h2>
                </div>
            </div>
            <h3>Seguir</h3>
        </div>
    );
}

function Paragrafo() {
    return (
        <div>
            <p>
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </p>
            <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    );
}

function Imagem(prop) {
    return (
        <img src={prop.src} alt=""/>
    );
}