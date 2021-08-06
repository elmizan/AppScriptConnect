var idSheetsCourse = ""; //replace this with another Sheets id
var nameSheetsPraktek1 = "tryoutPraktek1" //replace with sheetsnametab
var nameSheetsPraktek2 = "tryoutPraktek2" //replace with sheetsnametab
var nameSheetsPraktek3 = "tryoutPraktek3" //replace with sheetsnametab
var nameSheetsTeori1 = "tryoutTeori1" //replace with sheetsnametab
var nameSheetsTeori2 = "tryoutTeori2" //replace with sheetsnametab
var nameSheetsTeori3 = "tryoutTeori3" //replace with sheetsnametab
var dataBase = "dataBase"; //replace with sheetsnametab

//initDataBase
function writeDataBase() {
    var pageSizeValue = 300;
    var nextPageToken = '';
    var ownerArray = [];
    do {
        var optionalArgs = {
            pageSize: pageSizeValue,
            pageToken: nextPageToken
        };
        var cls = Classroom.Courses.Students.list(idClassroom, optionalArgs);
        var nextPageToken = cls.nextPageToken;
          const ssData = cls.students.map(c => {
            return [c.profile.id, c.profile.name.fullName, c.profile.emailAddress]
          });
          Array.prototype.push.apply(ownerArray, ssData);
    } while (nextPageToken);
  const ss = SpreadsheetApp.openById(idSheetsCourse);// <<< UPDATE THIS
  const sheet = ss.getSheetByName(dataBase);// <<< UPDATE THIS
  sheet.getRange(2,1,ownerArray.length,ownerArray[0].length).setValues(ownerArray); // <<< UPDATE THIS
}

//init Tugas
var idPraktek1 = 1234; //replace with data that you get from initTugas
var idPraktek2 = 1234; //replace with data that you get from initTugas
var idPraktek3 = 1234; //replace with data that you get from initTugas
var idTeori1 = 1234; //replace with data that you get from initTugas
var idTeori2 = 1234; //replace with data that you get from initTugas
var idTeori3 = 1234; //replace with data that you get from initTugas

function writePraktek1(){
    var pageSizeValue = 300;
    var nextPageToken = '';
    var praktek1Array = [];

    do {
        var optionalArgs = {
            pageSize: pageSizeValue,
            pageToken: nextPageToken
        };
        var praktek1 = Classroom.Courses.CourseWork.StudentSubmissions.list(idClassroom,idPraktek1);
        var nextPageToken = praktek1.nextPageToken;
          const praktekData1 = praktek1.studentSubmissions.map(pd1 =>{
            return [pd1.userId, pd1.assignedGrade]
          });
          Array.prototype.push.apply(praktek1Array, praktekData1);
    } while (nextPageToken);
    const ss = SpreadsheetApp.openById(idSheetsCourse);// <<< UPDATE THIS
    const sheet = ss.getSheetByName(nameSheetsPraktek1);// <<< UPDATE THIS
    sheet.getRange(2,1,praktek1Array.length,praktek1Array[0].length).setValues(praktek1Array); // <<< UPDATE THIS    
}

function writePraktek2(){
    var pageSizeValue = 300;
    var nextPageToken = '';
    var praktek2Array = [];

    do {
        var optionalArgs = {
            pageSize: pageSizeValue,
            pageToken: nextPageToken
        };
        var praktek2 = Classroom.Courses.CourseWork.StudentSubmissions.list(idClassroom,idPraktek2);
        var nextPageToken = praktek2.nextPageToken;
          const praktekData2 = praktek2.studentSubmissions.map(pd2 =>{
            return [pd2.userId, pd2.assignedGrade]
          });
          Array.prototype.push.apply(praktek2Array, praktekData2);
    } while (nextPageToken);
    const ss = SpreadsheetApp.openById(idSheetsCourse);// <<< UPDATE THIS
    const sheet = ss.getSheetByName(nameSheetsPraktek2);// <<< UPDATE THIS
    sheet.getRange(2,1,praktek2Array.length,praktek2Array[0].length).setValues(praktek2Array); // <<< UPDATE THIS    
}

