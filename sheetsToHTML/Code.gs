function doGet(e) {
  
  return HtmlService.createTemplateFromFile("Index").evaluate()
  .setTitle("Download Sertifikat Workshop")
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
  var spreadsheetId   = ''; //** CHANGE !!!!
  var sheetName = "" // Change
  var range = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName).getDataRange();
  var data = range.getValues();
  var ar = [];
  
  data.forEach(function(f) {
    if (~[f[13]].indexOf(searchtext)) {
      ar.push([ f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9],f[10] ]);
    }
  });
                                           
  return ar;
};