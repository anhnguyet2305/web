var products = [
    {
        name:"Vegettables (15)",
    },
    {
        name:"Fresh Fruits (12)",
    },
    {
        name:"Fresh Meat (12)",
    },
    {
        name:"Mik & Cream (9)",
    },
    {
        name:"Uncategorized (7)",
    },
    {
        name:"Organic Fruits (6)",
    },
    {
        name:"Special Salad (3)",
    },
    {
        name:"Supplements (0)",
    },
]
function gridProduct() {
    var g_html = "";
    for (var i=0;i<products.length;i++){
        g_html += " <div class=\"Product_Categories\">\n" +
            "                    <p class=\"product-name\">"+products[i].name+"</p>\n" +
            "                </div>";
    }

    return g_html;
}
var grid = document.getElementById("Categories");
grid.innerHTML = gridProduct();