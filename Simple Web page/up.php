<?php
print_r($_POST);
//print_r($_GET);
$servername = "localhost";
$email="$_POST[email]";
$password="$_POST[password]";
$pword="$_POST[txtpass]";
$USERNAME = "root";
$PASSWORD = "";
$dbname = "event";

// Create connection
$conn = new mysqli($servername, $USERNAME, $PASSWORD, $dbname);
// Check connection
if ($conn->connect_error) 
{
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "UPDATE users SET password='$password' WHERE email='$email'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$sql = "SELECT email, password FROM users";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["email"]. " " . $row["password"]. "  "<br>";
    }
} else {
    echo "no results found";
}

$conn->close();
?>
