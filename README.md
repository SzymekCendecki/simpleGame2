# simple Game2

# used technology
html, scss/css, js/jQuery

# getting started:
To start working with the project, you must download it and place it in a directory called simple-game2.

Then, in this directory, start the terminal and run: npm install

After completing operation in the terminal, run: 
# gulp watch

Open the terminal a second time and run: 
# node_modules / .bin / webpack

Remember that starting the terminal with gulp watch and node_modules / .bin / webpack should be in the project directory. In this case, in the simple-game2 directory.

Now just open the appropriate program to write the code and start working.

To check your work, run a file called:
# index.html.

To make changes in the code visible on the page, save the file in which the changes were made and refresh the page.

# inspirations
intro - modified (?) code from https://codemyui.com/spinning-ring-text-pure-css/
background body - from https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient
tooltip start button - modified (?) code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_tooltip

# description
This is the second version of the Simply Game. Changes from the previous version
- added: time is getting shorter, the higher the level is
- changed (compared to the previous version - simple game) approach to responsiveness - scss / css was used instead of js / jQuery to adjust styles for different resolutions
- the random locations of the quadrant to be clicked have been exchanged for 50 jacksticks that show up randomly and change their background to a random color
- SVG has been discontinued

What is the game about?
The game is about clicking on colored circles. To get to the next level (stage) you need to collect the right amount of points in a given time. Then the player will automatically be taken to the next level. The higher the level, the less time there is to collect points, and the points are zeroed. When 100 points accumulate at the last level, the game is over and the player wins. If the player does not collect the right amount of points, the game ends and the player loses.

# Description in Polish language

# Użyte technologie
html, scss/css, js/jQuery

# rozpoczęcie pracy:
Aby rozpocząć pracę z projektem należy go ściągnąć oraz umieścić w katalogu o nazwie simple-game2.

Nastęnie, w tym katalogu uruchomić terminal oraz uruchomić: 
# npm install

Po zakończeniu działania w terminalu uruchomić: 
# gulp watch

Otworzyć drugi raz terminal oraz uruchomić: 
# node_modules/.bin/webpack 

Pamiętaj, że uruchomienie termianla z gulp watch oraz node_modules/.bin/webpack powinno być w katalogu z projektem. W tym przypadku w katalogu simple-game2.

Teraz wystarczy otworzyć odpowiedni program umożliwiający pisanie kodu oraz rozpocząć pracę.

Aby sprawdzić swoją pracę należy uruchomić plik o nazwie: 
# index.html.

Aby wprowadzone w kodzie zmiany były widoczne na stronie należy zapisać plik, w którym zostały wprowadzone zmiany oraz należy odświeżyć stronę.

# Opis
To druga wersja gry Simply Game. Zmiany w stosunku do poprzedniej wersji
- dodano: czas jest coraz krótszy, im wyższy jest poziom
- zmieniono (w stosunku do poprzedniej wersji - simple game) podejście do responywności - użyto scss/css zamiast js/jQuery do dostosowywania styli dla różnych rozdzielczości
- zamienione zostało losowe umiejscowienia kwadaru do kliknięcia, na rzecz 50 przecisków, które losowo się pokazują oraz zmieniają swoje tło na losowy kolor
- zrezygnowano z używania SVG

Na czym polega gra?
Gra polega na klikaniu w kolorowe kółka. Aby przejść do kolejnego poziomu (stage) trzeba uzbierać odpowiednią ilość punktów, w określonym czasie. Wtedy automatycznie gracz przeniesiony zostanie do kolejnego poziomu. Im wyższy poziom tym mniej czasu jest na uzbieranie punktów, a punkty są zerowane. Gdy uzbiera się na ostatnim poziomie 100 punktów, gra kończy się, a gracz wygrywa. Jeżeli gracz nie uzbiera odpowiedniej ilości punktów, gra kończy się i gracz przegrywa.


# inspiracje:
intro - zmodyfikowany (?) kod ze strony https://codemyui.com/spinning-ring-text-pure-css/

background body - ze strony https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient

tooltip przycisku start - zmodyfikowany (?) https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_tooltip
