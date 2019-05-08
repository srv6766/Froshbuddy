(function(){
  var tblUsers = document.getElementById('tbl_users_list');
  var databaseRef = firebase.database().ref('users/');
  var rowIndex = 1;
  
  databaseRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
   var childKey = childSnapshot.key;
   var childData = childSnapshot.val();
   
   var row = tblUsers.insertRow(rowIndex);
   var cellId = row.insertCell(0);
   var cellName = row.insertCell(1);
        var cellds = row.insertCell(2);
   var cellos = row.insertCell(3);
        var cellcpp = row.insertCell(4);
   var celljava = row.insertCell(5);
        var cellTotal = row.insertCell(6);
   cellId.appendChild(document.createTextNode(childKey));
   cellName.appendChild(document.createTextNode(childData.user_name));
        cellds.appendChild(document.createTextNode(childData.ds));
   cellos.appendChild(document.createTextNode(childData.os));
        cellcpp.appendChild(document.createTextNode(childData.cpp));
   celljava.appendChild(document.createTextNode(childData.java));
        cellTotal.appendChild(document.createTextNode(childData.total));
   
   rowIndex = rowIndex + 1;
    });
  });

    }());