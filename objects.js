function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  let favoriteNumber = 42;

  const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
  }

  const instr = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  const dog = createAnimal("dog", "bark", "Woooof!")
  dog.bark() 
  
  const sheep = createAnimal("sheep", "bleet", "BAAAAaaaa")
  sheep.bleet()
  
  function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
  }