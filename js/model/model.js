class Model {
    constructor(id){
        this.id = id;
    };

    execute(calc) {
        return eval(calc);
    }
}