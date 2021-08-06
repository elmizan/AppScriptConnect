var address = "" //replace with server IP
var user = ""	//replace with username on database server
var userPwd = "" //replace with database password
var port = 3306
var db = "" //replace with database name

var dbUrl = "jdbc:mysql://"+address+":"+port+"/"+db;


function handleFormSubmit() {
  
 //Grab form response list
  var form = FormApp.openById(""); //replace with Google Form ID - Edit Version 
  var formResponses = form.getResponses();

//choose most recent response
  var formLastResponse = formResponses.length - 1;

//grab items from response
  var response = formResponses[formLastResponse];
  var itemResponses = response.getItemResponses();
  var itemScore = response.getGradableItemResponses();
  

  //set items to local variables
    var field1  = response.getTimestamp();
    var field2  = response.getRespondentEmail();
    var field3  = itemResponses[0].getResponse();
    var field4  = itemResponses[1].getResponse();
    var field5  = itemResponses[2].getResponse();
    var field6  = itemResponses[3].getResponse();
    var field7  = itemResponses[4].getResponse();
    var field8  = itemResponses[5].getResponse();
    var field9  = itemResponses[6].getResponse();
    var field10 = itemResponses[7].getResponse();
    var field11 = itemResponses[8].getResponse();
    var field12 = itemResponses[9].getResponse(); 
    var field13  = itemScore[10].getScore()+
   itemScore[11].getScore()+
   itemScore[12].getScore()+
   itemScore[13].getScore()+
   itemScore[14].getScore()+
   itemScore[15].getScore()+
   itemScore[16].getScore()+
   itemScore[17].getScore()+
   itemScore[18].getScore()+
   itemScore[19].getScore()+
   itemScore[20].getScore()+
   itemScore[21].getScore()+
   itemScore[22].getScore()+
   itemScore[23].getScore()+
   itemScore[24].getScore()+
   itemScore[25].getScore()+
   itemScore[26].getScore()+
   itemScore[27].getScore()+
   itemScore[28].getScore()+
   itemScore[29].getScore()+
   itemScore[30].getScore()+
   itemScore[31].getScore()+
   itemScore[32].getScore()+
   itemScore[33].getScore()+
   itemScore[34].getScore()+
   itemScore[35].getScore()+
   itemScore[36].getScore()+
   itemScore[37].getScore()+
   itemScore[38].getScore()+
   itemScore[39].getScore()+
   itemScore[40].getScore()+
   itemScore[41].getScore()+
   itemScore[42].getScore()+
   itemScore[43].getScore()+
   itemScore[44].getScore()+
   itemScore[45].getScore()+
   itemScore[46].getScore()+
   itemScore[47].getScore()+
   itemScore[48].getScore();

  //connect to DB
    var conn = Jdbc.getConnection(dbUrl, user, userPwd);

  //send SQL Statment to DB
  var stmt = conn.prepareStatement('INSERT INTO gmtl1'+'(field1, field2, field3, field4, field5, field6, field7, field8, field9, field10, field11, field12, field13) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
  
      stmt.setString(1, field1);
      stmt.setString(2, field12);
      stmt.setString(3, field3);
      stmt.setString(4, field4);
      stmt.setString(5, field5);
      stmt.setString(6, field6);
      stmt.setString(7, field7);
      stmt.setString(8, field8);
      stmt.setString(9, field9);
      stmt.setString(10, field10);
      stmt.setString(11, field11);
      stmt.setString(12, field12);
      stmt.setString(13, field13);
//console.log(score)
 stmt.execute();
}
