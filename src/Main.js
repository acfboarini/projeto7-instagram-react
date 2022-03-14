import Aside from "./Aside";
import ConteudoTopo from "./ConteudoTopo";
import Post from "./Post";

export default function Main() {
    return (
        <main>
            <Conteudo/>
            <Aside/>
        </main>
    );
}

function Conteudo() {
    return (
        <section class="conteudo">
            <ConteudoTopo/>
            <Post/>
        </section>
    );
}

