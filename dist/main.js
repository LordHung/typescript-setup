var Dog = (function () {
    function Dog(name) {
        console.log(name + ' bark: Woof woof!');
    }
    Dog.prototype.run = function () {
        console.log("I'm running");
    };
    return Dog;
}());
var scoobydoo = new Dog("Scoody Doo");
scoobydoo.run();
