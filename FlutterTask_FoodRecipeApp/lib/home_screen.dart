// // import 'package:flutter/material.dart';
// import 'main_dishes_screen.dart';
// import 'snacks_screen.dart';
// import 'beverages_screen.dart';

// class HomeScreen extends StatelessWidget {
//   const HomeScreen({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(title: const Text('Recipe Categories')),
//       body: Padding(
//         padding: const EdgeInsets.all(16.0),
//         child: Column(
//           children: [
//             const Text(
//               'Recipe Categories',
//               style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
//             ),
//             const SizedBox(height: 20),
//             Expanded(
//               child: GridView.count(
//                 crossAxisCount: 2,
//                 crossAxisSpacing: 10,
//                 mainAxisSpacing: 10,
//                 children: [
//                   _buildCategoryCard(
//                     context,
//                     'Main Dishes',
//                     'assets/main_dish.jpg',
//                     const MainDishesScreen(),
//                   ),
//                   _buildCategoryCard(
//                     context,
//                     'Snacks',
//                     'assets/snacks.jpg',
//                     const SnacksScreen(),
//                   ),
//                   _buildCategoryCard(
//                     context,
//                     'Beverages & Desserts',
//                     'assets/beverages.jpg',
//                     const BeveragesScreen(),
//                   ),
//                 ],
//               ),
//             ),
//           ],
//         ),
//       ),
//     );
//   }

//   Widget _buildCategoryCard(
//     BuildContext context,
//     String title,
//     String imagePath,
//     Widget screen,
//   ) {
//     return InkWell(
//       onTap: () {
//         print("✅ Navigating to: $title"); // Debugging Log
//         Navigator.push(
//           context,
//           MaterialPageRoute(builder: (context) => screen),
//         );
//       },
//       child: Card(
//         shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
//         elevation: 5,
//         child: Stack(
//           fit: StackFit.expand,
//           children: [
//             ClipRRect(
//               borderRadius: BorderRadius.circular(10),
//               child: Image.asset(
//                 imagePath,
//                 fit: BoxFit.cover,
//                 errorBuilder: (context, error, stackTrace) {
//                   return const Center(
//                     child: Icon(
//                       Icons.image_not_supported,
//                       size: 50,
//                       color: Colors.grey,
//                     ),
//                   );
//                 },
//               ),
//             ),
//             Container(
//               padding: const EdgeInsets.symmetric(vertical: 10),
//               color: Colors.black.withOpacity(0.6),
//               alignment: Alignment.bottomCenter,
//               child: Text(
//                 title,
//                 style: const TextStyle(
//                   color: Colors.white,
//                   fontWeight: FontWeight.bold,
//                 ),
//               ),
//             ),
//           ],
//         ),
//       ),
//     );
//   }
// }
import 'package:flutter/material.dart';
import 'main_dishes_screen.dart';
import 'snacks_screen.dart';
import 'beverages_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Recipe Categories')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            const Text(
              'Recipe Categories',
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 20),
            Expanded(
              child: GridView.count(
                crossAxisCount: 2,
                crossAxisSpacing: 10,
                mainAxisSpacing: 10,
                children: [
                  _buildCategoryCard(
                    context,
                    'Main Dishes',
                    'assets/main_dish.jpg',
                    const MainDishesScreen(),
                  ),
                  _buildCategoryCard(
                    context,
                    'Snacks',
                    'assets/snacks.jpg',
                    const SnacksScreen(),
                  ),
                  _buildCategoryCard(
                    context,
                    'Beverages & Desserts',
                    'assets/beverages.jpg',
                    const BeveragesScreen(),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCategoryCard(
    BuildContext context,
    String title,
    String imagePath,
    Widget screen,
  ) {
    return InkWell(
      onTap: () {
        print("✅ Navigating to: $title"); // Debugging Log
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => screen),
        );
      },
      child: Card(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
        elevation: 5,
        child: Stack(
          fit: StackFit.expand,
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(10),
              child: Image.asset(
                imagePath,
                fit: BoxFit.cover,
                errorBuilder: (context, error, stackTrace) {
                  return const Center(
                    child: Icon(
                      Icons.image_not_supported,
                      size: 50,
                      color: Colors.grey,
                    ),
                  );
                },
              ),
            ),
            Container(
              padding: const EdgeInsets.symmetric(vertical: 10),
              color: Colors.black.withOpacity(0.6),
              alignment: Alignment.bottomCenter,
              child: Text(
                title,
                style: const TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
