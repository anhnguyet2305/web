function recent_news_wrapper() {
    return "<section class=\"section main\">\n" +
        "    <div class=\"container\">\n" +
        "        <article class=\"content\">\n" +
        "            <div class=\"content-body\">\n" +
        "\n" +
        "                <div class=\"Khung\">\n" +
        "                     <a href=\"#\" class=\"Khung_1\"><b>Cafe</b></a>\n" +
        "                </div>\n" +
        "\n" +
        "                <div class=\"HieuUng\">\n" +
        "                    <div class=\"zoomin noidung\"><img src=\"img/1.jpg\" height=\"550\" width=\"660\" class=\"anh_1\"/></div>\n" +
        "                    <h1><b><a href=\"https://thucphamsach88.com/ha-noi-trung-thu-nay-di-dau-de-khong-dong-duc-co-anh-dep-ma-van-duoc-thuong-thuc-do-an-ngon/\" class=\"content1\">Trung Thu đi đâu để không đông đúc, có ảnh đẹp mà vẫn được thưởng thức đồ uống ngon?</a></b></h1>\n" +
        "                    <p>By  <a href=\"#\" class=\"content_1\">Kiều Oanh</a> . 23/09/2020<a href=\"#\" class=\"content_1\"> 31 Lượt xem</a></p>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </article>\n" +
        "\n" +
        "        <aside class=\"aside\">\n" +
        "            <div class=\"HieuUng\">\n" +
        "                <div class=\"khung3\">\n" +
        "                    <div class=\"KHUNG_1\">\n" +
        "                        <a href=\"#\" class=\"KHUNG_1-1\"><b>Khám phá</b></a>\n" +
        "                    </div>\n" +
        "                    <div class=\"block subcribe\">\n" +
        "                        <div class=\"zoomin noidung\"><img src=\"img/2.jpg\" height=\"150\" width=\"150\" class=\"anh_1\"/></div>\n" +
        "                        <div class=\"block_1\">\n" +
        "                            <h4><b><a href=\"#\" class=\"block_1-1\">Check in ngay đồng cỏ lau đẹp hút hồn trong trung tâm thành phố Hà Nội</a></b></>\n" +
        "                            <p><br/>By <a href=\"#\" class=\"content_1\">Kiều Oanh</a></p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"HieuUng\">\n" +
        "                <div class=\"khung3\">\n" +
        "                    <div class=\"KHUNG_1\">\n" +
        "                        <a href=\"#\" class=\"KHUNG_1-1\"><b>Đồ uống</b></a>\n" +
        "                    </div>\n" +
        "                    <div class=\"block subcribe\">\n" +
        "                        <div class=\"zoomin noidung\"><img class=\"anh_1\" src=\"img/3.jpg\" height=\"150\" width=\"150\"/></div>\n" +
        "                        <div class=\"block_1\">\n" +
        "                            <h4><b><a href=\"#\" class=\"block_1-2\">Cách làm sinh tố bơ chuối béo ngậy, mát lành cho ngày hè\n" +
        "                                nóng bức</a></b></>\n" +
        "                            <p><br/>By <a href=\"#\" class=\"content_1\">Food Wiki</a></p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"HieuUng\">\n" +
        "                <div class=\"khung3\">\n" +
        "                    <div class=\"KHUNG_1\">\n" +
        "                       <a href=\"#\"  class=\"KHUNG_1-1\"><b>Ăn vặt</b></a>\n" +
        "                    </div>\n" +
        "                    <div class=\"block subcribe\">\n" +
        "                        <div class=\"zoomin noidung\"><img class=\"anh_1\" src=\"img/4.jpg\" height=\"150\" width=\"150\"/></div>\n" +
        "                        <div class=\"block_1\">\n" +
        "                            <h4><b><a href=\"#\" class=\"block_1-3\">Bật mí cách làm món xoài lắc kết hợp muối tôm chua, cay\n" +
        "                                ngon đúng điệu</a></b></>\n" +
        "                            <p><br/>By <a href=\"#\" class=\"content_1\">Food Wiki</a></p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"HieuUng\">\n" +
        "                <div class=\"khung3\">\n" +
        "                    <div class=\"KHUNG_1\">\n" +
        "                        <a href=\"#\"  class=\"KHUNG_1-1\"><b>Dinh Dưỡng</b></a>\n" +
        "                    </div>\n" +
        "                    <div class=\"block subcribe\">\n" +
        "                        <div class=\"zoomin noidung\"><img class=\"anh_1\" src=\"img/5.jpg\" height=\"150\" width=\"150\"/></div>\n" +
        "                        <div class=\"block_1\">\n" +
        "                            <h4><b><a href=\"#\" class=\"block_1-4\">Top 5 loại thực phẩm tốt cho gan mà bạn nên sử dụng\n" +
        "                                thường xuyên</a></b></>\n" +
        "                            <p><br/>By <a href=\"#\" class=\"content_1\">Food Simple</a></p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "        </aside>\n" +
        "    </div>\n" +
        "</section>"
}
var hd = document.getElementById("recent_news_wrapper");
hd.innerHTML = recent_news_wrapper();


const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");
searchBtn.onclick =()=>{
    searchBox.classList.add("active");
    searchBtn.classList.add("active");
    searchInput.classList.add("active");
    cancelBtn.classList.add("active");
    searchInput.focus();
    if(searchInput.value != ""){
        var values = searchInput.value;
        searchData.classList.remove("active");
        searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
    }else{
        searchData.textContent = "";
    }
}
cancelBtn.onclick =()=>{
    searchBox.classList.remove("active");
    searchBtn.classList.remove("active");
    searchInput.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchData.classList.toggle("active");
    searchInput.value = "";
}
