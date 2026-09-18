# Gerador de Senhas versão web
Baseado na lógica do meu gerador de senhas em Java

# Instruções de uso
Simplesmente abra o [index.html](https://fernandoisnaldo.github.io/Gerador-de-Senhas-Web/) e execute no seu navegador.

# Principais características
1) Usa gerador de números pseudoaleatórios criptograficamente seguro, com rejeição de viés de módulo.
A fonte de números pseudoaleatórios é a função window.crypto.getRandomValues(), nativa do motor JavaScript de navegadores modernos.
4) Formato de aplicação web: executa direto no navegador a partir de qualquer qualquer destes documentos HTML.
5) Emite senhas em formato ASCII ([faixa 33~126 da tabela ASCII](https://pt.wikipedia.org/wiki/ASCII)), sílabas, alfanumérico, hexadecimal e decimal. ([Documentação das sílabas aqui](https://github.com/fernandoisnaldo/Gerador-de-Senhas/wiki/Especifica%C3%A7%C3%B5es-das-s%C3%ADlabas-aleat%C3%B3rias,-Gerador-de-Senhas-do-Fernando-Isnaldo))
6) Design aleatório: As senhas tem suas cores sorteadas a cada geração dentro de uma certa palheta de cores, aproveitando o mesmo gerador criptograficamente seguro para ter estilo aleatório. Este recurso é meramente uma questão de design, sem implicações nem positivas e nem negativas na segurança.
7) Está disponível em várias línguas. 
8) Este programa é um software livre: pode ser modificado, usado e redistribuído nos termos da GPL v3 ou posterior.

# Ver também
 [Gerador de Senhas versão CLI](https://github.com/fernandoisnaldo/Gerador-de-Senhas) (Java)
