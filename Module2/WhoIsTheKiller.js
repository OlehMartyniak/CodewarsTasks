// Given a dictionary with all the names of the suspects and everyone that they have seen on that day
// which may look like this:
// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:
// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw
// both 'Lucas' and 'Bill'

function killer(suspects, victims) {
    for(let susp in suspects) {
      let counter = 0;
      for (let key of victims) {
        if (suspects[susp].includes(key)) {
          counter += 1
          if (counter == victims.length) {
            return susp
          }
        }
      }
    }
    return -1
  }