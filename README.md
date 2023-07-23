# orarendtervezo
Egyszerű js projekt egyetemi órarendjeim összeállításának megkönnyítésére.

# Órarendtervező 1.1.1
by Kozma Kristóf

## Beüzemelés:
 - hozz létre kategóriákat a main.js forráskódjában a CourseCategory osztály segítségével (paraméterek: név (str), szín (str), ideiglenes-e (bool), áthúzott-e (bool)) (az igazságértékek a kategóriában szereplő kurzusok megfelelő értékeit állítják át, függetlenül attól, hogy kurzus létrehozásakor mit adunk meg)
 - hozz létre egy vagy több félévet a main.js forráskódjában a Term osztály segítségével (paraméter: név (str))
 - adj hozzá a létrehozott félévhez kurzusokat a félév addCourse metódusával (paraméter: kurzus (Course))
	 - kurzust a Course osztály segítségével hozz létre (paraméterek: név (str), időpont (CourseTime), helyszín (str, jelenleg nincs megjelenítve), tanár (str), kategória (CourseCategory), elsődleges-e (bool, alapértelmezetten hamis), áthúzott-e (bool, alapértelmezetten hamis), ideiglenes-e (bool, alapértelmezetten hamis))
 - hívd meg a félév draw metódusát az órarend kirajzoláshoz

## Használat:
 - a beüzemelést követően nyisd meg az index.html fájlt, hogy megjelenjen az órarend a bevitt adatokkal
 - az 1-7 billentyűkkel ki tudod nagyítani az egyes napok órarendjét hétfőtől vasárnapig, a többi billentyűvel (az F1-F12 kivételével) pedig visszaállítod az átfogó órarend nézetet
 - a 'p' billentyű megnyomása eltünteti az elsődlegesre beállított kurzusokon kívül az összes ideiglenes kurzust
 - a konzolban a félév courseList adattagjával lekérheted a félévben szereplő kurzusok neveit ABC-sorrendben

## Tippek, trükkök:
 - a félév minden metódusának visszatérési értéke maga az objektum, így láncolni is lehet őket
 - a létrehozott félév beállításait a félév updateSettings metódusával változtathatod meg, mely paramétere egy szöveg (a beállítás neve) és egy érték (a beállítás új értéke); érdemes a beállításokat közvetlenül a félév létrehozása után megtenni

## Beállítások:
 - dayZeroIndex: ha be van kapcsolva, a hétfői nap indexe 0, különben 1 (alapértelmezetten ki van kapcsolva)
 - showAllWeekdays: minden hétköznap megjelenik az órarenden, különben csak a hétfőtől a legkésőbbi óráig tartó időszak (alapértelmezetten ki van kapcsolva)
 - showWeekend: a hét minden napját mutatja (alapértelmezetten ki van kapcsolva)

## Frissítési jegyzék:
### 1.1.1:
 - beállítások hozzáadása
 - beüzemelés egyszerűsítése
 - technikai változtatások, hibajavítások

### 1.1:
 - kategóriák alapértelmezett igazságértékei
 - elsődleges attribútum a kurzusoknak
 - nem elsődleges, ideiglenes kurzusok szűrése megjelenítéskor
 - pénteki kurzusok nincsenek automatikusan kiikszelve
