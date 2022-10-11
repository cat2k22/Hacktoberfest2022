<?php
print_r($_POST);
//print_r($_GET);
$servername = "localhost";
$ID="$_POST[txtid]";
$NAME="$_POST[txtuser]";
$PWORD="$_POST[txtpass]";
$USERNAME = "id8771989_root";
$PASSWORD = "bg123456";
$dbname = "id8771989_data";

// Create connection
$conn = new mysqli($servername, $USERNAME, $PASSWORD, $dbname);
// Check connection
if ($conn->connect_error) 
{
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT ID, NAME, PWORD FROM login";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["ID"]. " - Name: " . $row["NAME"]. " " . $row["PWORD"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
