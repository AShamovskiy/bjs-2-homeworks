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
Student.prototype.addMark = function (mark) {
  
  if (this.marks === undefined) {
    this.marks = [mark];
  }else {
   this.marks.push(mark);
  };
};
  
Student.prototype.addMarks = function (...marks) {
  
  if (this.marks === undefined) {
    this.marks = [...marks];
  }else {
    this.marks.push(...marks);
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

