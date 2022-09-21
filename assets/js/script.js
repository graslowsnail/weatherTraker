//event listener for when search button is clicked
//prints and apends element to body
$("button").bind("click", function () {
    $("<div>This is a click Event</div>").appendTo("body");
});