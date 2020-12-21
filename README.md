# Backend aplikacji - Zespół 7

### Korzystanie z Pip

Korzystamy z `pip`, żeby mieć zgodne wersje bibliotek itp.

Po zainstalowaniu `pip` i pobraniu repozytorium trzeba wpisać:
```
pipenv shell      (uruchamia wirtualne srodowisko)
pipenv sync       (pobiera wszystkie dependencies z Pipfile.lock)
```

### Testy

Póki co testy są na `unittest` i w jednym pliku, bo to tylko baza, ale potem można to podzielić na różne moduły (i nawet na inną bibliotekę)

Uruchamianie:
```
python -m unittest tests/tests.py
```
