function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title}, написанная ${this.author}, опубликованная в ${this.year} году.`;
  };
}

let book1 = new Book("Джамиля", "Чынгыз Айтматов", 1958);
let book2 = new Book("Сказка о царе Салтане", " А.С. Пушкина", 1831);
let book3 = new Book("1984", "Джордж Оруэлл", 1949);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());

let book4 = Book("Тестовая книга", "Тестовый автор", 2022);

console.log(book4);
console.log(title);

function Student(name, grade) {
  this.name = name;
  this.grade = grade;

  this.study = function () {
    console.log(`${this.name} учиться в ${this.grade} класс`);
  };
}
let student1 = new Student("kutman", 11);
let student2 = new Student("Asema", 8);
let student3 = new Student("Adilet", 10);

student1.study();
student2.study();9
student3.study();
