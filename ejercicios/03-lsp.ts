// class Rectangle {
//   constructor(protected width: number, protected height: number) {}

//   setWidth(width: number): void {
//     this.width = width;
//   }

//   setHeight(height: number): void {
//     this.height = height;
//   }

//   area(): number {
//     return this.width * this.height;
//   }
// }

// class Square extends Rectangle {
//   setWidth(width: number): void {
//     this.width = width;
//     this.height = width;
//   }

//   setHeight(height: number): void {
//     this.width = height;
//     this.height = height;
//   }
// }

// function resizeRectangle(rectangle: Rectangle): void {
//   rectangle.setWidth(5);
//   rectangle.setHeight(10);
//   console.log(`Area esperada: 50. Area obtenida: ${rectangle.area()}`);
// }

// resizeRectangle(new Rectangle(1, 1));
// resizeRectangle(new Square(1, 1));


interface Shape{
  area(): number
}

class Square implements Shape {
  w: number;
  h: number;

  constructor(w: number, h: number) {
    this.w = w;
    this.h = h;

  }
  area() {

    const area = this.h * this.w

    return area
  }
}
class Rectangle implements Shape {
  w: number;
  h: number;

  constructor(w: number, h: number) {
    this.w = w;
    this.h = h;

  }
  area() {

    const area = this.h * this.w

    return area
  }
}

function resizeRectangle(rectangle: Rectangle) {
  rectangle.h = 5
  rectangle.w = 10 

  console.log(`Area esperada 50. Area obtenida ${rectangle.area()}`)
}

resizeRectangle(new Rectangle(5, 5))