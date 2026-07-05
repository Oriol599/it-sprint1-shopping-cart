# Exercici pràctic 2: Shopping Cart

En aquest exercici construirem un carretó de la compra on explorarem dues formes diferents de gestionar esdeveniments:

1. Afegint un event listener individual a cada botó.
2. Utilitzant un únic event listener al contenidor pare (delegació d'esdeveniments).

A més, separarem la lògica de negoci (càlcul de preus, gestió dels articles) de la renderització (manipulació del DOM). Com a extra, utilitzarem *factory functions* per crear elements din Mifflinics i gestionarem l'estat amb un *state container* centralitzat.

L'aplicació mostrarà una llista de productes amb un botó per afegir al carretó. El carretó mostrarà els productes afegits, la quantitat, el preu unitari i el preu total. També permetrà eliminar productes del carretó.

## Objectius

* **Comparar el rendiment** d'afegir listeners individuals vs. un únic listener al contenidor pare.
* **Separar la lògica de negoci** de la renderització del DOM per mantenir un codi més net i mantenible.
* **Utilitzar factory functions** per crear elements dinàmics.
* **Implementar un state container** per gestionar l'estat de l'aplicació.
* **Practicar ES6+** (arrow functions, destructuring, template literals, etc.).

## Passos a seguir

1. Crea el teu propi repositori a GitHub amb el nom `it-sprint1-shopping-cart`.
2. Clona'l al teu entorn local.
3. Crea la branca corresponent a l'exercici (veure taula següent).
4. Treballa la versió de l'exercici a la branca creada, fes *commit* cada vegada que afegeixes alguna funcionalitat o arreglis alguna cosa.
5. Quan finalitzis la versió de l'exercici puja-la al repositori de GitHub i obre un *pull request* per fer un *merge* amb la branca `main`.

| Versió exercici | Nom branca |
| :--- | :--- |
| 1 | `feat/event-listeners-individuals` |
| 2 | `feat/event-delegation` |
| 3 | `feat/concerns-separation` |
| 4 | `feat/factory-functions` |
| 5 | `feat/state-container` |

---

## Versió 1: Carretó amb event listeners individuals per als botons d'afegir i eliminar

* Crea un array de productes (objectes amb `id`, `nom`, `preu`).
  > **Tip:** Encara que l'idioma de l'aplicació sigui el català, l'estructura del codi (noms de variables i funcions) és millor que la facis en anglès.
* Renderitza la llista de productes en el DOM. Cada producte ha de tenir:
  * Nom
  * Preu
  * Botó "Afegir al carretó"
* Renderitza el carretó (inicialment buit). El carretó ha de mostrar:
  * Llista d'articles afegits (`id`, `nom`, `quantitat`, `preu unitari`, `preu total` per article).
  * Preu total del carretó.
  * Per cada article, un botó per eliminar-lo.
* Afegeix *event listeners* individuals a cada botó "Afegir" i "Eliminar":
  * Al fer clic a "Afegir", s'afegeix el producte al carretó (o s'incrementa la quantitat si ja existeix).
  * Al fer clic a "Eliminar" d'un article del carretó, es redueix la quantitat o s'elimina si la quantitat és 1.
* Actualitza la vista del carretó cada vegada que es fa un canvi.

## Versió 2: Delegació d'esdeveniments

* Elimina els *event listeners* individuals.
* Afegeix un *event listener* al contenidor de la llista de productes (per capturar els clics en els botons "Afegir").
* Afegeix un *event listener* al contenidor del carretó (per capturar els clics en els botons "Eliminar").
* Utilitza la **delegació d'esdeveniments** per identificar quin botó s'ha clicat i actuar en conseqüència.

## Versió 3: Separació de responsabilitats

* Crea un mòdul per a la lògica de negoci (`businessLogic.js`) que contingui:
  * L'estat del carretó (un array d'objectes `{ id, nom, preu, quantitat }`).
  * Funcions per afegir un producte, eliminar un producte, calcular el preu total, etc.
* Crea un mòdul per a la renderització (`render.js`) que contingui funcions per:
  * Renderitzar la llista de productes.
  * Renderitzar el carretó.
  * Actualitzar el carretó quan l'estat canviï.
* Utilitza un patró d'observador o simplement crida a les funcions de renderització des de les funcions que modifiquen l'estat.

## Versió 4: Factory functions (extra)

* Crea una *factory function* per crear un element de producte en la llista.
* Crea una *factory function* per crear un element d'article en el carretó.

## Versió 5: State container (extra)

* Utilitza un objecte com a *state container* que contingui l'estat del carretó i funcions per modificar-lo.
* Fes que aquest objecte notifiqui als observadors (per exemple, la funció de renderització) quan l'estat canviï.

## Més Bonus tracks

* Afegeix la possibilitat de modificar quantitats directament al carretó.
* Implementa persistència de dades amb `localStorage`.
* Afegeix funcionalitat per buidar tot el carretó.
* Implementa un sistema de descompte o promocions.
* Millora l'estil amb CSS.
