# Gerador de Senhas versão web
Baseado na lógica do meu gerador de senhas em Java, porém com requisitos de acessibilidade que eu me sinto mais confortável de implementar em uma aplicação web.

# Instruções de uso
Simplesmente abra o [index.html](https://fernandoisnaldo.github.io/Gerador-de-Senhas-Web/) e execute no seu navegador.

# Principais características funcionais
1) Usa gerador de números pseudoaleatórios criptograficamente seguro, com rejeição de viés de módulo.
A fonte de números pseudoaleatórios é a função window.crypto.getRandomValues(), nativa do motor JavaScript de navegadores modernos².
2) Formato de aplicação web: executa direto no navegador a partir de qualquer qualquer destes documentos HTML.
3) Emite senhas em formato ASCII ([faixa 33~126 da tabela ASCII](https://pt.wikipedia.org/wiki/ASCII)), sílabas, alfanumérico, hexadecimal e decimal. ([Documentação das sílabas aqui](https://github.com/fernandoisnaldo/Gerador-de-Senhas/wiki/Especifica%C3%A7%C3%B5es-das-s%C3%ADlabas-aleat%C3%B3rias,-Gerador-de-Senhas-do-Fernando-Isnaldo))
   
# Principais características de design, arquitetura e acessibilidade
1) Está disponível em várias línguas.
2) Usa HTML semântico com aria-label em botões, para facilitar para quem é deficiente visual.¹
3) As senhas geradas possuem cores aleatórias dentro de uma palheta definida no código.
4) Simplicidade máxima: Escrito praticamente na unha, baseado exclusivamente em tecnologias que o seu navegador já entrega, sem importar APIs ou bibliotecas externas.

<sub>Nota 1: As cores para funções decorativas também são selecionadas via window.crypto.getRandomValues(), por razões de escopo de projeto. Não é considerado producente implementar uma baseada em Math.random para este projeto, nem mesmo para este propósito específico.</sub>

<sub>Nota 2: A implementação deste CSPRNG pode variar de acordo com o motor de JavaScriptdo navegador. As alegações de segurança de CSPRNG encontradas neste README presumem o uso de uma versão atualizada do motor Gecko, Blink ou WebKit conforme implementado pela Google, Mozilla ou Apple.</sub>

# Considerações finais

Este programa é um software livre: pode ser modificado, usado e redistribuído nos termos da GPL v3 ou posterior; NÃO HÁ GARANTIA.

# Ver também
 [Gerador de Senhas versão CLI](https://github.com/fernandoisnaldo/Gerador-de-Senhas) (Java)
