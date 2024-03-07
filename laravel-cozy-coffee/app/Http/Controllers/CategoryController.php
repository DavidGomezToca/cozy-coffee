<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\CategoryCollection;

class CategoryController extends Controller
{
    public function index()
    {
        return new CategoryCollection(Category::all());
    }
}
