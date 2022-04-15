/*eslint no-undef: "error"*/

const classesPropsMeths = () => {
    /* #region Human */
    class Human {
        gender = 'male';
      
        printGender = () => {
          console.log(this.gender);
        } 
    }
    const human = new Human();
    human.printGender();
    /* #endregion */
    
    /* #region Person */
    class Person extends Human{
        name = 'Gleb';
        gender = 'male';

        printName = () => {
          console.log(this.name);
        }
    }
    const person = new Person();
    person.printName();
    /* #endregion */

}
