document.write("51.Check the said array is a factor chain or not"+"<br>");
    function test51(arr){
        for(let i=0;i<arr.length-1;i++){
            if(arr[i+1]%arr[i]!=0){
                return false;
            }
        }
        return true;
    }
    document.write("The array : [2, 4, 8, 16, 32] "+"<br>")
    document.write("Check the said array is a factor chain or not?"+test51([2, 4, 8, 16, 32])+"<br>");