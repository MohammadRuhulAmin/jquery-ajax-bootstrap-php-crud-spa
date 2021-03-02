// Ajax request for insert data

$("#btnadd").click(function(e){
    e.preventDefault();
    let nm=$('#nameid').val();
    let em =$('#emailid').val();
    let pw = $('#passwordid').val();
    // console.log('name : '+nm);
    // console.log('email : '+em);
    // console.log('password :'+pw);
    mydata = {
        name:nm,
        email:em,
        password:pw
    };
    //console.log(myData);
    $.ajax({
        url:"insert.php",
        method:"POST",
        data:JSON.stringify(mydata),
        success:function(data){
            console.log(data);
            $msg = "<div class='alert alert-dark mt-3'>"+ data+"</div>"
            $('#msg').html($msg);
            $('#myform')[0].reset();
        }
          



    })


    
});