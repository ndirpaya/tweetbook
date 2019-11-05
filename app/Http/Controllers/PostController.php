<?php

namespace App\Http\Controllers;

use App\Post;
use App\Transformers\PostTransformer;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::get();

        return fractal()
            ->collection($posts)
            ->transformWith(new PostTransformer())
            ->toArray();
    }
}
