<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TesteController extends Controller
{
    public function getText(Request $request){
        return response()->json('Seja bem-vindo à aula de infra + Git');
    }
}
