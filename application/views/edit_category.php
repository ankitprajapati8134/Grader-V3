<div class="content-wrapper">
    <div class="page_container">
        <div class="box">
            <h1 class="text-center">Edit Category</h1>
            <div style="padding-top:20px; padding-left: 10px; padding-right: 20px;">
            <div class="row">
                <div class="col-sm-3"></div>                                           
                 <!-- $cat_info[0]['id'] method="post"-->
                <form action="<?php echo base_url(). 'index.php/school/edit_category/'. $cat_info[0]['id'] ?>" id="update_sub_cat" >
                <div class="col-sm-6">
                    <div class="form-group">
                        <label>Category Name</label>
                        <input type="text" name="name" id="name" value="<?php echo $cat_info[0]['name']; ?>" placeholder="Enter Category Name" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <input class="btn btn-primary" type="submit" value="Update" />                   
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>