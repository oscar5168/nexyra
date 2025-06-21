import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';


void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: const KexingHome(),
      routes: {
        '/trabajos': (context) => TrabajosPage(),
      },
    );
  }
}

class KexingHome extends StatelessWidget {
  const KexingHome({super.key});
  final String whatsappUrl = 'https://wa.me/526565310943'; // cambia por tu número
  final String facebookUrl = 'https://www.facebook.com/profile.php?id=61577368476985&notif_id=1750390962711393&notif_t=follower_invite&ref=notif&locale=es_LA';
  final String igUrl = 'https://www.instagram.com/nexyra.studio/?next=%2F';
   Future<void> _openUrl(String url) async {
    if (await canLaunchUrl(Uri.parse(url))) {
      await launchUrl(Uri.parse(url));
    } else {
      throw 'No se pudo abrir $url';
    }
  }

  @override
Widget build(BuildContext context) {
  final screenHeight = MediaQuery.of(context).size.height;
  final screenWidth = MediaQuery.of(context).size.width;

  return Scaffold(
    backgroundColor: Colors.black,
    body: SafeArea(
      child: SingleChildScrollView(
        child: Center(
          child: Padding(
            padding: EdgeInsets.symmetric(
              horizontal: screenWidth * 0.07,
              vertical: screenHeight * 0.04,
            ),
            child: Column(
              children: [

                // Imagen
                CircleAvatar(
                  radius: screenWidth * 0.15,
                  backgroundImage: AssetImage('assets/logo.png'),
                ),

                SizedBox(height: screenHeight * 0.03),

                // Título
                Text(
                  'Nexyra | DEV & Design',
                  style: TextStyle(
                    fontSize: screenWidth * 0.05,
                    fontWeight: FontWeight.bold,
                    color: const Color.fromARGB(255, 255, 255, 255),
                  ),
                ),

                SizedBox(height: screenHeight * 0.01),

                // Subtítulo
                Text(
                  'Creamos tu estilo tu haces la historia.',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: screenWidth * 0.04,
                    color: const Color.fromARGB(255, 255, 255, 255),
                    fontWeight: FontWeight.w500,
                  ),
                ),

                SizedBox(height: screenHeight * 0.05),

                // Botones adaptativos
                //Boton 1
                CustomNeonButton(
                  icon: FontAwesomeIcons.whatsapp,
                  text: 'Escríbenos al WhatsApp',
                  onTap: () => _openUrl(whatsappUrl),
                ),
                SizedBox(height: screenHeight * 0.025),
                //Boton 2
                CustomNeonButton(
                  icon: Icons.facebook,
                  text: 'Síguenos en Facebook',
                  onTap: () => _openUrl(facebookUrl),
                ),
                SizedBox(height: screenHeight * 0.025),
                //Boton 3
                CustomNeonButton(
                  icon: FontAwesomeIcons.instagram,
                  text: 'Síguenos en Instagram',
                  onTap: () => _openUrl(igUrl),
                ),
                SizedBox(height: screenHeight * 0.025),
                //Boton 4
                CustomNeonButton(
                  icon: Icons.support_agent,
                  text: 'Nuestros proyectos',
                  onTap: () {
                    Navigator.pushNamed(context, '/trabajos');
                  },
                ),

                SizedBox(height: screenHeight * 0.04),
              ],
            ),
          ),
        ),
      ),
    ),
  );
}
}

class CustomNeonButton extends StatefulWidget {
  final IconData icon;
  final String text;
  final VoidCallback onTap;

  const CustomNeonButton({
    super.key,
    required this.icon,
    required this.text,
    required this.onTap,
  });

  @override
  State<CustomNeonButton> createState() => _CustomNeonButtonState();
}

class _CustomNeonButtonState extends State<CustomNeonButton> {
  bool _isHovering = false;

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;

    return MouseRegion(
      onEnter: (_) => setState(() => _isHovering = true),
      onExit: (_) => setState(() => _isHovering = false),
      child: GestureDetector(
        onTap: widget.onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          width: screenWidth * 0.8,
          margin: const EdgeInsets.symmetric(vertical: 10),
          padding: const EdgeInsets.all(3), // Simula el borde
          decoration: BoxDecoration(
            gradient: const LinearGradient(
              colors: [Colors.blueAccent, Colors.pinkAccent],
              begin: Alignment.centerLeft,
              end: Alignment.centerRight,
            ),
            borderRadius: BorderRadius.circular(40),
            boxShadow: _isHovering
                ? [
                    BoxShadow(
                      color: Colors.pinkAccent.withOpacity(0.6),
                      blurRadius: 30,
                      spreadRadius: 3,
                      offset: Offset(0, 0),
                    ),
                  ]
                : [
                    BoxShadow(
                      color: Colors.pinkAccent.withOpacity(0.3),
                      blurRadius: 15,
                      spreadRadius: 1,
                      offset: Offset(0, 0),
                    ),
                  ],
          ),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
            decoration: BoxDecoration(
              color: Colors.black,
              borderRadius: BorderRadius.circular(40),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(widget.icon, color: Colors.white),
                const SizedBox(width: 10),
                Flexible(
                  child: Text(
                    widget.text,
                    style: const TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 16,
                    ),
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class TrabajosPage extends StatelessWidget {
  final List<String> ejemplos = [
    'Diseño de invitación para XV años',
    'Página web para tienda de ropa',
    'Banner promocional para evento escolar',
    // Puedes añadir más
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Nuestros trabajos')),
      body: ListView.builder(
        itemCount: ejemplos.length,
        itemBuilder: (context, index) {
          return ListTile(
            leading: Icon(Icons.check_circle_outline),
            title: Text(ejemplos[index]),
          );
        },
      ),
    );
  }
}
