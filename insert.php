<?php 

include('dbConnection.php');

    $data = stripslashes(file_get_contents("php://input"));
    $mydata = json_decode($data,true);
    $id = $mydata['id'];
    $name = $mydata['name'];
    $email = $mydata['email'];
    $password = $mydata['password'];

    //only insert function

    // if(!empty($name) && !empty($email) && !empty($password)){
    //     $sql = "INSERT INTO student(name,email,password)VALUES('$name','$email','$password')";
    //     if($conn->query($sql) == TRUE){
    //         echo "student saved successfully";
    //     }
    //     else echo "unable to stablish the connection ";
    // }
    // else echo "please fillup the required field!";
        
    //insert or update both 

    if(!empty($name) && !empty($email) && !empty($password)){
        $sql = "INSERT INTO student(id,name,email,password)VALUES('$id','$name','$email','$password')ON DUPLICATE KEY UPDATE name='$name',email='$email',password='$password'";
        if($conn->query($sql) == TRUE){
            echo "student saved successfully";
        }
        else echo "unable to stablish the connection ";
    }
    else echo "please fillup the required field!";

?>