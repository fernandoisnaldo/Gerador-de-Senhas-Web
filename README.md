# Gerador de Senhas versão web
Baseado na lógica do meu gerador de senhas em Java, porém com requisitos de acessibilidade que eu me sinto mais confortável de implementar em uma aplicação web.

# Instruções de uso
Simplesmente abra o [index.html](https://fernandoisnaldo.github.io/Gerador-de-Senhas-Web/) e execute no seu navegador.

# Principais características funcionais
1) Usa gerador de números pseudoaleatórios criptograficamente seguro, com rejeição de viés de módulo.[^1]
2) Formato de aplicação web: executa direto no navegador a partir de qualquer destes documentos HTML.
3) Emite senhas em formato ASCII[^2], sílabas[^3], alfanumérico, hexadecimal e decimal.
   
# Principais características de design, arquitetura e acessibilidade
1) Está disponível em vários idiomas, e a localização é extensível via HTML.
2) HTML semântico com aria-label em botões, para facilitar para quem é deficiente visual.
3) As senhas geradas possuem estilo com cores aleatórias[^4], dentro de uma paleta com canal verde predominante para texto e borda[^5] conforme definido em código.
4) Simplicidade máxima: Escrito da forma mais pura possível, baseado em tecnologias que o seu navegador já entrega. Não há importação externa de APIs ou bibliotecas.

   
[^1]: Este programa depende da função `window.crypto.getRandomValues()`, padronizada na especificação API WebCrypto do W3C, que exige saída criptograficamente segura. Os navegadores modernos (nomeadamente: Mozilla Firefox, Chromium, Apple Safari) implementam essa exigência apoiando-se nos geradores de entropia do sistema operacional. Navegadores desatualizados, adulterados e/ou não baseados nesses já citados nesta nota podem não cumprir a especificação, e nesse caso as descrições do nível de segurança deste README não são aplicáveis.

[^2]: Se aplica estritamente à faixa decimal de 33 até 126 da tabela [ASCII](https://pt.wikipedia.org/wiki/ASCII).

[^3]: Leia as [especificações das sílabas](https://github.com/fernandoisnaldo/Gerador-de-Senhas/wiki/Especifica%C3%A7%C3%B5es-das-s%C3%ADlabas-aleat%C3%B3rias,-Gerador-de-Senhas-do-Fernando-Isnaldo) para saber mais.

[^4]: Algumas funções meramente decorativas também são sorteadas via `window.crypto.getRandomValues()`, por razões de escopo de projeto. Adicionar uma implementação de geração pseudoaleatória vulnerável (nomeadamente: `Math.random()`) para esta finalidade, significaria maior complexidade de código e de auditoria, com nenhum ganho prático de performance.

[^5]: A predominância do canal verde se baseia no fato de ele ser o canal de maior contribuição para a luminância percebida e de melhor resolução visual para a maioria das pessoas, e também é uma questão de preferência estética para o projeto. Em testes com o simulador de deficiências de visão de cores do Mozilla Firefox (protanopia, deuteranopia, tritanopia, acromatopsia e perda de contraste), não foi observado desfuncionalidade visual, mesmo para quem tem falta de contraste (no nível indicado pelo navegador) ausência total de cones verdes ou ausência total de todos os cones. 

Este programa é um software livre: pode ser modificado, usado e redistribuído nos termos da GPL v3 ou posterior.
# Ver também
 [Gerador de Senhas versão CLI](https://github.com/fernandoisnaldo/Gerador-de-Senhas) (Java)
