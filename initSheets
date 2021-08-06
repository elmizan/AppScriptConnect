var idSheets = ""; //fill with sheets ID

function initListClassroom() {
  const classroomList = Classroom.Courses.list().courses;    
    const classData = classroomList.map(cls => {
        let ownerName = Classroom.Courses.Teachers.get(cls.id, cls.ownerId).profile.name.fullName
        return [cls.id, cls.name, cls.section, ownerName]                                  
    });
    const ss = SpreadsheetApp.openById(idSheets);// <<< UPDATE THIS
    const sheet = ss.getSheetByName("listClassroom");// <<< UPDATE THIS
    sheet.getRange(2,1,classData.length,classData[0].length).setValues(classData); // <<< UPDATE THIS
}
var idClassroom = ; //replace with data that you get from initListClasroom

function initTugas(){
  const courseWork = Classroom.Courses.CourseWork.list(idClassroom).courseWork
  const courseData =  courseWork.map(cw => {
    return [cw.id, cw.title]
  });
    const ss = SpreadsheetApp.openById(idSheets);// <<< UPDATE THIS
    const sheet = ss.getSheetByName("tugas");// <<< UPDATE THIS
    sheet.getRange(2,1,courseData.length,courseData[0].length).setValues(courseData); // <<< UPDATE THIS
}

function initAll(){
  initListClassroom()
  initTugas()
}
