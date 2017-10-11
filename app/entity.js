class Entity{
    constructor(name,height){
        this.name=name;
        this.height=height;
        //EACH CLASS HAS ONLY ONE CONSTRUCTOR
}
    greet(){
        console.log(`Hi! I'm ${this.name} from middle Earth`);
    }
}
let Merry= new Entity("Merry",23);
Merry.greet();

export default Entity;