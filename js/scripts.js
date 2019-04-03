$(document).ready(function(){
  $("form#student").submit(function(event){
    var age = parseInt($("#age").val());
    var companySize = $("#bigOrSmall").val();
    var whichEnd = $("#frontEnd-backEnd").val();
    var fullTimeOrPartTime = $("input:radio[name=FullTime-PartTime]:checked").val();
    var serverSideOrApplictions = $("input:radio[name=which-side]:checked").val();
    console.log(age);
    console.log(companySize);
    console.log(whichEnd);
    console.log(fullTimeOrPartTime);
    console.log(serverSideOrApplictions);

    if(age > 50 && companySize === "Small" && whichEnd === "Front-end" && fullTimeOrPartTime === "Part-time" && serverSideOrApplictions === "Applications"){
      $("#suggestionOne").show();
      $(".suggestions:not(#suggestionOne)").hide();

    } else if (companySize === "Big" && whichEnd != "Front-end" && serverSideOrApplictions === "Applications"){
      $("#suggestionTwo").show();
      $(".suggestions:not(#suggestionTwo)").hide();

    } else if (age < 80 && companySize === "Big" && serverSideOrApplictions === "Server-side"){
      $("#suggestionThree").show();
      $(".suggestions:not(#suggestionThree)").hide();

    } else if (companySize === "No-matter" && whichEnd === "I don't know" && fullTimeOrPartTime === "Full-time") {
      $("#suggestionFour").show();
      $(".suggestions:not(#suggestionFour)").hide();

    } else {
      alert("You can take any class you like!");
      $(".suggestions").hide();
    }
    event.preventDefault();
  });
});

$(document).ready(function(){
  $(".clickable").click(function(){
    $("img").fadeIn();
  });
});
