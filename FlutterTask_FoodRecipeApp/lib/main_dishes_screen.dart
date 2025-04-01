import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'recipe_detail_screen.dart';

class MainDishesScreen extends StatefulWidget {
  const MainDishesScreen({super.key});

  @override
  _MainDishesScreenState createState() => _MainDishesScreenState();
}

class _MainDishesScreenState extends State<MainDishesScreen> {
  List recipes = [];
  bool isLoading = true;
  String errorMessage = '';

  @override
  void initState() {
    super.initState();
    fetchRecipes();
  }

  Future<void> fetchRecipes() async {
    setState(() {
      isLoading = true;
      errorMessage = '';
    });

    final url = Uri.parse(
      'https://api.spoonacular.com/recipes/random?number=10&tags=main%20course&apiKey=7efa760e75c94123bbf4126e6fc14773',
    );

    try {
      final response = await http.get(url);

      if (response.statusCode == 200) {
        setState(() {
          recipes = jsonDecode(response.body)['recipes'];
          isLoading = false;
        });
      } else {
        setState(() {
          errorMessage = 'Failed to load recipes. Please try again.';
          isLoading = false;
        });
      }
    } catch (e) {
      setState(() {
        errorMessage = 'Error fetching data. Check your internet connection.';
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Main Dishes')),
      body:
          isLoading
              ? const Center(
                child: CircularProgressIndicator(),
              ) // Loading Indicator
              : errorMessage.isNotEmpty
              ? Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      errorMessage,
                      textAlign: TextAlign.center,
                      style: const TextStyle(color: Colors.red, fontSize: 16),
                    ),
                    const SizedBox(height: 10),
                    ElevatedButton(
                      onPressed: fetchRecipes,
                      child: const Text('Retry'),
                    ),
                  ],
                ),
              )
              : ListView.builder(
                itemCount: recipes.length,
                itemBuilder: (context, index) {
                  return Card(
                    margin: const EdgeInsets.all(10),
                    child: ListTile(
                      leading: ClipRRect(
                        borderRadius: BorderRadius.circular(8),
                        child: Image.network(
                          recipes[index]['image'],
                          width: 80,
                          height: 80,
                          fit: BoxFit.cover,
                          loadingBuilder: (context, child, loadingProgress) {
                            if (loadingProgress == null) return child;
                            return const Center(
                              child: CircularProgressIndicator(),
                            );
                          },
                          errorBuilder: (context, error, stackTrace) {
                            return const Icon(
                              Icons.broken_image,
                              size: 80,
                              color: Colors.grey,
                            );
                          },
                        ),
                      ),
                      title: Text(recipes[index]['title']),
                      subtitle: Text(
                        "Ready in ${recipes[index]['readyInMinutes']} minutes",
                      ),
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
