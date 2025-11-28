import Etudiant from "./Etudiant.js";
class Stagiaire2 extends Etudiant{
    constructor(nom, age, stage){
        super(nom, age);
        this.stage=stage;
    }
    info(){
        return`Stagiaire ${super.info()} stage=${this.stage}`
    }
}

export default Stagiaire2;
    
    