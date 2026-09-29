### [Portuguese version](https://github.com/fernandoisnaldo/Gerador-de-Senhas-Web/blob/main/README.md)

# Web Password Generator
Based on the logic of my password generator written in Java, but with accessibility requirements I feel more comfortable implementing in a web application.

# Usage instructions
Simply open [index.html](https://fernandoisnaldo.github.io/Gerador-de-Senhas-Web/) and run it in your browser.

# Main functional features
1) Uses a cryptographically secure pseudo-random number generator, with modulo bias rejection.[^1]
2) Web application format: runs directly in the browser from any of these HTML documents.
3) Outputs passwords in ASCII[^2], syllable[^3], word, alphanumeric, hexadecimal, decimal and base64 formats.
   
By default, this program supports generating a password with up to 10,000 elements. If you want to unlock this limit to torture the browser engine and test the limits of PRNG, enable DEBUG mode in main.js.

# Main design, architecture and accessibility features
1) It is available in multiple languages, and localization is [extensible via HTML](https://github.com/fernandoisnaldo/Gerador-de-Senhas-Web/wiki/Como-criar-uma-nova-tradu%C3%A7%C3%A3o-do-Gerador-de-Senhas-vers%C3%A3o-web).
2) Uses semantic HTML, to try to make things easier for visually impaired users.[^6]
3) Generated passwords are styled with random colors[^4], within a palette with a predominant green channel for text and border[^5] as defined in code.
4) Maximum simplicity: written as purely as possible, with programming based only on native JavaScript code from W3C standards.

[^1]: The Web Password Generator depends on the `window.crypto.getRandomValues()` function, standardized in the W3C WebCrypto API specification, which requires cryptographically secure output. Modern browsers (namely: Mozilla Firefox, Chromium, Apple Safari) implement this requirement by relying on the operating system's entropy generators. A web interface running in an outdated, tampered and/or non-compliant environment — that is, not based on the ones already mentioned in this note — may not meet the specification, in which case the security level descriptions in this README do not apply.

[^2]: Applies strictly to the decimal range from 33 to 126 of the [ASCII](https://en.wikipedia.org/wiki/ASCII) table.

[^3]: Read the [syllable specifications](https://github.com/fernandoisnaldo/Gerador-de-Senhas/wiki/Especifica%C3%A7%C3%B5es-das-s%C3%ADlabas-aleat%C3%B3rias,-Gerador-de-Senhas-do-Fernando-Isnaldo) (in Portuguese) to learn more. The implementation of these specifications can be found in the main.js file.

[^4]: Some purely decorative functions are also drawn via `window.crypto.getRandomValues()`, for project scope reasons. Any vulnerable PRNG will be considered suspect and is forbidden in this project's code, for any purpose whatsoever.

[^5]: The predominance of the green channel is based on the fact that it is the channel with the greatest contribution to perceived luminance and the best visual resolution for most people, and it is also a matter of aesthetic preference for the project. In tests with Mozilla Firefox's color vision deficiency simulator (protanopia, deuteranopia, tritanopia, achromatopsia and contrast loss), no harm to readability was observed, even with contrast loss (at the level simulated by the browser), with total absence of green cones or with total absence of all cones.

[^6]: There was no opportunity to conduct tests with real users of screen readers. If you find any problem or would like to offer a suggestion, please create an issue.

# Copyright:
© 2026 Fernando Isnaldo Silva de Faria:
1) This program is free software: it is licensed under the terms of the [GNU GENERAL PUBLIC LICENSE v3](https://www.gnu.org/licenses/gpl-3.0.html) or later.
2) This and other READMEs are licensed under the terms of the [Creative Commons BY-SA 4.0 Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/legalcode.en).

 © Electronic Frontier Foundation:
1) The words used in `arrayzão.js` were obtained from an Electronic Frontier Foundation's [Dice](https://www.eff.org/dice) word list, and are licensed under the terms of [Creative Commons BY 4.0](https://creativecommons.org/licenses/by/4.0/legalcode.en).

  # See also
 [Password Generator CLI version](https://github.com/fernandoisnaldo/Gerador-de-Senhas) (Java)
