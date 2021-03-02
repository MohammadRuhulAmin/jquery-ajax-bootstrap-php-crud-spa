<?php 

include('dbConnection.php');

    $data = stripslashes(file_get_contents("php://input"));
    $mydata = json_decode($data,true);
    $name = $mydata['name'];
    $email = $mydata['email'];
    $password = $mydata['password'];

    

    if(!empty($name) && !empty($email) && !empty($password)){
        $sql = "INSERT INTO student(name,email,password)VALUES('$name','$email','$password')";
        if($conn->query($sql) == TRUE){
            echo "student saved successfully";
        }
        else echo "unable to stablish the connection ";
    }
    else echo "please fillup the required field!";
  

?>