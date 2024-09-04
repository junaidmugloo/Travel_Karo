<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    
public function index()
{
    // $category= new Category();
    // $category->name="Kashmir";
    // $category->save();
    $categories=Category::all();

    return Inertia::render('Home',['categories'=>$categories]);
}
public function store(Request $request)
{
    $request->validate([
        'name'=>'required'
    ]);
    $category= new Category();
    $category->name=$request->name;
    $category->save();
    return redirect()->back();
}

function destroy($id)
{
    $category=Category::find($id);
    $category->delete();
    return redirect()->back();
}



}
