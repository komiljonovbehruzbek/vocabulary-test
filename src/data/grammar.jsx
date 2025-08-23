const grammar = {
    A1: [
        // Plural Forms of Nouns
        { question: "Which of these nouns has an irregular plural form in the sentence: 'The child plays with ___'?", options: ["childs", "children", "childes", "child"], correct: "children" },
        { question: "Choose the correct plural form for 'man' in: 'The ___ are working hard.'", options: ["mans", "men", "manies", "men’s"], correct: "men" },
        { question: "Which sentence uses the plural form correctly: 'The sheeps are in the field' or 'The sheep are in the field'?", options: ["The sheeps are in the field", "The sheep are in the field"], correct: "The sheep are in the field" },
        { question: "Select the correct plural for 'tooth' in: 'She brushed her ___.'", options: ["tooths", "teeth", "toothies", "toothes"], correct: "teeth" },
        { question: "In 'The mice ate the cheese,' what is the plural of 'mouse'?", options: ["mouses", "mice", "mousees", "mices"], correct: "mice" },

        // Irregular Nouns
        { question: "Which word is the irregular plural of 'foot' in: 'He hurt his ___ while running'?", options: ["foots", "feet", "footies", "footes"], correct: "feet" },
        { question: "Identify the irregular plural form in: 'The geese flew over the lake.'", options: ["geese", "gooses", "goosees", "gees"], correct: "geese" },
        { question: "Which sentence uses an irregular plural correctly: 'The deer are in the forest' or 'The deers are in the forest'?", options: ["The deers are in the forest", "The deer are in the forest"], correct: "The deer are in the forest" },
        { question: "What is the irregular plural of 'woman' in: 'The ___ are dancing'?", options: ["womans", "womens", "women", "womanes"], correct: "women" },
        { question: "In 'The oxen pulled the cart,' what is the plural of 'ox'?", options: ["oxes", "oxen", "oxies", "oxs"], correct: "oxen" },

        // Pronouns (Subject/Possessive Adjectives/Object Pronouns)
        { question: "Choose the correct pronoun to complete: '___ is reading a book, and it’s ___ favorite.'", options: ["She, her", "He, his", "They, their", "It, its"], correct: "She, her" },
        { question: "Which sentence uses the object pronoun correctly: 'I gave the gift to ___'?", options: ["he", "him", "his", "she"], correct: "him" },
        { question: "Select the correct possessive adjective: '___ car is parked outside.'", options: ["Their", "Them", "They", "Theirs"], correct: "Their" },
        { question: "In 'She gave ___ the book,' what is the object pronoun?", options: ["me", "my", "I", "mine"], correct: "me" },
        { question: "Which option fits: '___ are playing, and ___ ball is red.'?", options: ["They, their", "We, our", "You, your", "He, his"], correct: "They, their" },

        // Imperative Sentences
        { question: "Which is a correct imperative sentence: 'Please ___ the door' or 'You open the door'?", options: ["Please open the door", "You open the door"], correct: "Please open the door" },
        { question: "Choose the imperative form: '___ your homework now!'", options: ["Do", "Does", "Did", "Doing"], correct: "Do" },
        { question: "Which sentence is an imperative: 'Close the window quietly' or 'He closes the window'?", options: ["Close the window quietly", "He closes the window"], correct: "Close the window quietly" },
        { question: "Select the correct imperative: '___ to me carefully!'", options: ["Listen", "Listens", "Listening", "Listened"], correct: "Listen" },
        { question: "Which is an imperative with politeness: '___ sit down, please'?", options: ["Please sit down", "Sit down", "Sitting down", "Sits down"], correct: "Please sit down" },

        // To Be
        { question: "Choose the correct form: '___ you a student?'", options: ["Is", "Are", "Am", "Be"], correct: "Are" },
        { question: "Which sentence is correct: 'She ___ happy today' or 'She am happy today'?", options: ["She is happy today", "She am happy today"], correct: "She is happy today" },
        { question: "Select the right form: 'They ___ at home now.'", options: ["is", "are", "am", "be"], correct: "are" },
        { question: "In 'I ___ tired after work,' what is the correct verb?", options: ["is", "are", "am", "be"], correct: "am" },
        { question: "Which is correct: 'The book ___ on the table' or 'The book are on the table'?", options: ["The book is on the table", "The book are on the table"], correct: "The book is on the table" },

        // Apostrophe S
        { question: "Choose the correct form: 'This is ___ book.' (belonging to John)", options: ["Johns", "John's", "John", "Johns'"], correct: "John's" },
        { question: "Which sentence uses apostrophe s correctly: 'The dog’s tail is long' or 'The dogs tail is long'?", options: ["The dog’s tail is long", "The dogs tail is long"], correct: "The dog’s tail is long" },
        { question: "Select the right possessive: '___ car is new.' (belonging to Mary)", options: ["Marys", "Mary's", "Mary", "Marys'"], correct: "Mary's" },
        { question: "In 'The children’s toys are here,' where is the apostrophe?", options: ["childrens", "children's", "childrens'", "childrens"], correct: "children's" },
        { question: "Which is correct: 'The teacher’s room' or 'The teachers room'?", options: ["The teacher’s room", "The teachers room"], correct: "The teacher’s room" },

        // Nouns (Countable/Uncountable)
        { question: "Which noun is uncountable: 'I bought ___ milk'?", options: ["apples", "milk", "books", "chairs"], correct: "milk" },
        { question: "Choose the correct article: 'I need ___ information.'", options: ["some", "a", "an", "the"], correct: "some" },
        { question: "Which is countable: 'She has ___ dogs' or 'She has ___ water'?", options: ["dogs", "water"], correct: "dogs" },
        { question: "Select the uncountable noun: 'There is ___ sugar in the tea.'", options: ["a sugar", "some sugar", "sugars", "a few sugars"], correct: "some sugar" },
        { question: "Which sentence is correct: 'I have many friends' or 'I have many luggages'?", options: ["I have many friends", "I have many luggages"], correct: "I have many friends" },

        // Articles
        { question: "Choose the correct article: '___ sun is shining.'", options: ["A", "An", "The", "No article"], correct: "The" },
        { question: "Which is correct: 'I saw ___ elephant' or 'I saw an elephant'?", options: ["I saw the elephant", "I saw an elephant"], correct: "I saw an elephant" },
        { question: "Select the right article: 'She is ___ best student.'", options: ["a", "an", "the", "no article"], correct: "the" },
        { question: "In '___ apple a day keeps the doctor away,' what article is used?", options: ["A", "An", "The", "No article"], correct: "An" },
        { question: "Which sentence needs no article: 'I like to play ___ football'?", options: ["the", "a", "an", "no article"], correct: "no article" },

        // Have/Has Got
        { question: "Choose the correct form: 'She ___ a new bike.'", options: ["have got", "has got", "had got", "having got"], correct: "has got" },
        { question: "Which is correct: 'They ___ two cats' or 'They has two cats'?", options: ["They have got two cats", "They has two cats"], correct: "They have got two cats" },
        { question: "Select the right form: 'I ___ a big house.'", options: ["have got", "has got", "had got", "having got"], correct: "have got" },
        { question: "In 'He ___ a headache,' what is the correct verb?", options: ["have got", "has got", "had got", "having got"], correct: "has got" },
        { question: "Which sentence is correct: 'We ___ no money' or 'We has no money'?", options: ["We have got no money", "We has no money"], correct: "We have got no money" },

        // There Is/Are
        { question: "Choose the correct form: '___ a book on the table.'", options: ["There is", "There are", "There was", "There were"], correct: "There is" },
        { question: "Which is correct: '___ two cats in the garden' or '___ two cat in the garden'?", options: ["There is two cats", "There are two cats"], correct: "There are two cats" },
        { question: "Select the right form: '___ a problem with the car.'", options: ["There is", "There are", "There was", "There were"], correct: "There is" },
        { question: "In '___ some water in the glass,' what is correct?", options: ["There is", "There are", "There was", "There were"], correct: "There is" },
        { question: "Which sentence is correct: '___ three chairs in the room' or '___ three chair in the room'?", options: ["There is three chairs", "There are three chairs"], correct: "There are three chairs" },

        // Demonstrative Pronouns
        { question: "Choose the correct demonstrative: '___ book is mine.'", options: ["This", "These", "That", "Those"], correct: "This" },
        { question: "Which is correct: '___ apples are red' or 'This apples are red'?", options: ["These apples are red", "This apples are red"], correct: "These apples are red" },
        { question: "Select the right pronoun: '___ is my house over there.'", options: ["This", "These", "That", "Those"], correct: "That" },
        { question: "In '___ cars are expensive,' what is correct?", options: ["That", "These", "This", "Those"], correct: "Those" },
        { question: "Which sentence uses demonstrative correctly: '___ pen is yours'?", options: ["This", "These", "That", "Those"], correct: "This" },

        // Present Simple
        { question: "Choose the correct form: 'She ___ to school every day.'", options: ["go", "goes", "going", "gone"], correct: "goes" },
        { question: "Which is correct: 'They play football' or 'They plays football'?", options: ["They play football", "They plays football"], correct: "They play football" },
        { question: "Select the right verb: 'He ___ coffee in the morning.'", options: ["drink", "drinks", "drinking", "drinked"], correct: "drinks" },
        { question: "In 'We ___ TV at night,' what is correct?", options: ["watch", "watches", "watching", "watched"], correct: "watch" },
        { question: "Which sentence is correct: 'She work hard' or 'She works hard'?", options: ["She work hard", "She works hard"], correct: "She works hard" },

        // Present Continuous
        { question: "Choose the correct form: 'They ___ football now.'", options: ["play", "plays", "playing", "are playing"], correct: "are playing" },
        { question: "Which is correct: 'She is read a book' or 'She is reading a book'?", options: ["She is read a book", "She is reading a book"], correct: "She is reading a book" },
        { question: "Select the right verb: 'I ___ to music at the moment.'", options: ["listen", "listens", "listening", "am listening"], correct: "am listening" },
        { question: "In 'We ___ dinner now,' what is correct?", options: ["cook", "cooks", "cooking", "are cooking"], correct: "are cooking" },
        { question: "Which sentence is correct: 'He run in the park' or 'He is running in the park'?", options: ["He run in the park", "He is running in the park"], correct: "He is running in the park" },

        // Can
        { question: "Choose the correct form: 'She ___ swim very well.'", options: ["can", "cans", "could", "is can"], correct: "can" },
        { question: "Which is correct: 'They can runs' or 'They can run'?", options: ["They can runs", "They can run"], correct: "They can run" },
        { question: "Select the right sentence: 'I can to sing' or 'I can sing'?", options: ["I can to sing", "I can sing"], correct: "I can sing" },
        { question: "In 'He ___ play the piano,' what is correct?", options: ["can", "cans", "could", "is can"], correct: "can" },
        { question: "Which sentence is correct: 'We can goes' or 'We can go'?", options: ["We can goes", "We can go"], correct: "We can go" },

        // Adjectives and Adverbs
        { question: "Choose the correct form: 'She sings ___.'", options: ["beautiful", "beautifully", "beauty", "beautify"], correct: "beautifully" },
        { question: "Which is correct: 'He runs quick' or 'He runs quickly'?", options: ["He runs quick", "He runs quickly"], correct: "He runs quickly" },
        { question: "Select the adjective: 'The ___ flower is red.'", options: ["beautiful", "beautifully", "beauty", "beautify"], correct: "beautiful" },
        { question: "In 'They speak ___,' what is the adverb?", options: ["loud", "loudly", "loudness", "louder"], correct: "loudly" },
        { question: "Which sentence uses an adverb correctly: 'She dances good' or 'She dances well'?", options: ["She dances good", "She dances well"], correct: "She dances well" },

        // Present Future (Should/Must)
        { question: "Choose the correct modal: 'You ___ wear a seatbelt.'", options: ["should", "must", "can", "will"], correct: "must" },
        { question: "Which is correct: 'We should to study' or 'We should study'?", options: ["We should to study", "We should study"], correct: "We should study" },
        { question: "Select the right sentence: 'He must goes' or 'He must go'?", options: ["He must goes", "He must go"], correct: "He must go" },
        { question: "In 'They ___ finish the work,' what is correct?", options: ["should", "must", "can", "will"], correct: "should" },
        { question: "Which sentence is correct: 'I must to help' or 'I must help'?", options: ["I must to help", "I must help"], correct: "I must help" },

        // Past Simple
        { question: "Choose the correct form: 'She ___ to the park yesterday.'", options: ["go", "goes", "went", "going"], correct: "went" },
        { question: "Which is correct: 'They play football' or 'They played football'?", options: ["They play football", "They played football"], correct: "They played football" },
        { question: "Select the right verb: 'He ___ a book last night.'", options: ["read", "reads", "reading", "readed"], correct: "read" },
        { question: "In 'We ___ TV yesterday,' what is correct?", options: ["watch", "watches", "watched", "watching"], correct: "watched" },
        { question: "Which sentence is correct: 'She walk home' or 'She walked home'?", options: ["She walk home", "She walked home"], correct: "She walked home" },

        // Past Simple to Be
        { question: "Choose the correct form: 'I ___ at home yesterday.'", options: ["was", "were", "am", "is"], correct: "was" },
        { question: "Which is correct: 'They ___ happy last night' or 'They was happy last night'?", options: ["They were happy last night", "They was happy last night"], correct: "They were happy last night" },
        { question: "Select the right form: 'She ___ tired after the game.'", options: ["was", "were", "is", "are"], correct: "was" },
        { question: "In 'We ___ at the party,' what is correct?", options: ["was", "were", "is", "are"], correct: "were" },
        { question: "Which sentence is correct: 'He were sick' or 'He was sick'?", options: ["He were sick", "He was sick"], correct: "He was sick" },

        // There Was/Were
        { question: "Choose the correct form: '___ a dog in the garden yesterday.'", options: ["There was", "There were", "There is", "There are"], correct: "There was" },
        { question: "Which is correct: '___ two birds in the tree' or '___ two bird in the tree'?", options: ["There was two birds", "There were two birds"], correct: "There were two birds" },
        { question: "Select the right form: '___ a problem last week.'", options: ["There was", "There were", "There is", "There are"], correct: "There was" },
        { question: "In '___ some water in the bottle,' what is correct?", options: ["There was", "There were", "There is", "There are"], correct: "There was" },
        { question: "Which sentence is correct: '___ three cars outside' or '___ three car outside'?", options: ["There was three cars", "There were three cars"], correct: "There were three cars" },

        // Going To
        { question: "Choose the correct form: 'I ___ to visit my friend tomorrow.'", options: ["am going", "is going", "are going", "was going"], correct: "am going" },
        { question: "Which is correct: 'They ___ to play football' or 'They going to play football'?", options: ["They are going to play football", "They going to play football"], correct: "They are going to play football" },
        { question: "Select the right sentence: 'She is go to school' or 'She is going to school'?", options: ["She is go to school", "She is going to school"], correct: "She is going to school" },
        { question: "In 'We ___ to travel next month,' what is correct?", options: ["are going", "is going", "am going", "were going"], correct: "are going" },
        { question: "Which sentence is correct: 'He go to the park' or 'He is going to the park'?", options: ["He go to the park", "He is going to the park"], correct: "He is going to the park" },

        // Prepositions (at/in/on)
        { question: "Choose the correct preposition: 'We meet ___ 5 PM.'", options: ["at", "in", "on", "to"], correct: "at" },
        { question: "Which is correct: 'She lives ___ London' or 'She lives at London'?", options: ["She lives in London", "She lives at London"], correct: "She lives in London" },
        { question: "Select the right preposition: 'The meeting is ___ Monday.'", options: ["at", "in", "on", "to"], correct: "on" },
        { question: "In 'The book is ___ the table,' what is correct?", options: ["at", "in", "on", "to"], correct: "on" },
        { question: "Which sentence uses prepositions correctly: 'He was born ___ 1995'?", options: ["in", "at", "on", "to"], correct: "in" }
    ],

    A2: [
        // Could
        { question: "Choose the correct form: 'When I was young, I ___ run fast.'", options: ["can", "could", "will", "would"], correct: "could" },
        { question: "Which is correct: 'She could to swim' or 'She could swim'?", options: ["She could to swim", "She could swim"], correct: "She could swim" },
        { question: "Select the right sentence: 'They could plays' or 'They could play'?", options: ["They could plays", "They could play"], correct: "They could play" },
        { question: "In 'He ___ speak three languages,' what is correct?", options: ["can", "could", "will", "would"], correct: "could" },
        { question: "Which sentence is correct: 'I could went' or 'I could go'?", options: ["I could went", "I could go"], correct: "I could go" },

        // Have/Has To
        { question: "Choose the correct form: 'You ___ wear a uniform at school.'", options: ["have to", "has to", "had to", "having to"], correct: "have to" },
        { question: "Which is correct: 'She has to goes' or 'She has to go'?", options: ["She has to goes", "She has to go"], correct: "She has to go" },
        { question: "Select the right sentence: 'They have to study' or 'They has to study'?", options: ["They have to study", "They has to study"], correct: "They have to study" },
        { question: "In 'He ___ finish the project,' what is correct?", options: ["have to", "has to", "had to", "having to"], correct: "has to" },
        { question: "Which sentence is correct: 'We have to worked' or 'We have to work'?", options: ["We have to worked", "We have to work"], correct: "We have to work" },

        // Past Continuous
        { question: "Choose the correct form: 'They ___ football when it started raining.'", options: ["were playing", "was playing", "played", "are playing"], correct: "were playing" },
        { question: "Which is correct: 'She was read a book' or 'She was reading a book'?", options: ["She was read a book", "She was reading a book"], correct: "She was reading a book" },
        { question: "Select the right verb: 'I ___ to music yesterday.'", options: ["was listening", "were listening", "listened", "am listening"], correct: "was listening" },
        { question: "In 'We ___ dinner when he arrived,' what is correct?", options: ["were cooking", "was cooking", "cooked", "are cooking"], correct: "were cooking" },
        { question: "Which sentence is correct: 'He run in the park' or 'He was running in the park'?", options: ["He run in the park", "He was running in the park"], correct: "He was running in the park" },

        // Adjectives (Positive/Comparative/Superlative)
        { question: "Choose the comparative form: 'This bag is ___ than that one.'", options: ["big", "bigger", "biggest", "more big"], correct: "bigger" },
        { question: "Which is correct: 'She is the tall' or 'She is the tallest'?", options: ["She is the tall", "She is the tallest"], correct: "She is the tallest" },
        { question: "Select the positive adjective: 'The house is ___.'", options: ["beautiful", "more beautiful", "most beautiful", "beautifuller"], correct: "beautiful" },
        { question: "In 'This is ___ car in the world,' what is correct?", options: ["expensive", "more expensive", "most expensive", "expensivest"], correct: "the most expensive" },
        { question: "Which sentence uses superlative correctly: 'He is taller than me' or 'He is the tallest in class'?", options: ["He is taller than me", "He is the tallest in class"], correct: "He is the tallest in class" },

        // Much/Many/Some/Any/A Few/Few/A Little/Little
        { question: "Choose the correct word: 'I have ___ friends.'", options: ["much", "many", "some", "little"], correct: "some" },
        { question: "Which is correct: 'She needs much water' or 'She needs a little water'?", options: ["She needs much water", "She needs a little water"], correct: "She needs a little water" },
        { question: "Select the right form: 'There are ___ books on the shelf.'", options: ["few", "a few", "little", "a little"], correct: "a few" },
        { question: "In 'We have ___ time left,' what is correct?", options: ["many", "much", "any", "some"], correct: "little" },
        { question: "Which sentence is correct: 'He has any money' or 'He has some money'?", options: ["He has any money", "He has some money"], correct: "He has some money" },

        // Future Simple
        { question: "Choose the correct form: 'I ___ visit you tomorrow.'", options: ["will", "am", "was", "have"], correct: "will" },
        { question: "Which is correct: 'They will goes' or 'They will go'?", options: ["They will goes", "They will go"], correct: "They will go" },
        { question: "Select the right sentence: 'She will to help' or 'She will help'?", options: ["She will to help", "She will help"], correct: "She will help" },
        { question: "In 'We ___ travel next year,' what is correct?", options: ["will", "are", "were", "have"], correct: "will" },
        { question: "Which sentence is correct: 'He will run' or 'He will runs'?", options: ["He will run", "He will runs"], correct: "He will run" },

        // Present Perfect
        { question: "Choose the correct form: 'She ___ just finished her homework.'", options: ["has", "have", "had", "is"], correct: "has" },
        { question: "Which is correct: 'They have went' or 'They have gone'?", options: ["They have went", "They have gone"], correct: "They have gone" },
        { question: "Select the right verb: 'I ___ never seen this movie.'", options: ["have", "has", "had", "am"], correct: "have" },
        { question: "In 'He ___ lived here for five years,' what is correct?", options: ["has", "have", "had", "is"], correct: "has" },
        { question: "Which sentence is correct: 'We have saw the show' or 'We have seen the show'?", options: ["We have saw the show", "We have seen the show"], correct: "We have seen the show" },

        // First Conditional Sentence
        { question: "Choose the correct form: 'If it ___, we will stay home.'", options: ["rain", "rains", "rained", "will rain"], correct: "rains" },
        { question: "Which is correct: 'If she studies, she will pass' or 'If she will study, she passes'?", options: ["If she studies, she will pass", "If she will study, she passes"], correct: "If she studies, she will pass" },
        { question: "Select the right sentence: 'If I am tired, I will sleep' or 'If I will be tired, I sleep'?", options: ["If I am tired, I will sleep", "If I will be tired, I sleep"], correct: "If I am tired, I will sleep" },
        { question: "In 'If he ___, we will help him,' what is correct?", options: ["ask", "asks", "asked", "will ask"], correct: "asks" },
        { question: "Which sentence is correct: 'If it rain, we stay' or 'If it rains, we will stay'?", options: ["If it rain, we stay", "If it rains, we will stay"], correct: "If it rains, we will stay" }
    ]
};

export default grammar;
