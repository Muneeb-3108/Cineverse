<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    var_dump($_POST);
    exit();
}
// Database configuration
$host = 'localhost';
$username = 'root';
$password = ''; // Update with your database password if any
$database = 'contact_form_db';
 
// Create a connection
$conn = new mysqli($host, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $fullName = $conn->real_escape_string($_POST['full_name']);
    $email = $conn->real_escape_string($_POST['email']);
    $message = $conn->real_escape_string($_POST['message']);

    // Insert data into the database
    $sql = "INSERT INTO submissions (full_name, email, message) VALUES ('$fullName', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "<p>Message sent successfully!</p>";
    } else {
        echo "<p>Error: " . $conn->error . "</p>";
    }
}

$conn->close();
?>
