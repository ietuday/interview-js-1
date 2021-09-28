

Array.prototype.map = function(fn){
    let newData = []
    this.forEach((ele)=> newData.push(ele*2))
    return newData

}
const array = [1,2,3,4]


console.log(array.map((ele) => ele*2))



const data = {
  "Jane Mayer": ["Bob Richards", "Sarah Lee", "David Heinsburg"],
  "Bob Richards": ["Mary Ann Crouch"],
  "Sarah Lee": ["David Gibbly", "Kelsey Hamming"],
  "David Heinsburg": [],
  "Mary Ann Crouch": ["Dave Bunt", "James Ray"],
  "David Gibbly": [],
  "Kelsey Hamming": [],
  "Dave Bunt": [],
  "James Ray": [],
}


function herarchy(name){
    let resultantData = []
    nameData = data[name]
    resultantData.push(name)
    nameData.forEach(name => {
        resultantData.push(data[name])
    });
    return resultantData
}



console.log(herarchy('Jane Mayer'))