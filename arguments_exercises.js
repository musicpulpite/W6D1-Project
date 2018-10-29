function sum(arguments) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

function sum2(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
}

console.log(sum([1,2,3]));
console.log(sum2(1,2,3));
console.log(sum2([1,2,3])); //////does not work

Function.prototype.myBind = function (context, ...args1) {

  return (...args2) => {
    this.apply(context, args1.concat(args2));
  };
};





class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true


////////////////////////

function curriedSum(numArgs) {
  let nums = [];

  let _curriedSum = function(num) {
    nums.push(num);

    if (nums.length === numArgs) {
      return nums.reduce((acc, el) => {
        return acc + el;
      });
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
}

////////////////

function sum(num1, num2, num3) {
  return console.log(num1 + num2 + num3);
}

/////Version 1:

Function.prototype.curry = function (numArgs) {
  let args = [];

  let curryFunction = (arg) => {
    args.push(arg);

    if (args.length === numArgs) {
      this(...args);
    } else {
      return curryFunction;
    }
  };
  return curryFunction;
};

/////////////////////

function sum2(arguments) {
  return arguments[0] + arguments[1] + arguments[2];
}

Function.prototype.curry2 = function (numArgs) {
  let args = [];

  let curryFunction = (arg) => {
    args.push(arg);

    if (args.length === numArgs) {
      this.apply(null, args);
    } else {
      return curryFunction;
    }
  };
  return curryFunction;
};

let s = sum2.curry2(3);
s(1);
s(2);
s(3);
