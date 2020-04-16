function doGet(e) {
  
  // get id string
  var id = e.parameter.id;
  
  // if get id
  if (id) {
    
    // open sheet
    var sheetApp = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1M5Bo9R9m-gHmDlMa-lqlf7tNLF9xFd8MfQby5_EN6U0/edit#gid=446198134');
    
    // create temp sheet and search data
    sheetApp.insertSheet(id);
    var searchSheet = sheetApp.getSheetByName(id);
    searchSheet.getRange(1, 1).setValue(id);
    searchSheet.getRange(1, 2).setValue("=VLOOKUP(A1,'整理訂單'!B:C,2,FALSE)")
    
    // set return info
    var info = {  
      "ID": id,
      "Status": searchSheet.getRange(1, 2).getValue()
    };
    
    // delete temp sheet
    sheetApp.deleteSheet(searchSheet);  
    
    // return to front-end
    return ContentService.createTextOutput(JSON.stringify(info)).setMimeType(ContentService.MimeType.JAVASCRIPT); 
  }
}

function debug() {
  var a = doGet( {
    parameter : {
      id : 'P40421RSQME96AAAMUW4'
    }
  });
}

