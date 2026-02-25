/* 


Formularz w HTML — budowa i działanie

Formularz HTML służy do zbierania danych od użytkownika.
Podstawowy element formularza to znacznik:

<form action="adres_docelowy" method="post">
  <!-- pola formularza -->
</form>

Najważniejsze atrybuty formularza:

| Atrybut        | Opis                                                                                                                           |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------|
| `action`       | Określa adres (URL), pod który zostaną wysłane dane po kliknięciu „Wyślij”. `action="#"`, wstrzymuje wysłanie danych do URL.   |
| `method`       | Określa sposób przesyłania danych: `GET` (dane w adresie URL) lub `POST` (dane w treści żądania – bezpieczniejsze).            |
| `novalidate`   | Wyłącza automatyczną walidację przeglądarki.                                                                                   |
| `autocomplete` | Pozwala włączyć lub wyłączyć autouzupełnianie danych przez przeglądarkę.                                                       |


Elementy formularza (pola i etykiety)

Każde pole powinno mieć etykietę <label> z przypisanym atrybutem for, 
który łączy ją z polem o tym samym id.

Przykład:
<label for="email">Adres e-mail:</label>
<input id="email" name="email" type="email" required>

Najczęściej używane typy pól:

| Typ        | Opis                                                                           |
| ---------- | ------------------------------------------------------------------------------ |
| `text`     | Pole tekstowe – dowolny ciąg znaków.                                           |
| `email`    | Wymaga poprawnego adresu e-mail (zawierającego „@”).                           |
| `tel`      | Służy do wpisania numeru telefonu. Można dodać `pattern`, aby określić format. |
| `password` | Ukrywa wprowadzone znaki.                                                      |
| `number`   | Wymaga wartości liczbowej.                                                     |
| `date`     | Umożliwia wybór daty z kalendarza.                                             |
| `checkbox` | Pole wyboru (tak/nie).                                                         |
| `radio`    | Zestaw opcji, z których można wybrać tylko jedną.                              |
| `submit`   | Przycisk wysyłający formularz.                                                 |
| `textarea` | Większe pole do wpisania dłuższego tekstu.                  

----------------------------------------------------------------------------------|

Domyślne zachowanie formularza

Po kliknięciu przycisku submit:
Przeglądarka sprawdza, czy wszystkie wymagane pola (required) są uzupełnione 
i czy dane spełniają wymagania (np. e-mail zawiera „@”).
Jeśli wszystko jest poprawne – dane zostają wysłane pod adres określony w action.
Jeśli dane są niepoprawne – przeglądarka zatrzymuje wysyłanie i wyświetla komunikaty walidacyjne.

----------------------------------------------------------------------------------

Walidacja formularza w HTML

Walidacja HTML odbywa się automatycznie po kliknięciu przycisku submit, jeśli 
formularz nie ma atrybutu novalidate.
Najczęściej używane atrybuty walidacyjne:

| Atrybut                   | Działanie                                                |
| ------------------------- | -------------------------------------------------------- |
| `required`                | Pole obowiązkowe do wypełnienia.                         |
| `type="email"`            | Sprawdza, czy wpisany tekst ma format adresu e-mail.     |
| `pattern="..."`           | Pozwala zdefiniować własny wzorzec (np. tylko cyfry).    |
| `minlength` / `maxlength` | Określa minimalną i maksymalną liczbę znaków.            |
| `min` / `max`             | Dla pól liczbowych – ogranicza zakres wartości.          |
| `placeholder`             | Krótkie podpowiedzi w pustym polu.                       |
| `title`                   | Dodatkowa informacja wyświetlana po najechaniu kursorem. |

----------------------------------------------------------------------------------

Czym jest pattern

Atrybut pattern służy do sprawdzania, czy dane wprowadzone przez użytkownika 
pasują do określonego wzorca (regular expression – wyrażenia regularnego).
Używa się go w polach typu text, search, url, tel, email, password.
Jeśli użytkownik wpisze dane niezgodne ze wzorcem – przeglądarka nie pozwoli 
wysłać formularza i wyświetli komunikat o błędzie (np. „Dopasuj do wymaganego wzorca”).

Budowa i działanie
Przykład prostego pola z pattern:
<input type="text" pattern="[A-Za-z]{3,}" required>

To pole akceptuje tylko litery (A–Z, a–z) i wymaga minimum 3 znaków.
Jeśli użytkownik wpisze np. „An” lub „123”, formularz się nie wyśle.
Zostanie wyświetlony komunikat "Podaj dane w wymaganym formacie" lub 
podobny (zależnie od przeglądarki). Aby wyświetlić użytkownikowi więcej
informacji i wskazać np. wymagany format, należy dodać atrybut title oraz 
wpisać w nim odpowiednią treść.

Najczęściej używane symbole w pattern:

| Symbol  | Znaczenie                         | Przykład                                   |
| ------- | --------------------------------- | ------------------------------------------ |
| `.`     | dowolny znak                      | `a.c` → dopasuje: `abc`, `a-c`, `a9c`      |
| `[abc]` | dowolna z podanych liter          | `[abc]` → dopasuje `a`, `b` lub `c`        |
| `[A-Z]` | zakres od A do Z (wielkie litery) | `[A-Z]` → `A`, `B`, `C`, ...               |
| `[a-z]` | małe litery                       | `[a-z]` → `a`, `b`, `c`, ...               |
| `[0-9]` | cyfry 0–9                         | `[0-9]` → `5`, `2`, `9`                    |
| `^`     | początek tekstu                   | `^A` → tekst musi zaczynać się od litery A |
| `$`     | koniec tekstu                     | `A$` → tekst musi kończyć się na A         |
| `+`     | co najmniej jeden znak            | `[0-9]+` → min. jedna cyfra                |
| `*`     | zero lub więcej znaków            | `[a-z]*` → dowolna liczba liter lub puste  |
| `{n,m}` | liczba powtórzeń (od n do m)      | `[0-9]{9}` → dokładnie 9 cyfr (np. PESEL)  |
| `?`     | znak występuje 0 lub 1 raz        | `[A-Z]?` → wielka litera jest opcjonalna   |
| `\s`    | spacja                            | `\s` → dopasuje spację                     |
| `\d`    | cyfra (skrót dla `[0-9]`)         | `\d{2}` → dwie cyfry                       |
| `\+`    | dosłowny znak plusa               | `\+` → dopasuje znak „+”                   |


Przykładowy wzorzec dla numeru telefonu: 
<input type="tel" name="phone" pattern="^[0-9\s\+\-]{7,15}$" placeholder="+48 600 700 800">

Wskazówki praktyczne:
Zawsze dodawaj title="...", by użytkownik wiedział, jaki format jest wymagany.
Przeglądarka waliduje pattern dopiero po kliknięciu przycisku „Wyślij”.
Jeśli formularz ma novalidate, to walidacja HTML (w tym pattern) jest wyłączona.
pattern działa tylko na pełnym dopasowaniu — tzn. cały wpis musi pasować do wzorca, 
a nie jego fragment.


----------------------------------------------------------------------------------

Przydatne linki: 

Fomularze: 
https://kursjs.pl/kurs/formularze/formularze
https://kursjs.pl/kurs/formularze/formularze-walidacja

Stylizacja tabeli: 
https://www.youtube.com/watch?v=2a9zEDtn8tE













*/
