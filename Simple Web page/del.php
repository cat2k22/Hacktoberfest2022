<?php
print_r($_POST);
//print_r($_GET);
$servername = "localhost";
$ID="$_POST[txtid]";
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

$sql = "DELETE FROM login WHERE ID='$ID' ";
if ($conn->query($sql) === TRUE) 
{
    echo "record deleted successfully";
} 
else 
{
    "Error deleting record: " . $conn->error;
}

$conn->close();
?>
