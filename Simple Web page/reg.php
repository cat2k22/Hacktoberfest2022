<?php
print_r($_POST);
$servername = "localhost";
$USERNAME = "root";
$PASSWORD = "";
$dbname = "company";

// Create connection
$conn = new mysqli($servername, $USERNAME, $PASSWORD, $dbname);
// Check connection
if ($conn->connect_error) 
{
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO users (firstname, lastname, dob, mno, email, username, password)values('$_POST[firstname]', '$_POST[lastname]', '$_POST[dob]', '$_POST[mno]', '$_POST[email]', '$_POST[username]', '$_POST[password]',)";

if ($conn->query($sql) === TRUE) 
{
    echo "New record added successfully";
} 
else 
{
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
