// Żródła oficjalne oraz nieco mniej, z których można czerpać wiedzę m.in. o html i css:

// https://developer.mozilla.org/en-US/docs/Web/HTML
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
// https://html.spec.whatwg.org/

// Żródła z nastawieniem na praktykę / testowanie zapoznanej teorii:

// https://www.freecodecamp.org/news/tag/html/
// https://www.w3schools.com/html/
// https://www.geeksforgeeks.org/html/html-tutorial/

// // // // // // Tagi html służące do budowania struktury strony: //

// // // // // <html></html> – główny element dokumentu HTML, zawiera całą stronę.

// // // // // <head></head> – sekcja nagłówkowa, zawiera metadane (np. tytuł strony, style, skrypty).

// // // // // <body></body> – właściwa treść strony widoczna dla użytkownika.

// // // // // <header></header> – to sekcja dokumentu zawierająca metadane o stronie,
// // // // //                     a także linki do skryptów np. style.css czy script.js

// // // // // <footer></footer> – stopka strony lub sekcji (np. prawa autorskie, linki).

// // // // // <main></main> – główna treść dokumentu, unikalna dla strony.

// // // // // <section></section> – wydzielona część treści (np. rozdział, dział tematyczny).

// // // // // <article></article> – samodzielny fragment treści (np. artykuł, wpis bloga).

// // // // // <nav></nav> – blok przeznaczony na nawigację (menu, linki).

// // // // // <aside></aside> – treść poboczna (np. reklamy, dodatkowe informacje).

// // // // // <div></div> – uniwersalny kontener do grupowania elementów.

// // // // ---------------------------------------------------------------

// // // // Tagi związane z tekstem / treścią:

// // // // <h1>–<h6> – nagłówki od najważniejszego (<h1>) do najmniej istotnego (<h6>).

// // // // <p></p> – akapit tekstu.

// // // // <span></span> – inline’owy kontener do zaznaczenia fragmentu tekstu.

// // // // <a href=""></a> – link prowadzący do innej strony lub sekcji.

// // // // <strong></strong> – mocne wyróżnienie (semantycznie ważny tekst, zwykle pogrubiony).

// // // // <em></em> – akcentowanie, uwypuklenie (podkreślenie znaczenia, zwykle kursywa).

// // // // <br> – złamanie linii (nowa linia).

// // // // <hr> – pozioma linia oddzielająca treść.

// // // // ---------------------------------------------------------

// // // // Tagi związane z multimediami:

// // // // <img src="" alt="" width="" height=""> – obrazek.

// // // // <video></video> – wideo osadzone na stronie.

// // // // <audio></audio> – plik dźwiękowy.

// // // // <figure></figure> – grupa elementów multimedialnych z podpisem.

// // // // <figcaption></figcaption> – podpis do <figure>.

// // // // ----------------------------------------------------------------

// // // // Tagi dotyczące list:

// // // // <ul></ul> – lista nieuporządkowana (punktowana).

// // // // <ol></ol> – lista uporządkowana (numerowana).

// // // // <li></li> – element listy.

// // // // <table></table> – tabela.

// // // // <tr></tr> – wiersz tabeli.

// // // // <td></td> – komórka tabeli.

// // // // <th></th> – nagłówek tabeli.

// // // // ------------------------------------------------------

// // // // Tagi związane m.in. z formularzami:

// // // // <form></form> – formularz.

// // // // <input> – pole do wprowadzania danych.

// // // // <label></label> – etykieta dla pola formularza.

// // // // <textarea></textarea> – pole tekstowe wielowierszowe.

// // // // <button></button> – przycisk.

// // // // <select></select> – lista rozwijana.

// // // // <option></option> – opcja w liście rozwijanej.

// // // ------------------------------------------------------

// // // Emmet - najważniejsze skróty w HTML:

// // // | Skrót                                   | Co generuje                     | Opis                                                                         |
// // // | --------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------- |
// // // | `!`                                     | szablon HTML5                   | Pełny szkielet dokumentu (`<!DOCTYPE html>` + `<html>`, `<head>`, `<body>`). |
// // // | `div.container`                         | `<div class="container"></div>` | Kropka (`.`) = klasa.                                                        |
// // // | `div#header`                            | `<div id="header"></div>`       | Hash (`#`) = identyfikator.                                                  |
// // // | `ul>li*5`                               | lista z 5 elementami            | `>` = zagnieżdżenie, `*` = powtórzenie.                                      |
// // // | `nav>ul>li*3>a{Link $}`                 | menu z 3 linkami                | `{}` = treść, `$` = numeracja.                                               |
// // // | `section>h2{Nagłówek}+p{Opis}`          | nagłówek + akapit               | `+` = element „obok” na tym samym poziomie.                                  |
// // // | `form>input:text+input:password+button` | formularz logowania             | `:` = typ inputa.                                                            |
// // // | `table>tr*2>td*3`                       | tabela 2x3                      | szybkie generowanie siatki.                                                  |
// // // | `header+main+footer`                    | podstawowa struktura strony     | skrót często używany w projekcie startowym.                                  |

// // -----------------------------------------------------------

// // WCAG + Semantyka:

// // Nagłówki w kolejności – nie przeskakuj od <h1> do <h4>.
// // ✅ Tekst alternatywny (alt) dla obrazków – opisuj ich znaczenie.
// // ✅ Kontrast kolorów – minimum 4.5:1 dla tekstu.
// // ✅ Formularze z label – każdy <input> powinien mieć <label for="">.
// // ✅ Przycisk a link – używaj <button> do akcji, <a> do nawigacji.
// // ✅ ARIA (Accessible Rich Internet Applications) – tylko tam, gdzie HTML nie wystarcza (np. role="alert", aria-label).
// // ✅ Nawigacja klawiaturą – wszystkie elementy powinny być dostępne przez Tab.
// // ✅ Responsywność – stosuj jednostki względne (em, %, rem) zamiast sztywnych px.
