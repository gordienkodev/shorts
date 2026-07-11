(function (context) {
  const f = () => console.log(this === context);

  f.call("Awesome thisArg!");
})(
  typeof window !== "undefined" && window ||
  typeof global !== "undefined" && global ||
  {}
);