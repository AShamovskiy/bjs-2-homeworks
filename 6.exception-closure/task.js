function parseCount( arg ) {
   let number;
   number = Number.parseInt( arg );
   if (Number.isNaN( number )) {
      throw new Error ( 'Невалидное значение' );
   } else {
      return number;
   }
}

function validateCount ( value ) {
   try {
      return parseCount (value);
   } catch (error) {
      return error
   }
}

class Triangle {
   constructor ( a, b, c) {
      if ((a + b) < c || (a + c) < b || (b + c) < a){
         throw new Error ('Треугольник с такими сторонами не существует')
      }

      this.a = a,
      this.b = b,
      this.c = c 
      this.perimetr = this.getPerimeter(),
      this.area = this.getArea()
      
   }

   getPerimeter() {
      let summTriangle = 0;
      return summTriangle = this.a + this.b + this.c;
   }

   getArea () {
      let squareTriangle = 0;
      let halfSquareTriangle = 1 / 2 * this.getPerimeter() 
      return squareTriangle = +(Math.sqrt(halfSquareTriangle * (halfSquareTriangle - this.a) * (halfSquareTriangle - this.b) * (halfSquareTriangle - this.c))).toFixed(3)
   }
}

function getTriangle (a, b, c) {
   
   try {
      return new Triangle(a,b,c)
   } catch {
      return {
         
         getPerimeter: () => console.log("Ошибка! Треугольник не существует"),
         getArea : () => console.log("Ошибка! Треугольник не существует")
      }
      
   }
 
}