import * as $ from "jquery";
import { Cat } from './cat'

class Dog {
    constructor(name: string) {
        console.log(name + ' bark: Woof woof!')
    }
    run() {
        console.log("I'm running")
        $('body').css('background-color','red')
    }
}

let scoobydoo = new Dog("Scoody Doo")
scoobydoo.run()
let tom = new Cat()
