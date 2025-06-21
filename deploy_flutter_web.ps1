# Compilar Flutter Web
Write-Host "Compilando Flutter Web con base href '/'..."
flutter build web --base-href "/"

# Cambiar a la rama gh-pages
Write-Host "Cambiando a rama gh-pages..."
git checkout gh-pages

# Limpiar archivos antiguos
Write-Host "Limpiando archivos anteriores..."
git rm -r -f * > $null
git commit -m "Clean gh-pages for fresh deploy"
git push origin gh-pages

# Copiar nuevos archivos
Write-Host "Copiando archivos generados al repositorio..."
Copy-Item -Path ".\build\web\*" -Destination "." -Recurse -Force

# Hacer commit y subir
$fecha = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Write-Host "Subiendo nueva versión a GitHub Pages..."
git add .
git commit -m "Deploy Flutter Web - $fecha"
git push origin gh-pages

# Regresar a rama principal
Write-Host "Volviendo a rama main..."
git checkout main

Write-Host "¡Despliegue completado! Ve a https://nexyraa.xyz"