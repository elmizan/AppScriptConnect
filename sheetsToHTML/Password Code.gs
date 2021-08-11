function doGet(e) {
  
  return HtmlService.createTemplateFromFile("Index").evaluate()
  .setTitle("WebApp: Search By Password")
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


/* PROCESS FORM */
function processForm(formObject){ 
  var concat = formObject.searchtext+formObject.searchtext2;
  var result = "";
  if(concat){//Execute if form passes search text
      result = search(concat);
  }
  return result;
}

//SEARCH FOR MATCHED CONTENTS ;
function search(searchtext){
  var spreadsheetId   = 'SPREADSHEET ID'; //** CHANGE !!!!
  var sheetName = "PARTICULAR SHEET"
  var range = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName).getDataRange();
  var data = range.getValues();
  var ar = [];
  
  data.forEach(function(f) {
    if (~[f[26]].indexOf(searchtext)) {
      ar.push([ f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9],f[10],f[11],f[12],f[13],f[14],f[15],f[16],f[17],f[18],f[19],f[20],f[21],f[22],f[23],f[24],f[25] ]);
    }
  });
                                           
  return ar;
};