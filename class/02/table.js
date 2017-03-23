/**
 * Created by apple on 2017/3/17.
 */
/*document.querySelectorAll('#tb').addEventListener('click',function () {
    alert('a')

});*/
var tdList = document.querySelectorAll('td');
for(i=0;i<tdList.length;i++){
    var item = tdList[i];
    item.addEventListener('click',showMsg)
}
function showMsg(e) {
    var item = e.target
    console.log(item.innerHTML);
}