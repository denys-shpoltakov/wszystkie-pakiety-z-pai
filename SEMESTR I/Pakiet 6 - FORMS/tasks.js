/*
Zad. 1
Stwórz formularz kontaktowy, w którym walidacja danych odbywa się wyłącznie 
po stronie HTML5, bez użycia JavaScript.

Wymagania:

Formularz musi zawierać następujące pola:
Imię (pole obowiązkowe),
Nazwisko (pole obowiązkowe),
Adres e-mail (pole obowiązkowe),
Numer telefonu (opcjonalnie),
Wiadomość (pole tekstowe – <textarea>).
Użyj atrybutów required, type, pattern, maxlength, minlength zgodnie z potrzebą.
Przeglądarka ma wyświetlać komunikaty walidacyjne przy błędach.
Formularz nie wysyła danych na zewnętrzny adres – użyj action="#".

Efekt końcowy:
Po kliknięciu przycisku „Wyślij”, jeśli pola są niepoprawnie wypełnione – użytkownik 
otrzyma komunikat o błędzie bez odświeżania strony.

----------------------------------------------------------------------------------

Zad. 2
Formularz z walidacją w JavaScript i zapisem do tabeli.

Wymagania:

Stwórz formularz, w którym walidacja danych odbywa się za pomocą JavaScript, 
a po kliknięciu przycisku „Wyślij” dane zostają zapisane w tabeli na stronie.
Formularz musi zawierać te same pola, co w zadaniu 1 (Imię, Nazwisko, E-mail, Telefon).
Walidacja odbywa się w kodzie JavaScript – formularz ma mieć atrybut novalidate.

Po kliknięciu „Wyślij”:
zatrzymaj domyślne działanie (preventDefault()),
zbierz dane przy pomocy obiektu FormData lub innych znanych Ci sposobów,
sprawdź poprawność pól (np. e-mail zawiera „@”, imię i nazwisko min. 2 znaki),
w razie błędu wyświetl komunikat obok pola,
jeśli dane są poprawne – dopisz nowy wiersz do tabeli na stronie,
w ostatniej kolumnie tabeli umieść datę wysyłki (new Date().toLocaleString('pl-PL')).

Każde kliknięcie przycisku „Wyślij” powinno dopisywać nowy rekord w tabeli, 
nie usuwać wcześniejszych.

Efekt końcowy:
Użytkownik wypełnia formularz, a poprawnie przesłane dane pojawiają się w tabeli 
pod formularzem razem z datą wysłania.

*/
