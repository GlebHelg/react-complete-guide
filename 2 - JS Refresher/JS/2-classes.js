const classes = () => {
  class Human {
    //gender = 'male';
    
    constructor(gender){
      if(gender != null){
        this.gender = gender;
      }
    }
  
    printGender(){
      console.log(this.gender);
    }
  
  }
  
  class Person extends Human{
    constructor (gender) { // TypeScript would not be happy here
      super(gender); // executes parent constructor
      this.name = 'Max';      
    }
  
    printMyName() {
      console.log(this.name);
    }
  
  }
  
  const person = new Person();
  person.printMyName();
  person.printGender();
  
  const person2 = new Person('android');
  person.printGender();
  
  
  const mix = (dna1, dna2) => Object.keys(dna1).reduce(
    (strand, key) => Object.assign(strand, {[key]: Math.random() < .5 
      ? dna1[key] 
      : dna2[key]
    }), {}
  );
  
  
  class Lion {
    constructor(name, DNA = {}) {
        this.name = name;
        this.DNA = DNA;   
    }
    
    mate(partner, name) {
        return new Lion(name, mix(this.DNA, partner.DNA));
    }
  }
  
  const father = new Lion('Mufasa', {foo: 1, bar: 2, baz: 3, qux: 4});
  const mother = new Lion('Surabi', {foo: 5, bar: 6, baz: 7, qux: 8});
  
  const child = mother.mate(father, 'Simba');
  
  console.log(child);
  
};

