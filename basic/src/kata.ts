function trim(str: string, size: number): string {

  console.log(str + "" + size);
  let result = "";
  
   if(str.length<=size) result= str;
  
  else if(size <=3) {
    result = str.substring(0, size) + "...";
  }
  
   else if (str.length <= 3) {
        result = str.substring(0,size) + "...";
    }
  
    else {
        result = str.substring(0,size-3) + "...";
    }
   
  return result;
};


trim("Creating kata is fun", 14);