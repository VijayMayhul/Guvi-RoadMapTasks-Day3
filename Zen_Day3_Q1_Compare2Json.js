/* Question - 1 :
How to compare two JSON have same properties without order?
      a. let obj1 = {name:"Person 1", age:5};
      b. let obj2 = {age:5, name:"Person 1"};
*/

//Answer :

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

      let isEqual = true;

      let obj2Asset = {};
      for (let key in obj2) {
        obj2Asset[key] = true;
      }

      // console.log(obj2Asset);

      for (let key in obj1) {
         // console.log(key in obj2Asset);
          // console.log(obj1[key] !== obj2[key]);
        if (!(key in obj2Asset) || obj1[key] !== obj2[key]) {
          isEqual = false;
          break;
        }
      }

      // console.log(Object.keys(obj1));
      if (isEqual && Object.keys(obj1).length === Object.keys(obj2).length) {
          console.log("Objects have the same properties but without order");
      } else {
          console.log("Objects have different properties");
      }