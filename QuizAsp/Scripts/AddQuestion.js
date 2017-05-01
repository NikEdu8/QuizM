



var i = 1;




function get() {


    var articleDiv = document.getElementById('Question[0].Text');

    var newArticleDiv = articleDiv.cloneNode(true);

    newArticleDiv.setAttribute("name", "Question[" + i + "].Text");

    var elemText = document.createTextNode("Question");
    var answers = document.createTextNode("Answers");
    var elemt = document.createElement("br");

    var br = document.createElement("br");
    var br1 = document.createElement("br");


    f.appendChild(elemText);
    f.appendChild(br);


    f.appendChild(newArticleDiv);
    f.appendChild(elemt);
    f.appendChild(answers);
    f.appendChild(br1);


    var checkbox = document.createElement("input");

    var dropid = document.getElementById('Question[0].Answer[0].Text');

    var j = 0;

    for (j ; j < 4; j++) {

        var c = checkbox.cloneNode(true);
        var nD = dropid.cloneNode(true);
        c.setAttribute("id", "Question_" + i + "__Answer_" + j + "__IsCorrect");
        c.setAttribute("name", "Question[" + i + "].Answer[" + j + "].IsCorrect");
        c.setAttribute("type", "checkbox");
        c.setAttribute("value", "true");

        nD.setAttribute("id", "Question[" + i + "].Answer[" + j + "].Text");
        nD.setAttribute("name", "Question[" + i + "].Answer[" + j + "].Text");

        var elem = document.createElement("br");

        f.appendChild(nD);
        f.appendChild(c);
        f.appendChild(elem);
    }




    i++;



}
