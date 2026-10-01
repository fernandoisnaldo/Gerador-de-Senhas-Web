### [English version](https://github.com/fernandoisnaldo/Gerador-de-Senhas-Web/blob/main/README_en_US.md)

# Gerador de Senhas versão web
Baseado na lógica do meu gerador de senhas em Java, porém com requisitos de acessibilidade que eu me sinto mais confortável de implementar em uma aplicação web.

# Instruções de uso
Simplesmente abra o [index.html](https://fernandoisnaldo.github.io/Gerador-de-Senhas-Web/) e execute no seu navegador.

# Principais características funcionais
1) Usa gerador de números pseudoaleatórios criptograficamente seguro, com rejeição de viés de módulo.[^1]
2) Formato de aplicação web: executa direto no navegador a partir de qualquer destes documentos HTML.
3) Emite senhas em formato ASCII[^2], sílabas[^3], palavras, alfanumérico, hexadecimal, decimal e base64.

Por padrão, este programa suporta a emissão de senhas com até 10 mil elementos. Se você quiser desbloquear este limite pra torturar o seu navegador e testar os limites do PRNG, ative o modo DEBUG no main.js

# Principais características de design, arquitetura e acessibilidade
1) Está disponível em vários idiomas, e a localização é [extensível via HTML](https://github.com/fernandoisnaldo/Gerador-de-Senhas-Web/wiki/Como-criar-uma-nova-tradu%C3%A7%C3%A3o-do-Gerador-de-Senhas-vers%C3%A3o-web).
2) Uso de HTML semântico, para tentar facilitar para quem é deficiente visual.[^6]
3) As senhas geradas possuem estilo com cores aleatórias[^4], dentro de uma paleta com canal verde predominante para texto e borda[^5] conforme definido em código.
4) Simplicidade máxima: Escrito da forma mais pura possível, com programação baseada apenas em código JavaScript nativo dos padrões W3C. 

[^1]: O Gerador de Senhas versão web depende da função `window.crypto.getRandomValues()`, padronizada na especificação API WebCrypto do W3C, que exige saída criptograficamente segura. Os navegadores modernos (nomeadamente: Mozilla Firefox, Chromium, Apple Safari) implementam essa exigência apoiando-se nos geradores de entropia do sistema operacional. Interface web executada em ambiente desatualizado, adulterado e/ou não baseado nesses já citados nesta nota podem não cumprir a especificação, e nesse caso as descrições do nível de segurança deste README não são aplicáveis.

[^2]: Se aplica estritamente à faixa decimal de 33 até 126 da tabela [ASCII](https://pt.wikipedia.org/wiki/ASCII).

[^3]: Leia as [especificações das sílabas](https://github.com/fernandoisnaldo/Gerador-de-Senhas/wiki/Especifica%C3%A7%C3%B5es-das-s%C3%ADlabas-aleat%C3%B3rias,-Gerador-de-Senhas-do-Fernando-Isnaldo) para saber mais. A implementação destas especificações se encontra no arquivo main.js.

[^4]: Algumas funções meramente decorativas também são sorteadas via `window.crypto.getRandomValues()`, por razões de escopo de projeto. Qualquer PRNG vulneravel será considerado suspeito e está proibido no código deste projeto, para qualquer finalidade que seja.

[^5]: A predominância do canal verde se baseia no fato de ele ser o canal de maior contribuição para a luminância percebida e de melhor resolução visual para a maioria das pessoas, e também é uma questão de preferência estética para o projeto. Em testes com o simulador de deficiências de visão de cores do Mozilla Firefox (protanopia, deuteranopia, tritanopia, acromatopsia e perda de contraste), não foi observado prejuízo à legibilidade, mesmo com perda de contraste (no nível simulado pelo navegador), com ausência total de cones verdes ou com ausência total de todos os cones.

[^6]: Não houve oportunidade para realizar testes com usuários reais de leitores de tela. Se você encontrar algum problema ou quiser oferecer alguma sugestão, crie uma issue.

[^7]: As palavras foram obtidas da lista de palavras em [Dice](https://www.eff.org/dice) da Electronic Frontier Foundation, e estão licenciadas sob os termos da [Creative Commons By 4.0](https://creativecommons.org/licenses/by/3.0/legalcode.en).


# Direitos autorais
© 2026 Fernando Isnaldo Silva de Faria:
1) Este programa é software livre: está licenciado sob os termos da [GNU GENERAL PUBLIC LICENSE v3](https://www.gnu.org/licenses/gpl-3.0.html) ou posterior.
2) Este e outros READMEs estão licenciado sob os termos da [Creative Commons BY-SA 4.0 Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/legalcode.en).

Créditos:
1) As palavras usadas em `arrayzão_eff.js` foram obtidas de uma lista de palavras [Dice](https://www.eff.org/dice) da Electronic Frontier Foundation e estão licenciadas sob os termos da licença [Creative Commons BY 4.0](https://creativecommons.org/licenses/by/4.0/legalcode.en).
2) As palavras usadas em `arrayzão_Ricardo_Ueda_USP.js` foram adaptadas e modificadas a partir de lista do [Instituto de Matemática e Estatística da USP](https://www.ime.usp.br/~pf/dicios/), cujo lista foi originalmente feita pelo Ricardo Ueda Karpischek e licenciada sob os termos da licença [Creative Commons BY 4.0](https://creativecommons.org/licenses/by/4.0/legalcode.en).

# Ver também
 [Gerador de Senhas versão CLI](https://github.com/fernandoisnaldo/Gerador-de-Senhas) (Java)
