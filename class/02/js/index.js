/**
 * Created by apple on 2017/3/16.
 */
function set_color() {
    document.getElementById("tb1").style.background = "red";
}

function set_time() {
    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getMonth() + 1+"").length > 1 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
    var date = (date.getDate()+"").length > 1 ? date.getDate(): "0" + (date.getDate());
    document.getElementById('tb12').innerHTML = year + "-" + month + "-" + date ;     //获取当前日期;
}
function set_cell() {
    var p = document.getElementById("tb22").parentNode.parentNode;
    var newtr = document.createElement('tr');
    p.insertBefore(newtr,document.getElementById('tb22').parentNode.nextSibling)
}

function delete_cell() {
    var p = document.getElementById("tb22").parentNode;
    p.remove();
}

function get_coordinates(event)

{
    var x=event.clientX;
    var y=event.clientY;
    document.getElementById("tb31").innerHTML="coordinates: (" + x + "," + y + ")";
}

function openw()
{
    window.open("https://www.taobao.com/") ;
}
