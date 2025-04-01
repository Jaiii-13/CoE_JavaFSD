import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'recipe_detail_screen.dart';

class BeveragesScreen extends StatefulWidget {
  const BeveragesScreen({super.key});

  @override
  _BeveragesScreenState createState() => _BeveragesScreenState();
}

class _BeveragesScreenState extends State<BeveragesScreen> {
  List recipes = [];

  @override
  void initState() {
    super.initState();
    print("✅ BeveragesScreen Loaded"); // Debugging
    fetchRecipes();
  }

  Future<void> fetchRecipes() async {
    final url = Uri.parse(
      'https://api.spoonacular.com/recipes/random?number=10&tags=beverage,dessert&apiKey=7efa760e75c94123bbf4126e6fc14773',
    );
    final response = await http.get(url);

    if (response.statusCode == 200) {
      setState(() {
        recipes = jsonDecode(response.body)['recipes'];
      });
    } else {
      print('❌ Failed to load recipes'); // Debugging
      throw Exception('Failed to load recipes');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Beverages & Desserts')),
      body: Center(
        child:
            recipes.isEmpty
                ? const CircularProgressIndicator()
                : ListView.builder(
                  itemCount: recipes.length,
                  itemBuilder: (context, index) {
                    return Card(
                      margin: const EdgeInsets.all(10),
                      child: ListTile(
                        leading: Image.network(
                          recipes[index]['image'],
                          width: 80,
                          fit: BoxFit.cover,
                        ),
                        title: Text(recipes[index]['title']),
                        onTap: () {
                          print(
                            "Tapped on ${recipes[index]['title']}",
                          ); // Debugging
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder:
                                  (context) => RecipeDetailScreen(
                                    recipe: recipes[index],
                                  ),
                            ),
                          );
                        },
                      ),
                    );
                  },
                ),
      ),
    );
  }
}
