// Your code here
function mapToNegativize(x){
return x.map(x => x*-1)

}

function mapToNoChange(x){
  return x
}

function mapToDouble(x){
  return x.map(x => x*2)
}

function mapToSquare(x){
  return x.map(x => Math.pow(x,2))
}


function reduceToTotal(x,y){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if(y === undefined){


   return x.reduce(reducer)
 }
else{
   return x.reduce(reducer,y)
 }
}

function reduceToAllTrue(x,y){
    x.reduce((accumulator, currentValue) => {
      if (currentValue != undefined && y != undefined){
         x = true
        console.log('a')
      }
        else{
     x = false
    }
    })

       return x
}


function reduceToAnyTrue(x,y){
  x.reduce((accumulator, currentValue) => {
    if (currentValue != undefined && y != undefined){
       x = true
       return x
    }
      else{
   x = false
   return x
  }
  return x
  })
  return x
}
