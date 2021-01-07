$(document).ready(() => {
  $("#post").on("click", event => {
    console.log("click");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newRecipe = {
      spoonacularId: 12345,
      name: $("#name").val(),
      imageUrl: $("#image").val(),
      summary: $("#summary").val(),
      type: "favorite"
    };

    // Send the POST request.
    $.ajax("/api/recipes", {
      type: "POST",
      data: newRecipe
    }).then(() => {
      console.log("added a new suggested/favorited recipe");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
