<?php
// payment.php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection parameters
$host = 'localhost'; // or your host
$db = 'payments'; // your database name
$user = 'root'; // your database username
$pass = ''; // your database password (default is empty for XAMPP)

// Create a connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Initialize variables
$message = '';

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST['c_name'];
    $card_number = $_POST['card_number'];
    $expiry = $_POST['expiry'];
    $cvv = $_POST['cvv'];
    $amount = $_POST['amount'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO transactions (c_name, card_number, expiry, cvv, amount) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssi", $name, $card_number, $expiry, $cvv, $amount);

    // Execute the statement
    if ($stmt->execute()) {
        // Redirect to success page
        header('Location: success.html');
        exit();
    } else {
        $message = "Error executing statement: " . $stmt->error; // Display error message
    }

    // Close the statement
    $stmt->close();
}

// Close the database connection
$conn->close();
?>
<?php if ($message): ?>
            <div class="error-message"><?php echo $message; ?></div>
        <?php endif; ?>