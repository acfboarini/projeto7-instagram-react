export default function Lowbar() {
    let icones = ["home-outline", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
    return (
        <div class="lowbar">
        {
            icones.map(icone => {
            return <ion-icon name={icone}></ion-icon>
            })
        }
        </div>
    );
}