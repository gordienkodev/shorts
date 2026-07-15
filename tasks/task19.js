//что мы получим при вызове методов

const myCat = {
  sound: 'meow',

  say: () => {
    console.log(this.sound);
  },

  say2: function () {
    console.log(this.sound);
  }
};

myCat.say();   // undefined
myCat.say2();  // meow

const { say, say2 } = myCat;

say();   // undefined
say2();  // undefined

const bindFn = myCat.say2.bind(myCat);
bindFn(); 

const callFn = function () {
  return myCat.say2.call(myCat);
};
callFn();
