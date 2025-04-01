import 'package:flutter/material.dart';

class RecipeDetailScreen extends StatelessWidget {
  final Map recipe;

  const RecipeDetailScreen({super.key, required this.recipe});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(recipe['title'])),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: ListView(
          // ✅ ListView supports scrolling by default
          children: [
            Image.network(recipe['image']),
            const SizedBox(height: 10),
            Text(
              recipe['title'],
              style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),
            Text("Cooking Time: ${recipe['readyInMinutes']} minutes"),
            const SizedBox(height: 10),
            const Text(
              "Instructions:",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 5),
            ...recipe['analyzedInstructions'].isNotEmpty
                ? recipe['analyzedInstructions'][0]['steps'].map<Widget>((
                  step,
                ) {
                  return ListTile(
                    leading: CircleAvatar(
                      child: Text(step['number'].toString()),
                    ),
                    title: Text(step['step']),
                  );
                }).toList()
                : [const Text("No instructions available")],
          ],
        ),
      ),
    );
  }
}
