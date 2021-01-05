// FUNCTION FOR GET RECIPE ID
function getSource(id){
    $.ajax({
        url: "https://api.spoonacular.com/recipes/"+id+"/information?apiKey=8e8116330d3e4e36aeeae99f52100a74&number=5",
        success: function(res){

        
            document.getElementById("sourceLink").innerHTML= res.sourceName
            document.getElementById("sourceLink").href=res.sourceUrl
            document.getElementById("summary").innerHTML=res.summary

            

            
        }
    })
};

// FUNCTION FOR RECIPE SEARCH
function getRecipe(q){
$.ajax({
    url: "https://api.spoonacular.com/recipes/search?apiKey=8e8116330d3e4e36aeeae99f52100a74&includeIngredients=&number=5&query="+q,
    success: function(res){

        document.getElementById("recipeName").innerHTML= res.results[0].title
        document.getElementById("recipeImage").innerHTML= "<img src='"+res.baseUri+res.results[0].image+"'width='450px'/>"
        document.getElementById("sourceLink").innerHTML="<p>" +getSource(res.results[0].id)+ "</p>"
        document.getElementById("cookTime").innerHTML="<p>" +res.results[0].readyInMinutes+ " min</p>"

        //document.getElementById("recipeName").innerHTML= res.results[1].title
        //document.getElementById("recipeImage").innerHTML= "<img src='"+res.baseUri+res.results[1].image+"'width='450px'/>"
       //document.getElementById("sourceLink").innerHTML="<p>" +getSource(res.results[1].id)+ "</p>"
        //document.getElementById("cookTime").innerHTML="<p>" +res.results[1].readyInMinutes+ " min</p>"
        
    }
})
};

