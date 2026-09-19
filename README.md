# Gerador de Senhas versão web
Baseado na lógica do meu gerador de senhas em Java, porém com requisitos de acessibilidade que eu me sinto mais confortável de implementar em uma aplicação web.

# Instruções de uso
Simplesmente abra o [index.html](https://fernandoisnaldo.github.io/Gerador-de-Senhas-Web/) e execute no seu navegador.

# Principais características funcionais
1) Usa gerador de números pseudoaleatórios criptograficamente seguro, com rejeição de viés de módulo.
A fonte de números pseudoaleatórios é a função window.crypto.getRandomValues(), nativa do motor JavaScript de navegadores modernos¹.
2) Formato de aplicação web: executa direto no navegador a partir de qualquer qualquer destes documentos HTML.
3) Emite senhas em formato ASCII ([faixa 33~126 da tabela ASCII](https://pt.wikipedia.org/wiki/ASCII)), sílabas, alfanumérico, hexadecimal e decimal. ([Documentação das sílabas aqui](https://github.com/fernandoisnaldo/Gerador-de-Senhas/wiki/Especifica%C3%A7%C3%B5es-das-s%C3%ADlabas-aleat%C3%B3rias,-Gerador-de-Senhas-do-Fernando-Isnaldo))
   
# Principais características de design, arquitetura e acessibilidade
1) Está disponível em várias línguas.
2) Usa HTML semântico com aria-label em botões, para facilitar para quem é deficiente visual.
3) As senhas geradas possuem cores aleatórias dentro de uma palheta definida no código.²
4) Simplicidade máxima: Escrito praticamente na unha, baseado exclusivamente em tecnologias que o seu navegador já entrega, sem importar APIs ou bibliotecas externas.

   
<sub>Nota 1: Este programa depende de window.crypto.getRandomValues(), padronizada pela API WebCrypto do W3C, que exige saída criptograficamente segura. Os motores modernos (Gecko, Blink, WebKit) implementam essa exigência apoiando-se nos geradores de entropia do sistema operacional. Navegadores desatualizados, adulterados ou motores fora desses três podem não cumprir o contrato, e nesse caso as descrições do nível de segurança deste README não se aplicam.</sub>

<sub>Nota 2: As cores para funções decorativas aleatórias também são selecionadas via window.crypto.getRandomValues(), por razões de escopo de projeto. Adicionar uma implementação de geração pseudoaleatória inferior (ou seja, Math.random), mesmo num contexto onde isso não piora segurança, significaria maior complexidade de código e de auditoria, com nenhum benefício prático em performance.</sub>


# Considerações finais

Este programa é um software livre: pode ser modificado, usado e redistribuído nos termos da GPL v3 ou posterior; NÃO HÁ GARANTIA.

# Ver também
 [Gerador de Senhas versão CLI](https://github.com/fernandoisnaldo/Gerador-de-Senhas) (Java)
