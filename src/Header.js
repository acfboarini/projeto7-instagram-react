export default function Header() {
    return (
        <header>
            <Topo/>
            <TopoMobile/>
        </header>
    );
}

function Topo() {
    return (
        <div class="topo">
            <Logo/>
            <Input/>
            <Icones/>
        </div>
    );
}

function Logo() {
    return (
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador-vertical"></div>  
            <img src="./images/logo.png" alt=""/>
        </div>
    );
}

function Input() {
    return (
        <input type="text" placeholder="Pesquisar"></input>
    );
}

function Icones() {

    let icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

    return(
        <div class="icones">
            {
                icones.map(icone => {
                    return <ion-icon name={icone}></ion-icon>
                })
            }
        </div>
    );
}

function TopoMobile() {
    return (
        <div class="topo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src="./images/logo.png" alt=""/>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    );
}