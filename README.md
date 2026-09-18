# Gerador de Senhas versão web
Baseado na lógica do meu gerador de senhas em Java

# Instruções de uso
Simplesmente abra o [index.html](https://fernandoisnaldo.github.io/Gerador-de-Senhas-Web/) e execute no seu navegador.

# Principais características funcionais
1) Usa gerador de números pseudoaleatórios criptograficamente seguro, com rejeição de viés de módulo.
A fonte de números pseudoaleatórios é a função window.crypto.getRandomValues(), nativa do motor JavaScript de navegadores modernos.
2) Formato de aplicação web: executa direto no navegador a partir de qualquer qualquer destes documentos HTML.
3) Emite senhas em formato ASCII ([faixa 33~126 da tabela ASCII](https://pt.wikipedia.org/wiki/ASCII)), sílabas, alfanumérico, hexadecimal e decimal. ([Documentação das sílabas aqui](https://github.com/fernandoisnaldo/Gerador-de-Senhas/wiki/Especifica%C3%A7%C3%B5es-das-s%C3%ADlabas-aleat%C3%B3rias,-Gerador-de-Senhas-do-Fernando-Isnaldo))
   
# Principais características de design, arquitetura e acessibilidade
1) Está disponível em várias línguas.
2) Usa HTML semântico com aria-label em botões, para facilitar acessibilidade para quem é cego.
3) As senhas geradas possuem cores aleatórias dentro de uma palheta definida no código.
4) Simplicidade máxima: Escrito praticamente na unha, baseado principalmente em HTML estático, sem nenhuma importação de APIs externas.

Este programa é um software livre: pode ser modificado, usado e redistribuído nos termos da GPL v3 ou posterior.

# Ver também
 [Gerador de Senhas versão CLI](https://github.com/fernandoisnaldo/Gerador-de-Senhas) (Java)
