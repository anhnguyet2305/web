var products = [
    {
        name:"Green Life (15)",
    },
    {
        name:"Organic Life (22)",
    },
    {
        name:"Whole Foods (21)",
    },
    {
        name:"Orwell Company (14)",
    },
    {
        name:"Organnica (6)",
    },
    {
        name:"Other (3)",
    },
]
function gridProduct() {
    var g_html = "";
    for (var i=0;i<products.length;i++){
        g_html += "<div class=\"Product_Brands\">\n" +
            "                    <label class=\"check\">\n" +
            "                        <input type=\"checkbox\">\n" +
            "                        <span class=\"checkmark\"></span>\n" +
            "                        <p class=\"product-name\" href=\"#\">"+products[i].name+"</p>\n" +
            "                    </label>\n" +
            "                </div>";
    }

    return g_html;
}
var grid = document.getElementById("Brands");
grid.innerHTML = gridProduct();