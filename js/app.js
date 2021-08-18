import {
    listaDeCartas
} from "../assets/components/listaDeCartas.js";
import {
    listaDeImagens
} from "../assets/components/listaDeImagens.js";

export const geraNumeroCarta = (evento) => {
    evento.preventDefault();
    const cartaGerada = Math.floor(Math.random() * 78);
    let numeroCarta = cartaGerada.toString();
    let nomeCarta = listaDeCartas[numeroCarta];
    let linkCarta = listaDeImagens[numeroCarta];

    switch (nomeCarta) {
        case "O Louco":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Passividade, completo abandono, repouso, deixar de resistir. 
            Irresponsabilidade. Inocência. Escolha intuitiva acertada. 
            Domínio dos instintos; capacidade mediúnica. Abstenção.</p>`;
            break;
        case "O Mago":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Destreza, habilidade, finura, diplomacia, eloqüência, 
            capacidade para convencer, espírito alerta, inteligência rápida, 
            homem inquieto nas suas atividades e negócios.</p>`;
            break;
        case "A Sacerdotisa":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">A Sabedoria, a Gnose, a Casa de Deus e do homem, o santuário, 
            a lei, a Cabala, a igreja oculta, a reflexão. Fala também do binário, 
            do princípio feminino, receptivo, materno. Mistério. Intuição. Piedade. 
            Paciência, influência saturnina passiva. Reserva, discrição, silêncio, 
            meditação, fé, confiança atenta. Paciência, sentimento religioso, resignação. 
            Favorável às coisas ocultas.</p>`;
            break;
        case "A Imperatriz":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Sabedoria. Discernimento. Idealismo. Influência solar intelectual. 
            É o arcano da Magia Sagrada, instrumento do poder divino. Gravidez, criatividade, 
            sucesso. Compreensão, inteligência, instrução, encanto, amabilidade. Elegância, distinção, 
            cortesia. Domínio do espírito, abundância, riqueza.</p>`;
            break;
        case "O Imperador":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Firmeza. Afirmação. Consistência. Poder executivo. Influência saturnina-marciana. 
            Concretização, habilidades práticas, ordem, estabilidade, prestígio. Direito, rigor, certeza, 
            firmeza, realização. Energia perseverante, vontade inquebrantável, execução do que está resolvido. 
            Protetor poderoso.</p>`;
            break;
        case "O Hierofante":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">É o arcano do ato da bênção, da iniciação, da demonstração, do ensino. Lei, simbolismo, filosofia, religião. 
            Dever. Moral. Consciência. O Santo. Autoridade moral, sacerdócio. Proteção, lealdade. Observância das convenções, 
            respeitabilidade. Ensino, conselhos equilibrados. Benevolência, generosidade indulgente, perdão. Mansidão. Busca de 
            sentido, revelação, hora da verdade, confiança, indicações do caminho da salvação.</p>`;
            break;
        case "Os Amantes":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Sentimento. Livre arbítrio. Maioridade. Prova. Escolha. Encadeamento, enredo, abraço, luta, antagonismo, combinação, 
            equilíbrio. Matrimônio, ligação, união. Integração de ambos os sexos ao poder gerador do universo. Decisão voluntária, 
            eleição. Votos, aspirações, desejos. Exame, deliberações, responsabilidades. Afetos.</p>`;
            break;
        case "O Carro":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Contemplação ativa, repouso. Vitória, triunfo. O setenário sagrado, a realeza, o sacerdócio. Magistério. Superioridade. 
            Realização. Êxito legítimo, avanço merecido. Talento, dons, capacidade, aptidões postas em marcha. Tato para governar, diplomacia, 
            direção competente. Conciliação dos antagonismos, condução de forças divergentes. Progresso, mobilidade, viagens por terra.</p>`;
            break;
        case "A Força":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Virtude. Coragem. Potência anímica. Integração harmoniosa das forças vitais. Força moral, autodisciplina, controle. Energia moral, 
            calma, coragem. Espírito que domina a matéria. A inteligência que doma a brutalidade. Subjugação das paixões. Lucro nos empreendimentos 
            empresariais.</p>`;
            break;
        case "O Heremita":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">O Iniciado, o buscador incansável. Sabedoria, iluminação, estudo, autoconhecimento. Meditação, recolhimento, saber desligar-se. 
            Reavaliação da vida e dos objetivos. Concentração, silêncio. Profundidade. Prudência. Reserva. Limites. Influência saturnina. 
            Austeridade, moderação, sobriedade, discrição. Médico experiente, sábio que cala seus segredos. Celibato. Castidade.</p>`;
            break;
        case "A Roda da fortuna":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Os ciclos sucessivos na natureza e na vida humana. As fases da manifestação, o movimento de ascensão e de declínio. 
            A mobilidades da coisas, as Influências lunares e mercurianas. Boa sorte, louvor, honra. Alternativas da sorte. Instabilidade. 
            Esperteza, presença de espírito que não deixa escapar as boas oportunidades. Iniciativa feliz, adivinhação de ordem prática, sorte. 
            Êxito casual, como o ganho na loteria. Espontaneidade, disposição inventiva. Animação, brio, bom humor.</p>`;
            break;
        case "A Justica":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
             <p class="texto__carta">Justiça, equilíbrio, ordem. Capacidade de julgamento. Conciliação entre o ideal e o possível. Harmonia. Objetividade, regularidade, 
             método. Balança, avaliação, atração e repulsão, vida e temor, promessa e ameaça. Estabilidade, ordem, persistência, normalidade. 
             Lei, disciplina, lógica, coordenação. Flexibilidade, adaptação às necessidades. Opiniões moderadas. Razão, sentido prático. 
             Administração, economia. Obediência. Soluções boas e justas; equilíbrio, correção, abandono de velhos hábitos.</p>`;
            break;
        case "O Enforcado":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Abnegação. Aceitação do destino ou do sacrifício. Provas iniciáticas. Retificação do conhecimento. Gestação. Exemplo, ensino, 
            lição pública. Desinteresse, esquecimento de si mesmo. Submissão ao dever, sonhos generosos. Patriotismo, apostolado. Filantropia, 
            entrega a uma causa. Sacrifício pessoal. Idéias voltadas para o futuro. Semente. Mudança de vida, iniciação, abertura espiritual, 
            sacrifício por algo valioso. Paz interior, nova visão do mundo.</p>`;
            break;
        case "A Morte":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Grandes transmutações e novos espaços de realização. Dominação e força. Renascimento, criação e destruição. Fatalidade irredutível. 
            Fim necessário. Fim de uma fase. Abandono de velhos hábitos. Profundidade, penetração intelectual, pensar metafísico. Discernimento severo, 
            sabedoria drástica. Resignação, estoicismo, dom para enfrentar situações difíceis. Indiferença, desapego, desilusão.</p>`;
            break;
        case "A Temperanca":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">A alquimia, a transmutação dos elementos. Renovação da vida, influência celeste, circulação, adaptação. Serenidade. Harmonia. 
            Equilíbrio. Tolerância, paciência, praticidade, felicidade. Aceitação dos acontecimentos, flexibilidade para adaptar-se às circunstâncias. 
            Educação, trato social. Caráter elástico para enfrentar as transformações. Temperamento descuidado.</p>`;
            break;
        case "O Diabo":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">As provas e provações. As tentações e seduções. Magias. Desordem. Paixão. Luxúria. Dependência. Intercâmbio, eloqüência, mistério, 
            força emocional. Paixões indomáveis. Atração sexual. Ação mágica, magnetismo. Capacidade milagreira. Poder oculto, exercício de influências 
            misteriosas. Proteção contra as forças obscuras e os encantamentos.</p>`;
            break;
        case "A Torre":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Rompimento das formas aprisionadoras, liberação para um novo início. Desafios dos momentos de transição. Destruição da rigidez. 
            Abertura. Conhecimento. Desmoronamento e queda. Alterações, subversões, mudanças, debilidades. Libertação da alma aprisionada; 
            conhecimento súbito. Parto, crise saudável. Modificação traumática, separação repentina. Perdas, insegurança. Desconfiança em si mesmo,
             inquietação provocada por negócios arriscados. Benefício recebido devido aos erros de outras pessoas. Austeridade, uma tendência à timidez. 
             Temperamento piedoso, religiosidade prática que não deprecia o material.</p>`;
            break;
        case "A Estrela":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Esperança, confiança. Idealismo. Imortalidade. Plenitude. Beleza. Natureza. O céu da alma. Influência moral da idéia sobre as formas. 
            Pureza, entrega às influências naturais, sadias. Confiança no destino. Plenitude e sensibilidade poética, intuição. Bondade, espírito compassivo. 
            Energia, convalescença.</p>`;
            break;
        case "A Lua":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">A inteligência instintiva, os ciclos vitais. Os elementos da natureza, o mundo visível, a luz refletida, as formas materiais, o simbolismo. 
            Imaginação. Reflexão e reflexos. Aparências. Ilusões. O momento de reavaliar a direção, de buscar inspiração no retorno à fonte. A objetividade,
            o mundo sensível, instintivo, vital. Experimentação, trabalho, penosa conquista da verdade. Instrução pela dor; trabalho cansativo, mas necessário. 
            Vidência passiva, receptividade, sensibilidade, lucidez. Navegação, mudança. Inconstância, insegurança, medo. Irracionalidade, fantasias, penumbra.</p>`;
            break;
        case "O Sol":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Vitalidade, alegria. Ressurreição diária ao final da noite. Intuição, clareza. O princípio celeste. Luz. Razão. Concórdia. Influência solar. 
            Discernimento límpido, clareza de juízo e de expressão. Talento literário ou artístico. Paz, harmonia, bom acordo. Felicidade conjugal. 
            Fraternidade, inteligência e bons sentimentos. Reputação, glória, celebridade. Alegria, sucesso, vitalidade, força, vivacidade. Compreensão, calor, amor, crescimento.</p>`;
            break;
        case "O Julgamento":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Os julgamentos essenciais, a avaliação dos rumos da existência. O despertar. Exame de consciência. Sopro redentor. Renovação. A promessa da vida eterna. Entusiasmo, 
            exaltação emocional, intensidade dos sentimentos, espiritualidade. Capacidades ocultas, dom de adivinhação. Atos prodigiosos, medicina milagrosa. Santidade, doação. 
            Renovação, nascimento, retorno de assuntos do passado ou sua atualização. Recados, propaganda, proselitismo, apostolado. Estar sujeito à avaliação de outros, ser julgado 
            por suas ações</p>`;
            break;
        case "O Mundo":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Finalização, realização. Recompensa. Apoteose. Encontrar o próprio lugar no mundo. Centralizar-se. Alegria de viver. O sensível, a carne, a vida transitória. 
            Sorte grande, êxito completo. Coroamento da obra, finalização de um processo. Força decisiva. Circunstâncias muito favoráveis, meio propício. Integridade absoluta. 
            Contemplação envolvida. Êxtase. Alegria, reconhecimento, riqueza. Representa o elemento feminino. É uma carta muito individual.</p>`;
            break;
        case "Ás de Bastões":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Significa nascimento, começo, criação, anuncia dinheiro, herança, fortuna próxima, êxito nos negócios financeiros. Seguida de Ás de Ouros ou de Sete de Paus, 
            indica lucro, grande êxito nos negócios, entrada de dinheiro, prosperidade no comércio. Denota inteligência criadora, trabalhos úteis, êxito, empreendimentos que trazem consigo seus 
            elementos de êxito.</p>`;
            break;
        case "Dois de Bastões":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Também pode significar surpresa, admiração, encantamento, emoção, perturbação, temor. Indica sofrimento físico, doença, tristeza, melancolia, aflição, desolação, temor. Denota divisão dos empreendimentos, obstáculos imprevistos.</p>`;
            break;
        case "Três de Bastões":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Simboliza a força estabelecida, o empreendimento, o esforço, as transações, o comércio, o transporte de mercadorias. Também significa cooperação eficaz em negócios, como se o bem-sucedido príncipe olhasse para o nosso lado com a finalidade de nos ajudar. Fim de perturbações, suspensão ou cessação de adversidade, fadigas e decepções. Significa empreendimento, começo, descoberta, esforço, achado. Denota começo de êxito nos empreendimentos, inovações felizes, espírito de invenção.</p>`;
            break;
        case "Quatro de Bastões":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Vida campestre, porto de refúgio, festa pela colheita doméstica, concórdia, harmonia, prosperidade. Repouso, paz e o perfeito trabalho. Progresso, felicidade. Significa descanso, associação, aliança, reunião, contrato, êxito, adiantamento. Pressagia realização dos empreendimentos, empresas sérias e estáveis.</p>`;
            break;
        case "Cinco de Bastões":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Significa ouro, riqueza, opulência, luxo, abundância. Pressagia a ajuda de circunstâncias favoráveis ao êxito dos empreendimentos, se o consulente não exceder o fim a que se propõe. Deve evitar a cólera, o orgulho e as paixões brutais.</p>`;
            break;
        case "Seis de Bastões":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">É um vencedor triunfando, mas é também uma grande notícia, que pode ser levada solenemente por um mensageiro; é a expectativa coroada com o seu próprio desejo, a coroa da esperança, etc.</p>`;
            break;
        case "Sete de Bastões":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Significa conferencia, colóquio, conversa, discussão, troca, comércio, negócio, correspondência. Conforme o consulente, anuncia fraqueza de amor; porém, seguido de Sete de Moedas e de Nove de Bastões, denota abundância de bens e herança de parentes afastados. Representa a posse de todos os meios que fazem triunfar. Empreendimentos que trazem grandes lucros. É o emblema da matéria submetida as mil combinações da inteligência. Empreendimentos bem sucessidos, coroados de êxito.</p>`;
            break;
        case "Oito de Bastões":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Significa campo, agricultura, bens imóveis, divertimento, alegria, paz, tranqüilidade. É sinal de viagens por causa de dinheiro e de grandes negócios, felicidade certa. Denota empreendimentos que podem trazer lutas e discussões, porém serão bem sucedidos.</p>`;
            break;
        case "Nove de Bastões":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Significa atraso, suspensão, adiamento, demora, obstáculo, contrariedade. Dinheiro a receber pelo trabalho. Ao lado do Dez Ouros: alegria por dinheiro. Este Arcano denota: empreendimentos científicos ou mistérios, para cujo êxito é preciso ter prudência e discrição.</p>`;
            break;
        case "Dez de Bastões":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Significa cidade estrangeira, o exterior. Denota prosperidade, ganho, êxito. Porém, se for seguida de Nove de Espadas, indica insucesso, perda de processo. Representa viagens, empreendimentos que têm toda a probabilidade de êxito e estabilidade. Êxito, reputação, celebridade pelas artes ou ciências. Alta recompensa devida ao mérito. Realização de atos que darão alegria e segurança.</p>`;
            break;
        case "Princesa de Bastões":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">É o enviado, o empregado; comunicação, aviso, advertência. Um namorado, um jovem que procura uma moça. Ao lado de uma senhora, anuncia êxito. Ao lado de uma figura masculina, indica que alguém falará por ele. </p>`;
            break;
        case "Cavaleiro de Bastões":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Partida, mudança, fuga, dissensão, separação, abandono. Indicador dos altos empregos secundários, da luta para conquistar uma posição, do poder adquirido pelas lutas. Este Arcano diz: “Age e trabalha; o futuro é um campo que é preciso cultivar. Tanto no bem como no mal, todo trabalho produz frutos”.</p>`;
            break;
        case "Rainha de Bastões":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Mulher do campo, honesta, virtuosa e serviçal. Ao lado de uma figura masculina, denota fidelidade a pessoa representada por esta figura. Junto a outra senhora, representa alguém que se interessa pela pessoa que consulta. Símbolo de um nascimento em posição elevada ou da proteção de uma senhora da alta sociedade. Este Arcano diz: "O seu futuro depende do poder de uma mulher; se você souber procurá-la, por intermédio dela, chegará ao poder.".</p>`;
            break;
        case "Rei de Bastões":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Homem do campo, homem bom e severo, pessoa bem intencionada e honesta. Representa um agricultor, homem consciencioso e justo que protegerá o consulente. É o símbolo do poder adquirido pelo mérito e o trabalho, sendo o emblema da proteção de pessoas altamente colocadas. Este Arcano diz: "Procura para os teus empreendimentos um poderoso protetor. Se tiveres vontade e fé, tu o encontrarás; e ele te elevará".
            Interpretações de Ocultistas e Tarólogos</p>`;
            break;
        case "Ás de Taças":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Representa casa, residência, mesa, festim, alimento, nutrição, convivas, perseverança, assiduidade, coragem. Em assuntos de amor, denota perigo de sedução, paixão violenta e invencível.</p>`;
            break;
        case "Dois de Taças":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Amor, paixão, amizade, afinidade, união, concórdia, simpatia, interação dos sexos. Também aquele desejo que não está na Natureza, mas pelo qual a Natureza é santificada.
            Indica amor, paixão, inclinação, simpatia, atração, amizade, afeição, benevolência, união, concórdia.</p>`;
            break;
        case "Três de Taças":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">A conclusão de algo com plenitude, perfeição e deleite; desfecho feliz, vitória, consecução, alívio, saúde. Expedição, despacho, consumação, fim. Também significa o lado do excesso no gozo físico e os prazeres dos sentidos.</p>`;
            break;
        case "Quatro de Taças":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Cansaço, desgosto, aversão, vexames imaginários. Presentes são oferecidos ao perdulário, mas não lhe trazem consolo. Novidade, novas referências, novas relações.
            Parentesco, família, meio social. Amores sólidos e duráveis, amizades úteis, realização das esperanças, aproximação de uma grande alegria.</p>`;
            break;
        case "Cinco de Taças":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">É considerada uma carta de perda, mas algo permanece; é uma carta de herança, patrimônio, transmissão, mas que não corresponde às expectativas. Também é vista como uma carta de matrimônio, mas não sem amargura ou frustração. Notícias, alianças, afinidade, consangüinidade, ancestralidade, regresso, falsos projetos.</p>`;
            break;
        case "Seis de Taças":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Uma carta do passado e de lembranças, olhando para trás, para a infância; felicidade, prazer, porém vindo do passado. Também novas relações, novos conhecimentos, novos ambientes. O futuro, renovação, que passará logo. O passado, o anterior. Novas relações, novos conhecimentos, novo meio. Má escolha no casamento, por influência de parentes; abandono ou ruptura de casamento.</p>`;
            break;
        case "Sete de Taças":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Belos favores, imagens de reflexão, sentimento, imaginação, coisas vistas no espelho da contemplação; mas nada é sugerido de permanente ou substancial. Desejo, vontade, determinação, projeto.</p>`;
            break;
        case "Oito de Taças":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">ignifica alegria, doçura, tumidez, honra, modéstia. Habitualmente a carta mostra o declínio de uma questão que foi considerada importante, mas é na realidade de pouca significação, para o bem ou para o mal. Grande alegria, felicidade, deleite.</p>`;
            break;
        case "Nove de Taças":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Concórdia, contentamento, bem-estar físico. Vitória, sucesso, vantagem, satisfação para o consulente ou para a pessoa para quem é feita a consulta. Verdade, lealdade, liberdade; mas também erros, imperfeições, etc.</p>`;
            break;
        case "Dez de Taças":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Contentamento, repouso de todo o coração; perfeição nesse estado; também perfeição do amor e da amizade humana. Ao lado de várias cartas de figura, uma pessoa que está defendendo os interesses do consulente; também a cidade ou o país habitado pelo consulente.</p>`;
            break;
        case "Princesa de Taças":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Representa um rapaz louro e esperto. Denota estudo, trabalho, reflexão, observação; jovem serviçal ou militar que deve aparecer dentro de poucos dias e que estará muito relacionado ao consulente.</p>`;
            break;
        case "Cavaleiro de Taças":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Chegada, acolhimento, viagem, proposta, convite, aproximação. Rivalidade no amor, lutas por causa de uma mulher; casamento atrasado, adultério perigoso.</p>`;
            break;
        case "Rainha de Taças":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Sentimentos de altruísmo que o ser humano tem no fundo de si, mas que só pode manifestar atráves do esforço cotidiano de dedicação e afeição. Casamento rico e feliz para um homem. Em geral indica amizade de senhoras de posição.</p>`;
            break;
        case "Rei de Taças":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Homem louro, honesto, íntegro e serviçal. Um homem justo e de posição. Amizade sincera, benevolência de um homem poderoso. Para uma mulher indica casamento rico e com pessoa de alta posição.</p>`;
            break;
        case "Ás de Espadas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Triunfo, o grau excessivo de tudo, conquista, vitória pela força. É uma carta de grande força, tanto no amor como no ódio. A coroa pode ter um significado muito mais alto do que tem habitualmente na esfera da leitura da sorte. Também é interpretada como concepção, nascimento, aumento, multiplicidade.</p>`;
            break;
        case "Dois de Espadas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Representa a interrupção de uma ação concreta, com vistas a um posterior enriquecimento, que se destina a amadurecer este empreendimento. A harmonia e o equilíbrio, coragem, amizade, concórdia em uma situação belicosa. Também indica ternura, afeição, intimidade.</p>`;
            break;
        case "Três de Espadas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Remoção, ausência, demora, divisão, rompimento, dispersão.</p>`;
            break;
        case "Quatro de Espadas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Vigilância, retiro, solidão, repouso do ermitão, exílio, túmulo e féretro. Boa administração, circunspecção, economia, avareza, precaução, testamento.</p>`;
            break;
        case "Cinco de Espadas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Degradação, destruição, revogação, infâmia, desonra, perda. Enterro e funerais.
            Roubo, perda, engano, falsidade, desperdício, destruição, detrimento, diminuição, infelicidade, desonra, infância, sedução. Idéias fixas, vinganças, perigo de ruína por uma idéia má.</p>`;
            break;
        case "Seis de Espadas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Viagem por água, roteiro, caminho, mensageiro, comissão, expediente. Declaração, confissão, publicidade. Também pode ser uma declaração de amor. Indecisão, instabilidade, caminho, passagem, viagem, passeio. Enviado, mensageiro.</p>`;
            break;
        case "Sete de Espadas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Intenção, tentativa, desejo, esperança, confiança; também briga, um plano que pode falhar, aborrecimento. Bom conselho, instrução.</p>`;
            break;
        case "Oito de Espadas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Más notícias, grande aborrecimento, crise, censura, obstáculos, conflito, calúnia; também doença. *Inquietação, dificuldade, oposição, acidente, traição; o que é imprevisto; fatalidade.
            Crítica, posição duvidosa, conflito, combate, portador de más notícias. Se for seguida de Sete de Ouros e se estiver junto de uma figura qualquer, representa lágrimas, discórdia, perda de emprego e de prestígio. Perda de processo, condenação, desgostos, ansiedade.</p>`;
            break;
        case "Nove de Espadas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Morte, fracasso, malogro, atraso, decepção, desaponto, desespero. Prisão, suspeita, dúvida, temor fundado, vergonha.
            Decepção, desengano, atraso em negócios. Sendo seguida de Nove de Ouros ou de Ás de Paus, denota dinheiro que será recebido com atraso. Indica também desgosto, lutas misteriosas, perigo de morte, moléstia grave, envenenamento, inimizades poderosas. É necessário prudência e discrição para vencer obstáculos.</p>`;
            break;
        case "Dez de Espadas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Sofrimento, aflição, lágrimas, tristeza. Vantagem, lucro, sucesso, mas nada permanente. Poder e autoridade. Lágrimas, tristezas, lamentos, aflição. Alternativas de lucros e perdas, infortúnios, desgostos e moléstias.</p>`;
            break;
        case "Princesa de Espadas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Homem jovem e moreno; negativo. Moço avarento, cruel e orgulhoso. Traidor. Espião, vigilante, observador, traição, cálculo, exame. Perigo de morte pública, grande perigo por inimigos ocultos e mesquinhos.</p>`;
            break;
        case "Cavaleiro de Espadas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Bravura, perícia. Força e ímpeto de um homem jovem. Ação heróica. Investida impetuosa para o desconhecido, sem temor. Ataque, agressão, crítica, sátira, zombaria, calúnia, difamação, oposição, resistência. Perigo pelo fogo ou por inimigos ocultos, lutas com pessoas de posição. Aptidão para a carreira militar, porém perigo de morte nesta profissão.</p>`;
            break;
        case "Rainha de Espadas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Viuvez, pobreza, privação, falta. Mulher triste e embaraçada nos seus negócios ou viúva. Se for uma moça que consulta, será traída por aquele a quem ama. Grandes lutas por causa de mulheres, ódios femininos, perigos por ciúmes de mulheres.</p>`;
            break;
        case "Rei de Espadas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Homem em sua inclinação para as atividades intelectuais, mentais, quando acompanhadas pela reflexão. Falso amigo. Pai ruim. Marido brutal e avarento. Para um homem: rival. Para uma mulher: amante.</p>`;
            break;
        case "Ás de Moedas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Contentamento perfeito, felicidade, êxtase, também inteligência pronta, recursos materiais, ouro.</p>`;
            break;
        case "Dois de Moedas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Por um lado, é apresentada como uma carta de alegria, recreação, diversão; mas também é lida como notícias e mensagens por escrito, obstáculos, agitação, perturbação, intrigas. Representa mensagem, carta, correspondência, bilhete. Obstáculos, embaraços, empreendimentos. Significa fortuna dividida, porém probabilidade de associação produtiva.</p>`;
            break;
        case "Três de Moedas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Representa nascimento, grandeza de alma, nobreza, celebridade, renome. Indica fortuna por empreeendimentos habilmente dirigidos, pelo trabalho e pela genialidade. Profissão, trabalho especializado. Também é considerada uma carta de nobreza, aristocracia, renome, glória.</p>`;
            break;
        case "Quatro de Moedas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Significa recompensa, presente, legado, herança, generosidade, benefício. Representa aquisição certa de riqueza, fortuna estável.</p>`;
            break;
        case "Cinco de Moedas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">A carta prediz acima de tudo contratempos materiais. Para alguns cartomantes, é uma carta de amor e amantes – esposa, marido, amigo, amantes; também concordância, afinidade. Significa pensamentos, inspiração, idéia. Dissipação, prodigalidade, idéias variáveis.</p>`;
            break;
        case "Seis de Moedas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Indica aspirações, ambições, esperanças, desejos. Denota bens inesperados, porém perigo de perdê-los por meio de falsos amigos. Presentes, donativos, gratificação. Atenção, vigilância; também o tempo aceito, prosperidade presente.</p>`;
            break;
        case "Sete de Moedas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Significa boas notícias, dinheiro, riqueza, compra, especulação, negócio. Indica fortuna adquirida pelo trabalho pessoal.</p>`;
            break;
        case "Oito de Moedas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Trabalho, emprego, encargo, artesanato, habilidade em ofícios e negócios, talvez na fase preparatória. Representa posição, emprego, processo, contestação. Significa perigo de roubo, grandes esperanças, porém pouco resultado, estando a posição sujeita a dificuldades.</p>`;
            break;
        case "Nove de Moedas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Significa fortuna proveniente de falecimentos, fontes misteriosas e estudos científicos. Prudência, segurança, sucesso, consecução, certeza, discernimento. equeno atraso nos negócios, êxito, segurança, realização. </p>`;
            break;
        case "Dez de Moedas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Representa dinheiro, ganho, retribuição, casa, residência, família, bens imóveis, grande alegria, mudança. Aquisição de bens pelo trabalho, êxito em propriedades e terras. Lucros, riquezas; assuntos de família, arquivos, descendência, domicílio de uma família. Às vezes, oportunidades, donativos, dotes, pensão.</p>`;
            break;
        case "Princesa de Moedas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Moço louro, mensagem, notícia, trabalho, ocupações, generosidade, aplicação. Atividade nas ocupações profissionais e notícias favoráveis sobre assuntos monetários.</p>`;
            break;
        case "Cavaleiro de Moedas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Pessoa amadurecida e responsável. Digna de confiança. Metódica, paciente. Persistente, tem capacidade de levar uma tarefa a bom termo. Organizada, capaz, digna de confiança. Chegada inesperada, visita, vantagem, ganho, lucro, interesse, paz, tranqüilidade. Êxito, porém com grandes lutas, conquista de fortuna, apesar de todos os obstáculos. Paz e tranqüilidade final.</p>`;
            break;
        case "Rainha de Moedas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Moça loura. Opulência, riqueza, luxo, segurança, liberdade. Significa, para um homem, casamento rico e feliz, fortuna pela proteção de senhoras influentes. Boa mulher que ama o consulente e que está satisfeita com ele.</p>`;
            break;
        case "Rei de Moedas":
            var conteudo = `${linkCarta}<h2 class="nome__carta">${nomeCarta}</h2>
            <p class="texto__carta">Ascensão, proteção de um homem muito rico. Para as mulheres: casamento rico, proteções importantes.</p>`;
            break;
        default:
            var conteudo = `<h2 class="nome__carta">Enter the Void</h2>`;
    }

    const interpretacao = document.querySelector('[data-meaning]');

    interpretacao.innerHTML = conteudo;

    console.log(numeroCarta)
    console.log(linkCarta)

}
const botaoTiraCarta = document.querySelector('[data-form-button]');

botaoTiraCarta.addEventListener('click', geraNumeroCarta);