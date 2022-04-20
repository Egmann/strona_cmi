var s1 = document.getElementById("s1");

function show(name)
{
    s1.innerHTML = "<h1>"+name+"</h1>";
    switch(name)
    {
        case 'mBot':
            s1.innerHTML += "mBot to uniwersalny robot pozwalający na jednoczesne zapoznanie się z zagadnieniami robotyki, elektroniki i programowania. Robot jest łatwy do złożenia a programowanie jest proste dzięki graficznym układom, które należy łączyć ze sobą niczym puzzle. Robot składa się z 38 części i można go zbudować w 10 minut. Wtyczki kabli oznaczone są różnymi kolorami, czyniąc montaż całości jeszcze łatwiejszym. Oprogramowanie opiera się na Scratch 2.0. Opracowane przez specjalistów gwarantuje szybkie postępy w nauce. Dzięki graficznym bloczkom robota można kontrolować na wiele sposobów.";
            break;
        case 'Czujnik odległości':
            s1.innerHTML += "Mierzy odległość i wykrywa przeszkody.";
            break;
        case 'Silniki':
            s1.innerHTML += "Napędzają robota.";
            break;
        case 'Czujnik linii':
            s1.innerHTML += "Umożliwia odążanie za linią i wykrywanie krawędzi.";
            break;
        case 'Bluetooth LE':
            s1.innerHTML += "Bezprzewodowa łączność z PC i innymi urządzeniami.";
            break;
        case 'Sterownik mCore z obudową':
            s1.innerHTML += "mCore jest łatwym w użyciu sterownikiem zbudowanym na bazie Arduino Uno. Zewnętrzne moduły podłączane są do sterownika za pomocą 4 gniazd RJ25, oznaczonych kolorowymi kodami. Dzięki temu nawet niedoświadczony użytkownik nie będzie miał kłopotu z łączeniem skomplikowanych układów elektronicznych, a całość urządzenia zachowa jednolitą kompaktową formę.  Sterownik mCore programowany jest w graficznym środowisku mBlock zgodnym ze Scratch 2.0 i tekstowym Arduino IDE. Czujniki  znajdujące się na sterowniku mCore: buzzer, czujnik światła, RGB LED., nadajnik i odbiornik IR  Znajdziesz go w zestawie robota mBot.";
            break;
        case 'Metalowa obudowa':
            s1.innerHTML += "Obudowa służy jako szkielet, do którego montowane są elementy.";
            break;
        case 'Wyświetlacz LED':
            s1.innerHTML += "Umożliwia wyświetlanie obrazów i tekstów.";
            break;
        case 'Zasilacz na baterie':
            s1.innerHTML += "Zasila robota.";
            break;
        case 'Kable czujników':
            s1.innerHTML += "Umożliwiają podpięcie czujników do sterownika.";
            break;
        case 'Kabel USB':
            s1.innerHTML += "Umożliwia podłączenie robota do komputera.";
            break;
        case "Śrubokręt":
            s1.innerHTML += "Jedno z podstawowych narzędzi ręcznych. Wkrętak składa się z rękojeści i grotu. W najprostszym wykonaniu jest to pręt (najczęściej stalowy, ale bywają wkrętaki z innych metali, np. z mosiądzu oraz z tworzyw sztucznych), na jednym końcu ścięty lub spłaszczony tak, że powstała w ten sposób wąska krawędź umożliwia wsunięcie jej w wycięcie w łbie wkręta, co następnie, poprzez obrót wkrętaka wokół osi, umożliwia obrócenie wraz z nim samego wkrętu. Przeciwległy koniec pręta (grotu) zazwyczaj umocowany jest w uchwycie (rękojeści), zazwyczaj z tworzywa sztucznego, ułatwiającym obracanie wkrętaka, choć czasem stosuje się rozwiązanie polegające na wygięciu przeciwległego końca w sposób umożliwiający obrót narzędziem.";
            break;
        case "Śrubokręt":
            s1.innerHTML += "Jedno z podstawowych narzędzi ręcznych. Wkrętak składa się z rękojeści i grotu. W najprostszym wykonaniu jest to pręt (najczęściej stalowy, ale bywają wkrętaki z innych metali, np. z mosiądzu oraz z tworzyw sztucznych), na jednym końcu ścięty lub spłaszczony tak, że powstała w ten sposób wąska krawędź umożliwia wsunięcie jej w wycięcie w łbie wkręta, co następnie, poprzez obrót wkrętaka wokół osi, umożliwia obrócenie wraz z nim samego wkrętu. Przeciwległy koniec pręta (grotu) zazwyczaj umocowany jest w uchwycie (rękojeści), zazwyczaj z tworzywa sztucznego, ułatwiającym obracanie wkrętaka, choć czasem stosuje się rozwiązanie polegające na wygięciu przeciwległego końca w sposób umożliwiający obrót narzędziem.";
            break;
        case "Śrubki":
            s1.innerHTML += "Śrubki są fajne";
            break;
    }
}