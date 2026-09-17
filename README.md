# Gerador de Senhas versão web
Baseado na lógica do meu gerador de senhas em Java

# Instruções de uso
Simplesmente acesse o [Gerador de Senhas versão web](https://fernandoisnaldo.github.io/Gerador-de-Senhas-Web/) e execute no seu navegador.

Caso você prefira, também pode simplesmente clonar este repositório pra tua máquina e abrir o arquivo index.html.

# Principais características
1) Usa gerador de números pseudoaleatórios criptograficamente seguro, com rejeição de viés de módulo.
2) Formato de aplicação web: executa direto no navegador a partir do documento index.html.
3) Emite senhas em formato ASCII ([faixa 33~126 da tabela ASCII](https://pt.wikipedia.org/wiki/ASCII)), sílabas, alfanumérico, hexadecimal e decimal. ([Documentação das sílabas aqui](https://github.com/fernandoisnaldo/Gerador-de-Senhas/wiki/Especifica%C3%A7%C3%B5es-das-s%C3%ADlabas-aleat%C3%B3rias,-Gerador-de-Senhas-do-Fernando-Isnaldo))
4) Design aleatório: As senhas tem suas cores sorteadas a cada geração, aproveitando o mesmo gerador criptograficamente seguro para ter estilo aleatório. Isso é meramente um recurso de design, sem implicações na segurança.
5) Está disponível em várias línguas: tem 1 página HTML pra cada uma suportada, e a index.html está em português. Todas com HTML semântico, sem frescura.
6) Este programa é um software livre: pode ser modificado, usado e redistribuído nos termos da GPL v3 ou posterior.

# Ver também
 [Gerador de Senhas versão CLI](https://github.com/fernandoisnaldo/Gerador-de-Senhas) (Java)
