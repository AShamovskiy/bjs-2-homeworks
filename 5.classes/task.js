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
      const book = this.books.find((item) => item[type] === value)
      return book || null

      // let book = this.books.find( function (item) {
      //    if(item[type] === value) {
      //       return item[type]
      //    } 
      // })
      // if ( book != undefined){
      //    return book
      // } else {
      //    return null
      // }
   }

   giveBookByName(bookName) {
      const indexDeleteBook = this.books.findIndex(item => item.name === bookName)
      this.books = this.books.filter((item) => item.name != bookName)
      return indexDeleteBook || null
      
      // let indexDeleteBook = this.books.findIndex(item => item.name === bookName)
      
      // if (indexDeleteBook === -1)  {
      //    return null
      // } else {
      //    const book = this.books.splice(indexDeleteBook, 1)[0]
      //    console.log(book)
      //    return book;

      // }
   }
}

// Задание 3
class Student {
   constructor (name, gender, age) {
      this.name = name,
   this.gender = gender,
   this.age = age
   }
  
   addMark = function (mark, subject) {
      if (mark < 1 || mark > 5) {
         return console.log(`Ошибка, оценка должна быть числом от 1 до 5`)
      }
      if (this.marks === undefined) {
         this.marks = []
      }
   
      if (this.marks[subject] === undefined) {
         this.marks[subject] = [mark]; 
      } else {
         this.marks[subject].push(mark);
      };
   }
   addMarks = function ( subject, ...marks) {
      if (this.marks === undefined) {
         this.marks = []
      }
         
      if (this.marks[subject] === undefined) {
         this.marks[subject] = [...marks];
      }else {
         this.marks[subject].push(...marks);
      };
   };

   getAverageBySubject = function(subject) {
      if (this.marks[subject] === undefined) {
         return console.log('Несуществующий предмет')
      }
   
      let averageBySubject = this.marks[subject].reduce((acc, item, index, arr) => {
         acc += item;
         if (index === arr.length - 1) {
            return acc / arr.length;
         }
         return acc
      }, 0); 
      return console.log(`Средний балл по предмету ${subject} : ${averageBySubject}`)
   }

   getAverage = function () {
      let average = this.marks.map((item) => getAverageBySubject(item))

      return console.log(`Средний балл по всем предметам : ${average}`)
   };

   exclude = function (reason) {
      this.excluded = reason,
      delete this.marks
   };
};

// const student = new Student("ivan", "male", 15);
// console.log(student.addMark(5, "algebra"));
// student.addMark(5, "algebra");
// student.addMark(5, "geometry");
// student.addMark(4, "geometry");
//  student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
//  student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
//  student.getAverageBySubject("algebra"); // Средний балл по предмету geometry 4.5
//  student.getAverageBySubject("biology"); // Несуществующий предмет
//  student.getAverage(); // Средний балл по всем предметам 4.75
//  student.exclude("Исключен за попытку подделать оценки");