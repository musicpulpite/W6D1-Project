Function.prototype.inherits = function (ParentConstructor) {
  function Surrogate () {}

  Surrogate.prototype = ParentConstructor.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


function Student(name) {
  this.name = name;
}

Student.prototype.learns = function() {
  console.log(`${this.name} is learning`);
};


function Elementary(name) {
  this.name = name;
}
Elementary.inherits(Student);


Elementary.prototype.naps = function () {
  console.log(`${this.name} is napping`);
};

let student = new Student('Student');
let elementary = new Elementary('Ele');

student.learns();
elementary.learns();
elementary.naps();
student.naps();
