function makefield(){
  
  // cf: https://github.com/kaida-jyouma/picros/blob/master/picros.py
  
  var sheet = SpreadsheetApp.openById("17Dc6SsxZnCz3l2ESdSsRdBWutLgeF97-a4UNhYKG1ls").getSheets()[0];
  var xlen = parseInt(sheet.getRange(5, 2).getValue());
  var ylen = parseInt(sheet.getRange(5, 4).getValue());
  if (xlen > 20 || ylen > 20){
    Browser.msgBox("rangeError: please enter number under 20")
  }else{
    for (i=0;i<20;i++){
      for (j=0;j<20;j++){
        sheet.getRange(13 + i, 13 + j).setValue(false);
        SpreadsheetApp.openById("17Dc6SsxZnCz3l2ESdSsRdBWutLgeF97-a4UNhYKG1ls").getSheets()[1].getRange(13 + i, 13 + j).setBackground("#ffffff");
      }
    }
    for (i=0;i<20;i++){
      for (j=0;j<12;j++){
        sheet.getRange(j + 1, 13 + i).setValue("");
        sheet.getRange(13 + i, j + 1).setValue("");
      }
    }
    var pic = [];
    var xl = [];
    for (i=0;i<ylen;i++){
      xl = [];
      for (j=0;j<xlen;j++){
        var k1 = Math.floor(Math.random() * (99 + 99 - 0) + 0);
        if (k1 < 64) xl.push(0);
        else xl.push(1);
      }
      pic.push(xl);
    }
    for (i=0;i<xlen;i++){
      for (j=0;j<ylen;j++){
        if (pic[i][j] === 1){
          SpreadsheetApp.openById("17Dc6SsxZnCz3l2ESdSsRdBWutLgeF97-a4UNhYKG1ls").getSheets()[1].getRange(13+i, 13+j).setBackground("#808080");
        }
      }
    }
    var hint_x = [];
    var hint_y = [];
    var l1_x = [];
    var l1_y = [];
    var vw_x = 0;
    var vw_y = 0;
    for (i=0;i<ylen;i++){
      l1_x = [];
      l1_y = [];
      vw_x = 0;
      vw_y = 0;
      for (j=0;j<xlen;j++){
        if (pic[i][j] === 1){
          if (vw_y === 0){
            l1_y.push(1);
          }else if (vw_y === 1){
            l1_y[l1_y.length - 1] += 1;
          }
        }
        vw_y = pic[i][j];
        if (pic[j][i] === 1){
          if (vw_x === 0){
            l1_x.push(1);
          }else if (vw_x === 1){
            l1_x[l1_x.length - 1] += 1;
          }
        }
        vw_x = pic[j][i];
      }
      hint_x.push(l1_x);
      hint_y.push(l1_y);
    }
    for (i=0;i<hint_y.length;i++){
      for (j=0;j<hint_y[i].length;j++){
        sheet.getRange(13 + i, 12 - j).setValue(hint_y[i][hint_y[i].length - j - 1]);
      }
    }
    for (i=0;i<hint_x.length;i++){
      for (j=0;j<hint_x[i].length;j++){
        sheet.getRange(12 - j, 13 + i).setValue(hint_x[i][hint_x[i].length - j - 1]);
      }
    }
  }
}
