# Gerador de Senhas versão web
Baseado na lógica do meu gerador de senhas em Java, porém com requisitos de acessibilidade que eu me sinto mais confortável de implementar em uma aplicação web.

# Instruções de uso
Simplesmente abra o [index.html](https://fernandoisnaldo.github.io/Gerador-de-Senhas-Web/) e execute no seu navegador.

# Principais características funcionais
1) Usa gerador de números pseudoaleatórios criptograficamente seguro, com rejeição de viés de módulo.[^1]
2) Formato de aplicação web: executa direto no navegador a partir de qualquer destes documentos HTML.
3) Emite senhas em formato ASCII[^2], sílabas[^3], alfanumérico, hexadecimal, decimal e base64.
4) Este programa vem com teste unitário ativado com saída pra console, abra o Inspecionar Elementos e descubra a distribuição de cada elemento gerado. Isso é útil pra testar grandes quantidades de elementos e descobrir se o PRNG do seu computador ou navegador tá viciado.[^7]
   
# Principais características de design, arquitetura e acessibilidade
1) Está disponível em vários idiomas, e a localização é [extensível via HTML](https://github.com/fernandoisnaldo/Gerador-de-Senhas-Web/wiki/Como-criar-uma-nova-tradu%C3%A7%C3%A3o-do-Gerador-de-Senhas-vers%C3%A3o-web).
2) Uso de HTML semântico, para tentar facilitar para quem é deficiente visual.[^6]
3) As senhas geradas possuem estilo com cores aleatórias[^4], dentro de uma paleta com canal verde predominante para texto e borda[^5] conforme definido em código.
4) Simplicidade máxima: Escrito da forma mais pura possível, baseado em tecnologias que um navegador moderno já entrega. Não há importação externa de APIs ou bibliotecas.
   
[^1]: O Gerador de Senhas versão web depende da função `window.crypto.getRandomValues()`, padronizada na especificação API WebCrypto do W3C, que exige saída criptograficamente segura. Os navegadores modernos (nomeadamente: Mozilla Firefox, Chromium, Apple Safari) implementam essa exigência apoiando-se nos geradores de entropia do sistema operacional. Interface web executada em ambiente desatualizado, adulterado e/ou não baseado nesses já citados nesta nota podem não cumprir a especificação, e nesse caso as descrições do nível de segurança deste README não são aplicáveis.

[^2]: Se aplica estritamente à faixa decimal de 33 até 126 da tabela [ASCII](https://pt.wikipedia.org/wiki/ASCII).

[^3]: Leia as [especificações das sílabas](https://github.com/fernandoisnaldo/Gerador-de-Senhas/wiki/Especifica%C3%A7%C3%B5es-das-s%C3%ADlabas-aleat%C3%B3rias,-Gerador-de-Senhas-do-Fernando-Isnaldo) para saber mais. A implementação destas especificações se encontra no arquivo main.js.

[^4]: Algumas funções meramente decorativas também são sorteadas via `window.crypto.getRandomValues()`, por razões de escopo de projeto. Qualquer PRNG vulneravel será considerado suspeito e está proibido no código deste projeto, para qualquer finalidade que seja.

[^5]: A predominância do canal verde se baseia no fato de ele ser o canal de maior contribuição para a luminância percebida e de melhor resolução visual para a maioria das pessoas, e também é uma questão de preferência estética para o projeto. Em testes com o simulador de deficiências de visão de cores do Mozilla Firefox (protanopia, deuteranopia, tritanopia, acromatopsia e perda de contraste), não foi observado prejuízo à legibilidade, mesmo com perda de contraste (no nível simulado pelo navegador), com ausência total de cones verdes ou com ausência total de todos os cones.

[^6]: Não houve oportunidade para realizar testes com usuários reais de leitores de tela. Se você encontrar algum problema ou quiser oferecer alguma sugestão, crie uma issue.

[^7]: Recomenda-se testar 100000 de caracteres nos modo "ASCII", "alfanumérico", "hexadecimal", "números" ou "base64". Devido à enorme quantidade de sílabas diferentes, um teste equivalente para o modo "sílaba" requer 200 milhões de caracteres e por isso seria impraticável. Este teste é feito pra detectar falhas no PRNG do ambiente de execução, e uma falha do ambiente de execução NÂO É uma falha do código deste programa.

Este programa é um software livre: pode ser modificado, usado e redistribuído nos termos da GPL v3 ou posterior.
# Ver também
 [Gerador de Senhas versão CLI](https://github.com/fernandoisnaldo/Gerador-de-Senhas) (Java)
