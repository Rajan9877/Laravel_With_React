<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function createUser(){
        $name = "Priya";
        $email = "Priya@gmail.com";
        $password = "123";
        $user = new User;
        $user->name = $name;
        $user->email = $email;
        $user->password = $password;
        $user->save();
        return "Your data has been inserted successfully.";
    }

    public function getUser(){
        $users = User::all();
        return $users;
    }
}
