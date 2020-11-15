function time() {

    var Gio_hien_tai = new Date().getHours();
    var Phut_hien_tai = new Date().getMinutes();
    var Giay_hien_tai = new Date().getSeconds();
    gio.innerHTML = Gio_hien_tai>=10?Gio_hien_tai:"0"+Gio_hien_tai;
    phut.innerHTML = Phut_hien_tai>=10?Phut_hien_tai:"0"+Phut_hien_tai;
    giay.innerHTML = Giay_hien_tai>=10?Giay_hien_tai:"0"+Giay_hien_tai;

}
var Dem_gio = setInterval(time, 1000);
