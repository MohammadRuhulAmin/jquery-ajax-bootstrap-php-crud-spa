$(document).ready(function(){

    //Ajax Request for retriving data
    function showdata(){
        output = "";
        $.ajax({
            url:"retrieve.php",
            method:"GET",
            dataType:"json",
            success:function(data){
                if(data){
                    x = data;
                }
                else{
                    x="";
                }
                for(i=0;i<x.length;i++){
                    // console.log(x[i].name);
                    output +="<tr>"+
                                "<td>"+x[i].id +"</td>"+
                                "<td>"+x[i].name +"</td>"+
                                "<td>" +x[i].email+ "</td>"+
                                "<td>"+x[i].password +"</td>"+
                                "<td>"+"<button class='btn btn-warning btn-sm'>Edit</button> "+"<button class='btn btn-danger btn-sm'>Delete</button>"+"</td>"+
                             "</tr>";
                }
                $('#tbody').html(output);
            }
        }); 
    }

    showdata();




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
            showdata();
        }
          
     });


        
    });
});