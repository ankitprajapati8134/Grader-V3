// ADD CATEGORY IN THE FORM
$('#add_category').submit(function(){
    category = $('#category').val();
    url =  $(this).attr('action');
    // console.log(url);
  
    $.post(url, {'name':category},function(fb){
        
        if(fb.match('1')){
            alert('Category Successfully Added');
            setTimeout(function(){
                location.reload();
            }, 1000);
        }
        else{
            alert(fb)
        }
    });
    return false;
});


// //UPDATE THE DATA IN THE FORM
// $('#update_sub_cat').submit(function(event) {
//     name =$('#name').val();
//     url= $(this).attr('action');
//     $.post(url,{'name':name},function(fb){
//         if(fb.match('1')){
//             alert('Category Successfully Updated');
//             setTimeout(function(){
//                 window.location.href = BASE_URL+"index.php/school/category";
//             },1000);
//         }
//         else{
//             alert('Error updating category'); 
//         }
//     });
//     return false;
// });

// // ADD Class IN THE FORM
// $('#add_class_form').submit(function(){
//     name = $('#name').val();
//     cat = $('#cat').val();


//     url =  $(this).attr('action');
//     $.post(url, {'name':name,'cat':cat},function(fb){
        
//         if(fb.match('1')){
//             alert('Class Successfully Added');
//             setTimeout(function(){
//                 location.reload();
//             }, 1000);
//         }
//         else{
//             alert(fb)
//         }
//     });
//     return false;
// });


// // UPDATE Class IN THE FORM
// $('#update_class').submit(function(){
//     name = $('#name').val();
//     cat = $('#cat').val();
//     url =  $(this).attr('action');
//     $.post(url, {'name':name,'cat':cat},function(fb){
//         // alert(fb)    // Here we used for testing purpose
//         // return false;  // Here we used for testing purpose
//         if(fb.match('1')){
//             alert('Class Successfully Updated');
//             setTimeout(function(){
//                 window.location.href = BASE_URL+'index.php/school/classes';
//             }, 1000);
//         }
//         else{
//             alert(fb)
//         }
//     });
//     return false;
// });

// // Enter the data of course from the FORM to the database
// $('#add_course_form').submit(function(){
//     name = $('#name').val();
//     duration = $('#course_duration').val();
//     fees = $('#course_fees').val();
//     started = $('#course_started').val();

//     url =  $(this).attr('action');
//     $.post(url, {'name':name,'duration':duration,'fees':fees,'started':started},function(fb){
//         if(fb.match('1'))
//         {
//             alert('Course Successfully Added');
//             setTimeout(function(){
//                 location.reload();
//             }, 1000);
//         }
//         else{
//             alert(fb);
//         }
//     });
//     return false;
// });


// // Enter the data of course from the FORM to the database
// $('#update_course').submit(function(){
//     name = $('#name').val();
//     duration = $('#course_duration').val();
//     fees = $('#course_fees').val();
//     started = $('#course_started').val();

//     url =  $(this).attr('action');
//     $.post(url, {'name':name,'duration':duration,'fees':fees,'started':started},function(fb){
//         if(fb.match('1'))
//         {
//             alert('Course Successfully Updated');
//             setTimeout(function(){
//                 window.location.href = BASE_URL+'index.php/school/course';
//             }, 1000);
//         }
//         else{
//             alert(fb);
//         }
//     });
//     return false;
// });


// // Send the date from form to the database into an object 'data'
// $('#add_student_form').submit(function(){
//     data = {'name':$('#sname').val(),
//         'fname':$('#fname').val(),
//         'category':$('#category').val(),
//         'class':$('#class').val(),
//         'dob':$('#dob').val(),
//         'join_date':$('#join_date').val(),
//         'email':$('#email_user').val(),
// };
//     //Ajax response
//     url = $(this).attr('action');
//     $.post(url, data, function(fb){
//         //alert(fb);
//         if(fb.match('1'))
//         {
//             alert('Student Successfully Registered');
//             setTimeout(function(){
//                 location.reload();
//             }, 1000);
//         }   
//         else
//             {
//                 alert('Student Not Registered');
//             }
//     }); 
//     //console.log(data);
//         return false;
// });


// $('#edit_student_form').submit(function(){
//     url = $(this).attr('action');
//     data = {'name':$('#sname').val(),
//     'fname':$('#fname').val(),
//     'category':$('#category').val(),
//     'class':$('#class').val(),
//     'dob':$('#dob').val(),
//     'join_date':$('#join_date').val(),
//     'email':$('#email_user').val(),
// };

// $.post(url, data, function(fb)  
// {
//     //alert(fb);
//     if(fb.match('1'))
//     {
//         alert('Student Successfully Updated');
//         setTimeout(function(){
//             window.location.href = BASE_URL+'index.php/student/student_registration';
//         });
//     }   
//     else
//         {
//             alert('Student Not Updated');
//         }
// }); 

//     return false;
// });


// //Staff Details
// $('#add_staff_form').submit(function(){
//     url = $(this).attr('action');
//     //alert(url);
//     data ={
//             'name':$('#name').val(),
//             'fname':$('#fname').val(),
//             'email':$('#email').val(),
//             'mobile_no':$('#mobile_no').val(),
//             'dob':$('#dob').val(),
//             'join_date':$('#join_date').val(),
//             'exp':$('#exp').val(),
//             'payment':$('#payment').val(),
//             'staff_other_information':$('#staff_other_information').val(),
//          };
//         // console.log(data);
//         $.post(url, data, function(fb){
        
//             if(fb.match('1'))
//             {
//                 alert('Staff Successfully Added');
//                 setTimeout(function(){
//                     location.reload();
//                 }, 1000);
//             }
//             else
//                 {
//                     alert('Student Not Added');
//                 }
//         }); 
//              return false; 
//         });
 
// //Update Staff details
// $('#edit_staff_form').submit(function(){
//     url = $(this).attr('action');
//     data = {'name':$('#name').val(),
//             'fname':$('#fname').val(),
//             'email':$('#email').val(),
//             'mobile_no':$('#mobile_no').val(),
//             'dob':$('#dob').val(),
//             'join_date':$('#join_date').val(),
//             'exp':$('#exp').val(),
//             'payment':$('#payment').val(),
//             'staff_other_information': $('#staff_other_information').val(),
//             };

//   $.post(url, data, function(fb)  
//     {
//      //alert(fb);
//         if(fb.match('1'))
//             {
//                 alert('Staff Successfully Updated');
//                 setTimeout(function(){
//                     window.location.href = BASE_URL+'index.php/staff/manage_staff';
//                  },1000 );
//          }   
//         else
//         {
//             alert('Staff Not Updated');
//         }
//     });         
//     return false;
// });
   

// $('#add_Attendance_form').submit(function(){
//     var url = $(this).attr('action');
//     //get the data from url     
//     var status = $('#status').val();
//     var date = $('#date').val();
//     var remarks = $('#remarks').val();
//     var data = {'status':status, 'date':date, 'remarks':remarks};
//     //console.log(data);
//     $.post(url,data,function(fb){
//        // console.log(fb); // it will send address to the variable fb now in controller will receive it.
//        if(fb.match('1'))
//        {
//            alert('Attendance Successfully Added');
//            setTimeout(function(){
//                 location.reload();
//             },1000 );
//     }   
//    else
//    {
//        alert('Attendance Not Added');
//    }
//     });
//     // alert(url);
//     return false;
// });


// //Update Attendance details
// $('#edit_Attendance_form').submit(function(){
//     url = $(this).attr('action');
//     var status = $('#status').val();
//     var date = $('#date').val();
//     var remarks = $('#remarks').val();
//     var student_id =$('#student_id').val(); 
//     var data = {'status':status, 'date':date, 'remarks':remarks};

//     $.post(url,data,function(fb){
//         // console.log(fb);
//         if(fb.match('1'))
//         {
//             alert('Attendance Successfully Updated');
//             setTimeout(function(){
//                 window.location.href = BASE_URL+ 'index.php/attendance/add_attendance/' + student_id;  
//              },1000 );
//      }   
//     else
//     {
//         alert('Attendance Not Updated');
//     }
// });
//      // alert(url);
//      return false;

// });

// //Exam ............................. Code Started.................

// $(document).on('change','#exam_category',function(){   // I want to fetch the data of particular id whose name is 'exam_category'
//     data = $(this).val();
//    // alert(data);
//    //Ajax code below
//    $.post(BASE_URL + 'index.php/exam/find_class',{'cat':data}, function(fb){
//         $('#class').html(fb);
//    })
// });

// $('#add_exam_form').submit(function(){
//     url = $(this).attr('action');
//     // alert(url);
//     title = $('#title').val();
//     start_date = $('#start_date').val();
//     exam_category = $('#exam_category').val();
//     class1 = $('#class').val();

//     //now we will create object with name data
//     data = {'title': title, 'start_date':start_date,'category':exam_category,'class':class1};
//     //console.log(data); 

//     // now this data we got from url will get insert into database through ajax
//     $.post(url, data, function(fb){
//        // alert(fb);
//        if(fb.match('1'))
//         {
//             alert('Exam Succesfully Added');
//             setTimeout(function(){
//                 location.reload();
//             },1000);
//         }
//         else
//         {
//             alert('Exam is not Added');
//         }
//     });

//     return false;
// });


// $('#update_exam_form').submit(function(){
    
//     url = $(this).attr('action');
//     // alert(url);
//     title = $('#title').val();
//     start_date = $('#start_date').val();
//     exam_category = $('#exam_category').val();
//     class1 = $('#class').val();

//     //now we will create object with name data
//     data = {'title': title, 'start_date':start_date,'category':exam_category,'class':class1};
//     //console.log(data); 

//     // now this data we got from url will get insert into database through ajax
//     $.post(url, data, function(fb){
//        // alert(fb);
//        if(fb.match('1'))
//         {
//             alert('Exam Succesfully Updated');
//             setTimeout(function(){
//                 window.location.href = BASE_URL + 'index.php/exam/add_exam';
//             },1000);
//         }
//         else
//         {
//             alert('Exam is not Updated');
//         }
//     });
    
//     return false;
// });


// $('#add_time_table_form').submit(function(){
//     url = $(this).attr('action');
//     //alert(url);
//     $.ajax({
//         type:'POST',
//         url:url,
//         data : new FormData($(this)[0]),
//         contentType:false,
//         processData : false,
//         success :function(fb){
//             // later the code is added
//             if(fb.match('1'))
//                 {
//                 alert('Time Table Successfully Uploaded');
//                 setTimeout(function(){
//                     location.reload();
//                 },1000);
//             }
//             else if(fb.match('2'))
//                 alert('Only JPG And PNG PDF File Are Allowed');
//             else
//                 alert('Time Table NOt Upload');

//         }
//     });
//     return false;
// });

// $('#edit_time_table_form').submit(function(){

//     url = $(this).attr('action');
//     //alert(url);
//     $.ajax({
//         type:'POST',
//         url:url,
//         data : new FormData($(this)[0]),
//         contentType:false,
//         processData : false,
//         success :function(fb){
//             console.log(fb);
//             if(fb == '1')
//                 {
//                 alert('Time Table Successfully Uploaded');
//                 setTimeout(function(){
//                     window.location.href = BASE_URL + 'index.php/exam/add_time_table';
//                 },1000);
//             }
//             else if(fb.match('2'))
//                 alert('Only JPG And PNG PDF File Are Allowed');
//             else
//                 alert('Time Table NOt Upload');

//         }
//     });

//     return false;
// });

// //******************************************************** */
// $(document).on('change','#select_student',function(){
//     //alert($(this).val())
//     id = $('#select_student').val();
//     class1 = $('#st_'+id).attr('data-val');
//     // alert(class1);
//     $.post(BASE_URL+ 'index.php/result/find_exams',{'class':class1}, function(fb){
//       //  alert(fb);
//       $('#exam').html(fb);
//     });
    
// });



// //Now to enter the details from the FORM into  the database
// $('#add_result_form').submit(function(){
//     url =$(this).attr('action');
//     //alert(url);  

//     // now we directly fetch the whole data from the FORM , now we use a function---> data = new FormData($(this)[0])
//     data = {'student_id':$('#select_student').val(),
//             'exam_name':$('#exam').val(),
//             'result':$('#result').val(),
//             };

//     $.post(url, data, function(fb){
//         // alert(fb);
//         if(fb.match('1'))
//         {
//             alert('Result Successfully Added');
//             setTimeout(function(){
//                 location.reload();
//             },1000);
//         }
//         else 
//         {
//             alert('Result Not Added');
//         }
//     });

//     return false;
// });


// //Now to Update Results into  the database when User click on the Update button
// $('#edit_result_form').submit(function(){
//     url =$(this).attr('action');
//     //alert(url);  

//     // now we directly fetch the whole data from the FORM , now we use a function---> data = new FormData($(this)[0])
//     data = {'student_id':$('#select_student').val(),
//             'exam_name':$('#exam').val(),
//             'result':$('#result').val(),
//             };

//     $.post(url, data, function(fb){
//         // alert(fb);
//         if(fb.match('1'))
//         {
//             alert('Result Successfully Updated');
//             setTimeout(function(){
//                 window.location.href = BASE_URL + 'index.php/result';
//             },1000);
//         }
//         else 
//         {
//             alert('Result Not Updated');
//         }
//     });

//     return false;
// });


// // code for Status 
// $(document).on('change','.change_status',function(){
//     // alert('sample');
//     tbl = $(this).attr('data-table');
//     id = $(this).attr('data-id');
//     data = $("input[name = 'status_"+ id +"']:checked").val();
//     if(data != 1)
//         data = 0;
//     $.post(BASE_URL + 'index.php/admin/change_status/' + tbl + '/' + id, {'status': data}, function(fb){
//        // alert(fb)
//        if(fb.match('1'))
//         {
//             alert("Status Successfully Changed");
//         }
//         else
//         {
//             alert("Status Not Changed");
//         }
//     });

// });
