class PrintEditionItem {
   constructor( name, releaseDate, pagesCount ){
      this.name = name,
      this.releaseDate = releaseDate,
      this.pagesCount = pagesCount,
      this.state = 100,
      this.type = null
   }

   fix() {
     this.state = this.state * 1.5      
   }

   set state (number) {
      if (number < 0) {
         this._state = 0;
      } else if (number > 100) {
         this._state = 100;
      } else {
         this._state = number;
      }
   }

   get state () {
      return this._state
   }

};

class Magazine extends PrintEditionItem {
   constructor( name, releaseDate, pagesCount ){
      super(name, releaseDate, pagesCount),
      this.type = "magazine"
   }
};

class Book extends PrintEditionItem {
   constructor( author, name, releaseDate, pagesCount ){
      super(name, releaseDate, pagesCount),
      this.type = "book",
      this.author = author
   }
};

class NovelBook extends Book {
   constructor ( author, name, releaseDate, pagesCount ) {
      super(author, name, releaseDate, pagesCount),
      this.type = "novel" 
   }
};

class FantasticBook extends Book {
   constructor (author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount),
      this.type = "fantastic" 
   }
};

class DetectiveBook extends Book {
   constructor (author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount),
      this.type = "detective" 
   }
};

// Задание 2
class Library {
   constructor (name) {
      this.name = name,
      this.books = []
   }

   addBook (book) {
     if ( book._state > 30) {
         this.books.push(book);
      }
   }

   findBookBy (type, value) {
      let book = this.books.find( function (item) {
         if(item[type] === value) {
            return item[type]
         } 
      })
      if ( book != undefined){
         return book
      } else {
         return null
      }
   }

   giveBookByName(bookName) {
      
      let indexDeleteBook = this.books.findIndex(item => item.name === bookName)
      
      if (indexDeleteBook === -1)  {
         return null
      } else {
         const book = this.books.splice(indexDeleteBook, 1)[0]
         console.log(book)
         return book;

      }
        
   }
}

// Задание 3
function Student(name, gender, age) {
   this.name = name,
   this.gender = gender,
   this.age = age
     // Ваш код
 
 };
 
 Student.prototype.setSubject = function (subjectName) {
   //ваш код
   this.subject = subjectName
   
 };
 
 // ваш код для остальных методов
 Student.prototype.addMark = function (mark, subject) {
   
   if (this.subject === undefined) {
     this.subject = [mark];
   }else {
    this.subject.push(mark);
   };
 };
   
 Student.prototype.addMarks = function ( ...marks, ) {
   if (this.subject === undefined) {
     this.subject = [...marks];
   }else {
     this.subject.push(...marks);
   };
 };
 
 Student.prototype.getAverage = function () {
   this.average = this.marks.reduce((acc, item, index, arr) => {
     acc += item;
     if (index === arr.length - 1) {
       return acc / arr.length;
     };
     
     return acc; 
 
   }, 0);
   return this.average
     // this.average = this.mark / this.mark.length
 };
 
 Student.prototype.exclude = function (reason) {
   this.excluded = reason,
   delete this.marks,
   delete this.subject
 };
 
