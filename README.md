#Languagey Thing Spec

(Whatever this is called) is a web application that stores commonly-used classroom phrases ("Good morning!", "...what?", "I have no idea", "ARRRGH" etc.) and translations of these phrases into the many languages spoken by those in our class. The application will allow us to add new phrases, save our favorites, and review them like flashcards.

Our class is full of folks who speak a second language - let's take advantage of that!

##Features:

1. Basic Site Features
  - Phrases in the database are displayed as "cards" containing:
    - The original English phrase,
    - A description/explanation of the phrase,
    - Any number of translations in one of the supported languages,
    - A phonetic version of a translation for character-based scripts or non-romanized alphabets
    - The usernames of translation contributors
  - Anyone visiting the site can browse the phrases in our database and see translations (ordered from most recent to oldest).
  - Site visitors can see cards by "tag", or category.
  - Site visitors can also browse by language.

2. User-specific Features
  - Visitors to the site can create user accounts.
  - Users can log in to the site to unlock more features!
    - Users can create new phrase cards.
    - Users can add translations to existing phrase cards.
    - Users can edit existing translations that are already attached to phrase cards.
    - Users can save cards to a "favorites" list.
    - Users can view cards by "favorite" status.
    - Users can view cards that they have contributed to.
    - Users can add category tags to existing cards.

3. Administrators
  - Users can be given admin status (how should we handle this? Backend?).
  - Admins can delete phrase cards.
  - _Admins can view a list of all users?_
  - _Admins can delete user accounts??_

Database Structure

ERD: