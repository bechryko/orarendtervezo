# orarendtervezo
Egyszerű js projekt egyetemi órarendjeim összeállításának megkönnyítésére.

# Órarendtervező 1.1
by Kozma Kristóf

## Beüzemelés:
 - hozz létre kategóriákat a main.js forráskódjában a CourseCategory osztály segítségével (paraméterek: név (str), szín (str), ideiglenes-e (bool), áthúzott-e (bool)) (az igazságértékek a kategóriában szereplő kurzusok megfelelő értékeit állítják át, függetlenül attól, hogy kurzus létrehozásakor mit adunk meg)
 - hozz létre egy vagy több féléves a main.js forráskódjában a Term osztály segítségével (paraméter: név (str))
 - adj hozzá a létrehozott félévhez kurzusokat a félév addCourse metódusával (paraméter: kurzus (Course))
	 - kurzust a Course osztály segítségével hozz létre (paraméterek: név (str), időpont (CourseTime), helyszín (str, jelenleg nincs megjelenítve), tanár (str), kategória (CourseCategory), elsődleges-e (bool, alapértelmezetten hamis), áthúzott-e (bool, alapértelmezetten hamis), ideiglenes-e (bool, alapértelmezetten hamis))
 - hívd meg a félév splitTimetables metódusát az órák előfeldolgozásához, és a draw metódust az indításkori kirajzoláshoz

## Használat:
 - a beüzemelést követően nyisd meg az index.html fájlt, hogy megjelenjen az órarend a bevitt adatokkal
 - az 1-7 billentyűkkel ki tudod nagyítani az egyes napok órarendjét hétfőtől vasárnapig, a többi billentyűvel (az F1-F12 kivételével) pedig visszaállítod a teljes heti órarendet
 - a 'p' billentyű megnyomása eltünteti az elsődlegesre beállított kurzusokon kívül az összes ideiglenes kurzust
 - a konzolban a félév courseList adattagjával lekérheted a félévben szereplő kurzusok neveit ABC-sorrendben

## Tippek, trükkök:
 - a félév minden metódusának visszatérési értéke maga az objektum, így láncolni is lehet őket

## Frissítési jegyzék:
### 1.1:
 - kategóriák alapértelmezett igazságértékei
 - elsődleges attribútum a kurzusoknak
 - nem elsődleges, ideiglenes kurzusok szűrése megjelenítéskor
 - pénteki kurzusok nincsenek automatikusan kiikszelve
