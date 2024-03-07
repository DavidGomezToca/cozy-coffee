<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            array(
                'name' =>  "Caramel Coffee with Chocolate",
                'price' => 59.9,
                'image' => "Coffee_01",
                'category_id' => 1,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Cold Coffee with Large Chocolate",
                'price' => 49.9,
                'image' => "Coffee_02",
                'category_id' => 1,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Cold Latte with Extra Large Chocolate",
                'price' => 54.9,
                'image' => "Coffee_03",
                'category_id' => 1,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Cold Latte with Large Chocolate",
                'price' => 54.9,
                'image' => "Coffee_04",
                'category_id' => 1,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Cold Shake with Large Chocolate",
                'price' => 54.9,
                'image' => "Coffee_05",
                'category_id' => 1,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Hot Small Mocha Coffee",
                'price' => 39.9,
                'image' => "Coffee_06",
                'category_id' => 1,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Hot Mocha Coffee With Chocolate",
                'price' => 59.9,
                'image' => "Coffee_07",
                'category_id' => 1,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Hot Large Cappuccino",
                'price' => 59.9,
                'image' => "Coffee_08",
                'category_id' => 1,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Hot Medium Mocha Coffee",
                'price' => 49.9,
                'image' => "Coffee_09",
                'category_id' => 1,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Cold Medium Mocha Coffee With Caramel",
                'price' => 49.9,
                'image' => "Coffee_10",
                'category_id' => 1,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Cold Medium Mocha Coffee With Chocolate",
                'price' => 49.9,
                'image' => "Coffee_11",
                'category_id' => 1,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Espresso",
                'price' => 29.9,
                'image' => "Coffee_12",
                'category_id' => 1,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Large Cappuccino With Caramel",
                'price' => 59.9,
                'image' => "Coffee_13",
                'category_id' => 1,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Large Coffee With Caramel",
                'price' => 59.9,
                'image' => "Coffee_14",
                'category_id' => 1,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Burger",
                'price' => 59.9,
                'image' => "Burger_01",
                'category_id' => 2,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Chicken Burger",
                'price' => 59.9,
                'image' => "Burger_02",
                'category_id' => 2,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Chicken And Chilli Burger",
                'price' => 59.9,
                'image' => "Burger_03",
                'category_id' => 2,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Cheese And Pickles Burger",
                'price' => 59.9,
                'image' => "Burger_04",
                'category_id' => 2,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Quarter Pounder Burger",
                'price' => 59.9,
                'image' => "Burger_05",
                'category_id' => 2,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Double Cheese Burger",
                'price' => 69.9,
                'image' => "Burger_06",
                'category_id' => 2,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Special Hot Dog",
                'price' => 49.9,
                'image' => "Burger_07",
                'category_id' => 2,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "2 Hot Dogs",
                'price' => 69.9,
                'image' => "Burger_08",
                'category_id' => 2,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Spicy Pizza With Double Cheese",
                'price' => 69.9,
                'image' => "Pizza_01",
                'category_id' => 3,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Ham And Cheese Pizza",
                'price' => 69.9,
                'image' => "Pizza_02",
                'category_id' => 3,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Double Cheese Pizza",
                'price' => 69.9,
                'image' => "Pizza_03",
                'category_id' => 3,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "House Special Pizza",
                'price' => 69.9,
                'image' => "Pizza_04",
                'category_id' => 3,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Chorizo Pizza",
                'price' => 69.9,
                'image' => "Pizza_05",
                'category_id' => 3,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Hawaiian Pizza",
                'price' => 69.9,
                'image' => "Pizza_06",
                'category_id' => 3,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Bacon Pizza",
                'price' => 69.9,
                'image' => "Pizza_07",
                'category_id' => 3,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Vegetable and Cheese Pizza",
                'price' => 69.9,
                'image' => "Pizza_08",
                'category_id' => 3,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Pepperoni and Cheese Pizza",
                'price' => 69.9,
                'image' => "Pizza_09",
                'category_id' => 3,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Olives and Cheese Pizza",
                'price' => 69.9,
                'image' => "Pizza_10",
                'category_id' => 3,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Cheese, Ham, and Mushroom Pizza",
                'price' => 69.9,
                'image' => "Pizza_11",
                'category_id' => 3,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "3 Chocolate Donuts",
                'price' => 39.9,
                'image' => "Donut_01",
                'category_id' => 4,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "3 Glazed Donuts",
                'price' => 39.9,
                'image' => "Donut_02",
                'category_id' => 4,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Strawberry Donut",
                'price' => 19.9,
                'image' => "Donut_03",
                'category_id' => 4,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Donut With Chocolate Cookie",
                'price' => 19.9,
                'image' => "Donut_04",
                'category_id' => 4,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Glazed Donut With Strawberry Sprinkles",
                'price' => 19.9,
                'image' => "Donut_05",
                'category_id' => 4,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Glazed Donut With Chocolate",
                'price' => 19.9,
                'image' => "Donut_06",
                'category_id' => 4,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Chocolate Donut Extra Chocolate",
                'price' => 19.9,
                'image' => "Donut_07",
                'category_id' => 4,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "3 Chocolate Donuts with little Chocolates",
                'price' => 39.9,
                'image' => "Donut_08",
                'category_id' => 4,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "3 Donuts With Vanilla And Chocolate",
                'price' => 39.9,
                'image' => "Donut_09",
                'category_id' => 4,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "6 Donuts",
                'price' => 69.9,
                'image' => "Donut_10",
                'category_id' => 4,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "3 Assorted Donuts",
                'price' => 39.9,
                'image' => "Donut_11",
                'category_id' => 4,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Caramel Donut",
                'price' => 19.9,
                'image' => "Donut_12",
                'category_id' => 4,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "3 Apple Donuts",
                'price' => 39.9,
                'image' => "Donut_13",
                'category_id' => 4,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Donut With Chocolate And Coconut",
                'price' => 19.9,
                'image' => "Donut_14",
                'category_id' => 4,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "4 Slices Of Cheesecake",
                'price' => 69.9,
                'image' => "Dessert_01",
                'category_id' => 5,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Waffle",
                'price' => 49.9,
                'image' => "Dessert_02",
                'category_id' => 5,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Croissants",
                'price' => 39.9,
                'image' => "Dessert_03",
                'category_id' => 5,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Cheesecake",
                'price' => 19.9,
                'image' => "Dessert_04",
                'category_id' => 5,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Chocolate Cake",
                'price' => 29.9,
                'image' => "Dessert_05",
                'category_id' => 5,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Slice Of Chocolate Cake",
                'price' => 29.9,
                'image' => "Dessert_06",
                'category_id' => 5,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Chocolate Cookies Pack",
                'price' => 29.9,
                'image' => "Cookie_01",
                'category_id' => 6,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Chocolate And Oatmeal Cookies Pack",
                'price' => 39.9,
                'image' => "Cookie_02",
                'category_id' => 6,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Vanilla Muffins Pack",
                'price' => 39.9,
                'image' => "Cookie_03",
                'category_id' => 6,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "4 Oatmeal Cookies",
                'price' => 24.9,
                'image' => "Cookie_04",
                'category_id' => 6,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Assorted Butter Cookies",
                'price' => 39.9,
                'image' => "Cookie_05",
                'category_id' => 6,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array(
                'name' =>  "Fruity Flavored Cookies",
                'price' => 39.9,
                'image' => "Cookie_06",
                'category_id' => 6,
                'available' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
        ];
        DB::table('products')->insert($data);
    }
}