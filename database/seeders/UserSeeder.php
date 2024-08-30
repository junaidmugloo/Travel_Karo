<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    public function run()
    {
        $factory = new \Database\Factories\UserFactory();

        for ($i = 0; $i < 10; $i++) {
            $data = $factory->definition(); // Generate fake data
            User::create($data);
        }
    }
}
