var haksik = [];
var moms = [];

// 식단 불러오기.
$.ajax("http://smart.handong.edu/api/service/menu").done(function(result){
  haksik= result.haksik;
  moms=result.moms;
  addItems(haksik);
});

//menu for문을 돌면서 추가
function addItems(menuArr) {
  for (const menu of menuArr){
    $("#tableBody").append(
      `<tr><td> ${menu.menu_kor}</td> <td>${menu.menu_eng}</td></tr>` // 작은 따움표가 아니라 ₩으로 감싸야함.
    );
  }
}

$("#haksikBtn").click(function() {
  $("#tableBody").html(""); //내용 추가 전 초기화
  addItems(haksik);
});
$("#momsBtn").click(function(){
  $("#tableBody").html(""); //내용 추가 전 초기화
  addItems(moms);
});
