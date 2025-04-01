import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'recipe_detail_screen.dart';

class SnacksScreen extends StatefulWidget {
  const SnacksScreen({super.key});

  @override
  _SnacksScreenState createState() => _SnacksScreenState();
}

class _SnacksScreenState extends State<SnacksScreen> {
  List recipes = [];

  @override
  void initState() {
    super.initState();
    fetchRecipes();
  }

  Future<void> fetchRecipes() async {
    final url = Uri.parse(
      'https://api.spoonacular.com/recipes/random?number=10&tags=snack&apiKey=7efa760e75c94123bbf4126e6fc14773',
    );
    final response = await http.get(url);

    if (response.statusCode == 200) {
      setState(() {
        recipes = jsonDecode(response.body)['recipes'];
      });
    } else {
      throw Exception('Failed to load recipes');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Snacks')),
      body:
          recipes.isEmpty
              ? const Center(child: CircularProgressIndicator())
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
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder:
                                (context) =>
                                    RecipeDetailScreen(recipe: recipes[index]),
                          ),
                        );
                      },
                    ),
                  );
                },
              ),
    );
  }
}
