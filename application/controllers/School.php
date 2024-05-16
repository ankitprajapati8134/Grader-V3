<?php

// use SebastianBergmann\Environment\Console;

defined('BASEPATH') OR exit('No direct script access allowed');

class School extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->library('Firebase'); // Load the Firebase library
    }

    

    public function category()
    {
        if ($this->input->post('name')) {
            $categoryName = $this->input->post('name');
            
            // Use the Firebase library to add a category
            $categoryKey = $this->firebase->addCategory($categoryName);
            
            

            if ($categoryKey) {
                // Category added successfully
                echo "1"; // Or you can return a JSON response or any other response mechanism
            } else {
                // Failed to add category
                echo "Failed to add category";
            }
            exit; // Terminate script execution after adding category
        }

        


        // Fetch categories from Firebase
        // $categories = $this->firebase->getCategories();

        // Load the view normally if not submitting form
        $this->load->view('include/header');
        $this->load->view('category');
        $this->load->view('include/footer');
    }


    

    

}

    // public function update_category()
    // {
       
    //     if ($this->input->post('id') && $this->input->post('name')) {
    //         $categoryId = $this->input->post('id');
    //         $categoryName = $this->input->post('name');
    //         log_message('info', 'Received category id: ' . $categoryId . ' and name: ' . $categoryName);

    //         // Use the Firebase library to update the category
    //         $update = $this->firebase->updateCategory($categoryId, $categoryName);

    //         if ($update) {
    //             // Category updated successfully
    //             log_message('info', 'Category updated successfully: ' . $categoryId);
    //             echo "1"; // Or you can return a JSON response or any other response mechanism
    //         } else {
    //             // Failed to update category
    //             log_message('error', 'Failed to update category');
    //             echo "Failed to update category";
    //         }
    //         exit; // Terminate script execution after updating category
    //     }
    // }
