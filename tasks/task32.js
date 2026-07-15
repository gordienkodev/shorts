JSON.stringify(undefined);      
// undefined
JSON.stringify(function(){});  
// undefined

JSON.stringify(
  [1, undefined, function(){}, 4]
);
// "[1,null,null,4]"

JSON.stringify(
  { a: 2, b: function(){} }
);
// '{"a":2}'