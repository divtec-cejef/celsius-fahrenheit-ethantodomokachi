/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Ethan Odiet
 * @version 0.1
 * @since   2022-08-23
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code
  const tempCelcius = Number( prompt('Entrez la température en °C'));

  alert(`${tempCelcius}°C = ${tempCelcius * 9 / 5 + 32}°F`);
}()); // Main IIFE

