export function solution(article) {
    // Tu código aquí 👈
    switch (article) {
      case "computadora":
        return "Con mi computadora puedo programar usando JavaScript";
        break;
      case "celular":
        return "En mi celular puedo aprender usando la app de Platzi";
        break;
      case "cable":
        return "¡Hay un cable en mi bota!";
        break;
      default:
        return "Artículo no encontrado";
    }
  }
  