import './PostOne.css'
import { FaClock } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

function PostOne() {
    return (
        <section className="post-container">
            <div className="content-post">
                <h1 className="title">
                    COMO ESCOLHER A PELÍCULA IDEAL PARA SUA JANELA DE VIDRO?
                </h1>
                <h2 className="subtitle">
                    Entenda como escolher a melhor película de vidro correta para sua necessidade.
                </h2>
                <div className="sobre">
                    <span>
                        <FaClock /> 4 min. de leitura
                    </span>
                    <span>Por: Paula Amorim</span>
                    <span>Data: 26 fev. 2025</span>
                </div>

                <p>
                    Como saber qual a película ideal para sua janela ou ambiente?
                    Películas são grandes aliados ao vidro por oferecerem diversidade
                    na decoração de ambientes, segurança contra danos solares e possíveis
                    olhares externos. Além da estética, o material também proporciona maior
                    longevidade aos utensílios domésticos, já que evita o desbotamento e
                    ferrugem pela exposição ao sol.
                </p>

                <p>
                    Para compreender a vantagem de cada tipo de película, é necessário
                    saber quais as funções que cada uma proporciona de acordo com a taxa
                    de incidência solar do seu ambiente. Se o propósito é proteção extrema
                    contra raios solares, a película escolhida terá alta proteção contra
                    raios ultravioleta (UV) e infravermelhos (IR). Películas com alta
                    proteção contra danos solares tendem, também, a proteger ambientes
                    internos da visão externa durante o dia e servem como películas de
                    privacidade para janelas ou sacadas envidraçadas.
                </p>

                <p>
                    Caso o propósito seja somente segurança, películas para vidro também
                    oferecem opções em cores variadas e, até, transparentes. Películas de
                    vidro podem ser instaladas em utensílios domésticos como box de banheiro
                    e armários envidraçados, já que películas de segurança evitam estilhaços.
                    Em sua versatilidade, películas para vidro servirão, também, para decoração
                    de ambientes internos e externos, com opções decorativas que auxiliam na
                    separação de escritórios, salas de reuniões e cozinhas.
                </p>

                <h3>PELÍCULA DE PRIVACIDADE E PROTEÇÃO SOLAR</h3>

                <p>
                    Nesta categoria, há uma gama de cores e porcentagens de proteção.
                    <Link href="/sales">Películas fumê</Link>, por exemplo, refletem raios de
                    luz evitando olhares externos para dentro dos ambientes. Películas
                    metalizadas e espelhadas fornecem a mesma proteção solar e segurança
                    em diversas cores. Vale lembrar que películas no estilo citado funcionam
                    quando um ambiente é mais iluminado do que outro, portanto, se a luz
                    interna é mais forte que a externa, a película exerce menos privacidade,
                    como acontece geralmente à noite.
                </p>

                <Image
                    src="/images/demoFume.jpeg"
                    alt="Demonstrativo de película fume"
                    width={800}
                    height={400}
                    priority
                />

                <p>
                    No atual mercado, a tecnologia nos fornece opções transparentes
                    que igualmente protegem contra danos solares, como é o caso da
                    <Link href="/sales"> LG-80</Link> e a <Link href="/sales">nanocerâmica</Link>.
                    Ótima opção para fins comerciais, como vitrines de lojas.
                </p>

                <Image
                    src="/images/demoLg.jpeg"
                    alt="Demonstrativo de película LG-80"
                    width={800}
                    height={400}
                />

                <p>
                    Ainda, para fazer a escolha certa, certifique-se de que a empresa
                    que está contratando mostre a porcentagem de proteção contra raios UV e IR.
                </p>

                <h3>PELÍCULAS DE SEGURANÇA</h3>
                <p>
                    Quando o assunto é somente assegurar que o vidro seja reforçado,
                    há películas especiais para que o vidro não estilhace com tanta força
                    e evite acidentes dentro de casa. Ideal para box de banheiro, janelas
                    finas ou vidro frágil.
                </p>

                <Image
                    src="/images/demoSec.jpeg"
                    alt="Demonstrativo de película de segurança"
                    width={800}
                    height={400}
                />

                <h3>PELÍCULAS DECORATIVAS</h3>
                <p>
                    Películas decorativas complementam o design de interiores de residências
                    e comércio, podendo separar ambientes envidraçados e decorar janelas de teto
                    a chão. Para definir sua escolha de película, converse com seu arquiteto ou
                    designer de interior para melhor selecionar cores e estilos que combinem com a decoração.
                </p>

                <Image
                    src="/images/demoDec.jpg"
                    alt="Demonstrativo de película decorativa"
                    width={800}
                    height={400}
                />

                <h3>CONCLUSÃO</h3>
                <p>
                    Neste artigo, revisamos as possibilidades de películas para vidro de acordo
                    com a necessidade de cada tipo de vidro. Películas contra danos solares tendem
                    a ser mais escuras mas contam, também, com películas claras ideais para fins
                    comerciais. Já películas de segurança evitam vidros estilhaçados em ambientes
                    como banheiro e cozinha. Películas decorativas dão vida a ambientes envidraçados.
                </p>
                <p>
                    Finalmente, vale relembrar a necessidade de encontrar empresas que, acima de tudo,
                    garantem a qualidade de seus produtos apresentando sempre o índice de raios UV e IR,
                    além de consultores especializados que auxiliarão na escolha da melhor película para
                    cada necessidade. Películas são frágeis e, por isso, requerem mão de obra
                    especializada para instalação.
                </p>

            </div>
        </section>
    )
}

export default PostOne

