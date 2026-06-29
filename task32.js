JSON.stringify(undefined);      // 
JSON.stringify(function(){});   // 

JSON.stringify(
  [1, undefined, function(){}, 4]
);
// 

JSON.stringify(
  { a: 2, b: function(){} }
);
// 