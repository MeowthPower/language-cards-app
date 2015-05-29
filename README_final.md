#TranlateMe
###a web aplication by Team Meowth
TranslateMe is a single page web application which provides a user interface for a fun and easy way for both non-native Enlgish speakers as well as English speakers with interests in foreign languages to explore colloquial English phrases along with their translation into many foreign languages. Each English phrase is organized on to a unqiue "card", which contains an explanation of the meaning of that phrase in English, and at least one translation of that phrase into another language, which contains a visual reference utilizing that language's native alphabet, a literal English meaning of that translation, and a possibility to represent the translation's English pronunciation with Romanized phonetics.

##Features

###User Authentication
- A guest can sign with their username and password
- A guest can create a username and password

Translate me does feature user authentication, but in addition to signing in as a user or creating a new user name, some features are available to guests, viewable without signing in as a user.

###Guest Features
- A guest can view a list of cards, containing the English phrase, explanation, and when it was created. Any card on the list can be clicked to provide a view of the entire card which, shows all the translations for that phrase, and any category tags associated with that card.

- The card list can be viewed so that the cards are ordered by order of most recently created.

- A guest can view a list of all categories used to tag any of the cards

- Each category, when clicked, yields a list of cards which are tagged with that category

###User-Only Features
When signed in as a user, in addition to all guest features, a user has access to some additional features:

- A user can create a new card:

  A new card must contain an English phrase not already defining a card, and an explanation of that phrase. It can also contain one or more category tags.

- A user can add a translation to a card:
  A new translation is selected and the translation entered in the language's alphabet. The English pronunciation along with the literal meaning are entered as well.

- A user can "favorite" a card by clicking the star on the card.

- A user can view a list of cards they have selected as favorites


||

##Team Meowth
Members: Anna Rankin, Liz Fonseca, Colby Somerville, Phillip Witkin and Daniel Tomic

##Project details for TranslateMe

###Technologies:
- Single Page Web application which consumes an api serving json  provided by rails for the main app, but performs server-side rendering for user-auethentication

- ERD indicates many join tables; nested resources relied on ActiveRecord techniques on the server to ensure each api route provided correct and relevent but not excessive information for each client-side call to the server

- javascript for SPA uses backbone and underscore for logic related to DOM manipulation

- namespaced to organize backbone components,  eg router, each Model, Collection and View given its own js file

- moment.js used to format times


###Trello board: https://trello.com/b/ffOr3Vrl/knope-meowth

[Wireframes](/wireframes)

[ERD](./img/LanguageAppERD.png)
