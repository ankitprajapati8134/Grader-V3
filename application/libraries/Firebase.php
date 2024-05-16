<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require __DIR__ . '/../../vendor/autoload.php'; // Adjust the path according to your directory structure


use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;



class Firebase
{
    protected $database;
    protected $auth;

    public function __construct()
    {
    
        //paste here the credentials
        $firebase = (new Factory)
            ->withServiceAccount($serviceAccountPath) // Path to your Firebase credentials JSON file
            ->withDatabaseUri($databaseUri); // Replace with your Firebase database URL

        $this->database = $firebase->createDatabase();
        $this->auth = $firebase->createAuth();

    }

    public function addCategory($categoryName)
    {
        $newCategory = $this->database
            ->getReference('categories')
            ->push(['name' => $categoryName]);

        // Log the key of the new category
        $categoryKey = $newCategory->getKey();
        return $categoryKey;
    }
    

    // public function getCategories()
    // {
    //     log_message('info', 'Fetching categories from Firebase');
        
    //     $categories = $this->database->getReference('categories')->getValue();
    //     log_message('info', 'Categories fetched: ' . json_encode($categories));

    //     return $categories;
    // }

}