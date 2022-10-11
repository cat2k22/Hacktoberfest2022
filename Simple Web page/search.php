<?php
print_r($_POST);
//print_r($_GET);
$servername = "localhost";
$ID="$_POST['txtid']";
$USERNAME = "root";
$PASSWORD = "";
$dbname = "user";

// Create connection
$conn = new mysqli($servername, $USERNAME, $PASSWORD, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT ID, USERNAME, PASSWORD FROM data";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["ID"]. " - Name: " . $row["USERNAME"]. " " . $row["PASSWORD"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>