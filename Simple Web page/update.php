<?php
print_r($_POST);
//print_r($_GET);
$servername = "localhost";
$id="$_POST[txtid]";
$name="$_POST[txtuser]";
$pword="$_POST[txtpass]";
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

$sql = "UPDATE login SET name='$name', pword='$pword' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$sql = "SELECT id, name, pword FROM login";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. " " . $row["pword"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
