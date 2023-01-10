// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

    function destructivelyAppendCat(name){
        const newFunction = cats.push(name);
    };

    function destructivelyPrependCat(name){
        const newFunction2 = cats.unshift(name);
    };

    function destructivelyRemoveLastCat(){
        const newFunction3 = cats.pop();
    };

    function destructivelyRemoveFirstCat(){
        const newFunction4 = cats.shift();
    };

    function appendCat(name){
        const copyCats = [...cats.slice(),name];
        return copyCats;
    };

    function prependCat(name){
        const copyCatts = [name,...cats.slice()];
        return copyCatts
    }

    function removeLastCat(){
        const removekitty = [...cats.slice(0,2)]
        return removekitty;
    };

    function removeFirstCat(){
        const removeFirstKitty = [...cats.slice(1)]
        return removeFirstKitty;
    }