function writePraktek3(){
    var pageSizeValue = 300;
    var nextPageToken = '';
    var praktek3Array = [];

    do {
        var optionalArgs = {
            pageSize: pageSizeValue,
            pageToken: nextPageToken
        };
        var praktek3 = Classroom.Courses.CourseWork.StudentSubmissions.list(idClassroom,idPraktek3);
        var nextPageToken = praktek3.nextPageToken;
          const praktekData3 = praktek3.studentSubmissions.map(pd3 =>{
            return [pd3.userId, pd3.assignedGrade]
          });
          Array.prototype.push.apply(praktek3Array, praktekData3);
    } while (nextPageToken);
    const ss = SpreadsheetApp.openById(idSheetsCourse);// <<< UPDATE THIS
    const sheet = ss.getSheetByName(nameSheetsPraktek3);// <<< UPDATE THIS
    sheet.getRange(2,1,praktek3Array.length,praktek3Array[0].length).setValues(praktek3Array); // <<< UPDATE THIS    
}

function writeTeori1(){
    var pageSizeValue = 300;
    var nextPageToken = '';
    var teori1Array = [];

    do {
        var optionalArgs = {
            pageSize: pageSizeValue,
            pageToken: nextPageToken
        };
        var teori1 = Classroom.Courses.CourseWork.StudentSubmissions.list(idClassroom,idTeori1);
        var nextPageToken = teori1.nextPageToken;
          const teoriData1 = teori1.studentSubmissions.map(tr1 =>{
            return [tr1.userId, tr1.assignedGrade]
          });
          Array.prototype.push.apply(teori1Array, teoriData1);
    } while (nextPageToken);
    const ss = SpreadsheetApp.openById(idSheetsCourse);// <<< UPDATE THIS
    const sheet = ss.getSheetByName(nameSheetsTeori1);// <<< UPDATE THIS
    sheet.getRange(2,1,teori1Array.length,teori1Array[0].length).setValues(teori1Array); // <<< UPDATE THIS    
}

function writeTeori2(){
    var pageSizeValue = 300;
    var nextPageToken = '';
    var teori2Array = [];

    do {
        var optionalArgs = {
            pageSize: pageSizeValue,
            pageToken: nextPageToken
        };
        var teori2 = Classroom.Courses.CourseWork.StudentSubmissions.list(idClassroom,idTeori2);
        var nextPageToken = teori2.nextPageToken;
          const teoriData2 = teori2.studentSubmissions.map(tr2 =>{
            return [tr2.userId, tr2.assignedGrade]
          });
          Array.prototype.push.apply(teori2Array, teoriData2);
    } while (nextPageToken);
    const ss = SpreadsheetApp.openById(idSheetsCourse);// <<< UPDATE THIS
    const sheet = ss.getSheetByName(nameSheetsTeori2);// <<< UPDATE THIS
    sheet.getRange(2,1,teori2Array.length,teori2Array[0].length).setValues(teori2Array); // <<< UPDATE THIS    
}

function writeTeori3(){
    var pageSizeValue = 300;
    var nextPageToken = '';
    var teori3Array = [];

    do {
        var optionalArgs = {
            pageSize: pageSizeValue,
            pageToken: nextPageToken
        };
        var teori3 = Classroom.Courses.CourseWork.StudentSubmissions.list(idClassroom,idTeori3);
        var nextPageToken = teori3.nextPageToken;
          const teoriData3 = teori3.studentSubmissions.map(tr3 =>{
            return [tr3.userId, tr3.assignedGrade]
          });
          Array.prototype.push.apply(teori3Array, teoriData3);
    } while (nextPageToken);
    const ss = SpreadsheetApp.openById(idSheetsCourse);// <<< UPDATE THIS
    const sheet = ss.getSheetByName(nameSheetsTeori3);// <<< UPDATE THIS
    sheet.getRange(2,1,teori3Array.length,teori3Array[0].length).setValues(teori3Array); // <<< UPDATE THIS    
}


//writeAll
function writeAll(){
  writeDataBase()
  writePraktek1()
  writePraktek2()
  writePraktek3()
  writeTeori1()
  writeTeori2()
  writeTeori3()
}
