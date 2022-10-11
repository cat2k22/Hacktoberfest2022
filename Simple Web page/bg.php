<?php
print_r($_POST);
$servername = "localhost";
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

$sql = "INSERT INTO login (USERNAME, PASSWORD)values('$_POST[txtuser]', '$_POST[txtpass]')";

if ($conn->query($sql) === TRUE) 
{
    echo "New record created successfully";
} 
else 
{
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
