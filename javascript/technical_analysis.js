$(document).ready(() => {

    loadDescription();// loading of desciption in html from json
    loadContent('apple'); // loading of default content
    loadCanvas('apple')

    // Setting the graph as well as loading the content based upon the company selection in drop down
    $('#company').change(function () {
        loadContent(this.value)
        loadCanvas(this.value)
    });

    // loading selective content from the json file based upon company name and adding it to the html element
    function loadContent(company_name) {
        $.getJSON("/resources/technical_analysis.json", function (data) {
            var content = "<dd>";
            var company_content = data[company_name]["content"];
            company_content.forEach(function (obj) {
                content += obj;
                content += "<br><br>"
            });
            content += "</dd>";
            $('#paragraph').html("");
            $('#paragraph').append(content);
        });
    }

    // loading description content in html in from the json file
    function loadDescription() {
        $.getJSON("/resources/technical_analysis.json", function (data) {
            var content = "<dd>";
            content += data["description"];
            content += "</dd>";
            $('#article-description').html("");
            $('#article-description').append(content);
        });
    }

    // loading data in the canvas content in html in from the json file
    function loadCanvas(company_name) {
        $.getJSON("/resources/technical_analysis.json", function (data) {
            $(".canvasContainer").CanvasJSChart(data[company_name]['figures']);
        });
    }
});
