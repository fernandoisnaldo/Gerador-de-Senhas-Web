# Web-Based Password Generator
Based on the logic of my Java password generator, but with accessibility requirements that I feel more comfortable implementing in a web application.

# Instructions
Simply open [index.html](https://fernandoisnaldo.github.io/Gerador-de-Senhas-Web/) and run it in your browser.

# Key Functional Features
1) Uses a cryptographically secure pseudorandom number generator with modulo bias elimination.[^1]
2) Web application format: runs directly in the browser from any of these HTML documents.
3) Generates passwords in ASCII[^2], syllabic[^3], alphanumeric, hexadecimal, decimal, and base64 formats.
4) This program comes with a unit test enabled with console output. Open the Inspect Elements tool and discover the distribution of each generated element; this is a feature for those who want to analyze and detect biased PRNGs.

# Key Design, Architecture, and Accessibility Features
1) Available in multiple languages, with localization [extensible via HTML](https://github.com/fernandoisnaldo/Gerador-de-Senhas-Web/wiki/Como-criar-uma-nova-tradu%C3%A7%C3%A3o-do-Gerador-de-Senhas-vers%C3%A3o-web).
2) Built with semantic HTML to improve accessibility for visually impaired users.[^6]
3) Generated passwords feature randomized styling colors[^4] within a palette that favors the green channel for text and borders[^5], as defined in the codebase.
4) Maximum simplicity: written as purely as possible using native capabilities delivered by modern web browsers. No external APIs or third-party libraries imported.

---

[^1]: The web version of the Password Generator relies on the `window.crypto.getRandomValues()` function, standardized in the W3C WebCrypto API specification, which requires cryptographically secure output. Modern browsers (notably Mozilla Firefox, Chromium, and Apple Safari) meet this requirement by leveraging the operating system's entropy sources. A web interface executed in an outdated, tampered with, or non-compliant environment may fail to meet this spec, in which case the security descriptions in this README do not apply.

[^2]: Applies strictly to the decimal range 33 to 126 of the [ASCII](https://en.wikipedia.org/wiki/ASCII) table.

[^3]: Read the [syllables specifications](https://github.com/fernandoisnaldo/Gerador-de-Senhas/wiki/Especifica%C3%A7%C3%B5es-das-s%C3%ADlabas-aleat%C3%B3rias,-Gerador-de-Senhas-do-Fernando-Isnaldo) (in Portuguese) to learn more. The implementation of these specs can be found in `main.js`.

[^4]: Certain purely decorative functions also pull randomness via `window.crypto.getRandomValues()` for project scoping reasons. Any vulnerable PRNG is considered suspect and forbidden in this codebase for any purpose.

[^5]: Green channel dominance is chosen because green contributes most significantly to perceived luminance and offers optimal visual acuity for most people; it is also an aesthetic preference for this project. In tests using Mozilla Firefox's color vision deficiency simulator (protanopia, deuteranopia, tritanopia, achromatopsia, and contrast loss), legibility remained intact even with contrast reduction (at the level simulated by the browser), total absence of green cones, or total absence of all cones.

[^6]: There has been no opportunity to perform testing with actual screen reader users. If you discover any issues or wish to suggest improvements, please open an issue.

This program is free software: it can be modified, used, and redistributed under the terms of the GPL v3 or later.

# See Also
* [CLI Password Generator](https://github.com/fernandoisnaldo/Gerador-de-Senhas) (Java)
