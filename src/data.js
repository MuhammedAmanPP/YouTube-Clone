const API_KEY = 'AIzaSyDANYgQJJFh8-a_xFRnkjgH7xZdrpwS_JE';

function convertViews(view){
   if(view < 1000000){
    let result= view / 1000
    return parseInt(result)+'K'
   } if(view > 1000000){
     let result = parseInt(view / 1000000) ;
     return result+'M'   
   }
}

export {convertViews}

export {API_KEY};