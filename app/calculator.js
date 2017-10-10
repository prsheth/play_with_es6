const add= (x,y)=>{
    return x+y;
}
const multiplication= (x,y)=>{
    return x*y;
}
const subract=(x,y)=>{
  return x-y;
}

export {add, multiplication,subract};
export default add; //THIS IS A FALLBACK AND HENCE SETS ADD AS A DEFAULT FUNCTION EXPORTED.DEFAULT CANNOT BE USED WITH A LET OR CONST DECALATION AS DEFAULT CREATES ITS OWN DECLARATION
