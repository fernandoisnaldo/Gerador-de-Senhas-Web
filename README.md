# Gerador de Senhas versão web
Baseado na lógica do meu gerador de senhas em Java

# Instruções de uso
Simplesmente acesse o [index.html](https://fernandoisnaldo.github.io/Gerador-de-Senhas-Web/) e execute no seu navegador.

Caso você fale um idioma diferente do usado pra escrever este README, entre no arquivo [setLang.html](https://fernandoisnaldo.github.io/Gerador-de-Senhas-Web/setLang.html) e selecione o idioma do seu melhor entendimento.

# Principais características
1) Usa gerador de números pseudoaleatórios criptograficamente seguro (baseado na função JavaScript ), com rejeição de viés de módulo. A fonte de números aleatórios é baseado na função window.crypto.getRandomValues(), nativa do motor JavaScript de navegadores modernos;
3) Formato de aplicação web: executa direto no navegador a partir do documento index.html.
4) Emite senhas em formato ASCII ([faixa 33~126 da tabela ASCII](https://pt.wikipedia.org/wiki/ASCII)), sílabas, alfanumérico, hexadecimal e decimal. ([Documentação das sílabas aqui](https://github.com/fernandoisnaldo/Gerador-de-Senhas/wiki/Especifica%C3%A7%C3%B5es-das-s%C3%ADlabas-aleat%C3%B3rias,-Gerador-de-Senhas-do-Fernando-Isnaldo))
5) Design aleatório: As senhas tem suas cores sorteadas a cada geração, aproveitando o mesmo gerador criptograficamente seguro para ter estilo aleatório. Isso é meramente um recurso de design, sem implicações na segurança.
6) Está disponível em várias línguas. 
7) Este programa é um software livre: pode ser modificado, usado e redistribuído nos termos da GPL v3 ou posterior.

# Ver também
 [Gerador de Senhas versão CLI](https://github.com/fernandoisnaldo/Gerador-de-Senhas) (Java)
