var bookCatalog = {
  'myBook1': {
    'title': 'To Kill a Mockingbird',
    'author': 'Harper Lee',
    'genre': 'coming-of-age story',
    'year of publication': 2015,
    'has been read': true,
    'main characters': ['Jean Louise Finch', 'Jeremy Finch', 'Atticus Finch'],
    'quotes': {
      'p116': '"Atticus, you must be wrong..." "How\'s that?" "Well, most folks seem to think they\'re right and you\'re wrong..." "They\'re certainly entitled to think that, and they\'re entitled to full respect for their opinions," said Atticus, "but before I can live with other folks I\'ve got to live with myself. The one thing that doesn\'t abide by majority rule is a person\'s conscience."',
      'p124': 'I wanted you to see something about her—I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It\'s when you know you\'re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.',
      'p309': '"An\' they chased him \'n\' never could catch him \'cause they didn\'t know what he looked like, an\' Atticus, when they finally saw him, why he hadn\'t done any of those things... Atticus, he was real nice..." His hands were under my chin, pulling up the cover, tucking it around me. "Most people are, Scout, when you finally see them."'
    },
    'borrowed by': 'Béla Nagy',
    'rating': 5
  },
  'myBook2':{
    'title': 'The Picture of Dorian Gray',
    'author': 'Oscar Wilde',
    'genre': 'philosophical fiction',
    'year of publication': 2016,
    'has been read': true,
    'main characters': ['Dorian Gray', 'Lord Henry Wotton', 'Basil Hallward'],
    'quotes':[
      'p12 : You are an extraordinary fellow. You never say a moral thing, and you never do a wrong thing. Your cynicism is simply a pose.',
      'p46 : Nowadays most people die of a sort of creeping common sense, and discover when it is too late that the only things one never regrets are one\'s mistakes.',
      'p127 : That book you sent me so fascinated me that I forgot how the time was going." "Yes: I thought you would like it," replied his host, rising from his chair. "I didn\'t say I liked it, Harry. I said it fascinated me. There is a great difference." "Ah, you have discovered that?"'
    ],
    'borrowed by':null,
    'rating': 5
  },
  'myBook3': {
    'title': 'The Hitchhiker\'s Guide to the Galaxy',
    'author': 'Douglas Adams',
    'genre': 'comedy science fiction',
    'year of publication': 2001,
    'has been read': false,
    'main characters': [],
    'quotes': [],
    'borrowed by': null,
    'rating': undefined
  },
  'page marker': function (book) {
    var pageInitial = this[book].page;
    this[book].page = prompt('What page are you on in the book titled ' + this[book].title + '?');
    if (typeof pageInitial === 'undefined') {
      alert('You are on page ' + this[book].page + ' in the book titled ' + this[book].title + '.');
    } else {
      alert('You are on page ' + this[book].page + ' in the book titled ' + this[book].title + '. Last time you were on page ' + pageInitial + ', so you have read ' + (this[book].page - pageInitial) + ' pages this time.');
    }
  },
  'unread': function () {
    var booksToRead = [];
    for (var book in this) {
      if (this[book]['has been read'] === false) {
        booksToRead.push(this[book].title);
      }
    }
    if (booksToRead.length === 0) {
      console.log('You have read all your books.');
    } else {
      console.log('You have not read the following books: ' + booksToRead);
    }
  },
  'changeProperty':function(book,property){
    this[book][property] =prompt('Add meg az uj adatot');
    alert('Az uj adat '+ this[book][property]);
    
  },
'addQuote' : function (book){
  var addPage = prompt('Add megaz oldalszámot');
  var addSentance = prompt('Add meg az idézetet');
  alert('A '+addPage+' oldalhoz a következö bejegyzést rendelted hozzá '+addSentance+' .');
  this[book]['quotes'].push(addPage +':'+addSentance)
},
  'add quote': function (book, page) { // hozz létre egy metódust két paraméterrel
  this[book].quotes[page] = prompt('Mi az idézet, amit hozzá szeretnél adni az idézetekhez az alábbi könyvben: ' + this[book].title + '?'); // kérdezd meg az idézetet
  alert('Az alábbi idézetet hozzáadtad az idézetekhez a könyvben, melynek címe ' + this[book].title + ': ' + this[book].quotes[page]); // igazold vissza az idézetet
},
  'borrowed' : function(){
    var borrowedBooks =[];
    for(var book in this){
      if (typeof this[book] !== 'function'){
      if(this[book]['borrowed by']!= null){
        borrowedBooks.push(this[book].title, this[book]['borrowed by']);
      }
      }
    }
   if(borrowedBooks.length === 0){console.log('Egyik könyved sincs kölcsönadva épp.');                  } else{
   console.log(borrowedBooks);
  }
  }
};