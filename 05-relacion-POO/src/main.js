// testing de los ejercicios POO
// ------- EJERCICIO 1 -------
// ------- funciones contructoras ----
import Tarea, { TareaClass } from "./helpers/ejercicio1";

const tarea1 = new Tarea("Aprender JavaScript");
const tarea2 = new Tarea("Aprender React");

tarea1.info(); // La tarea Aprender Javascript esta pendiente
tarea1.toggleCompletada();
tarea1.info(); // La tarea Aprender JavaScript está completada
tarea2.info(); // La tarea Aprender React esta pendiente

// ---- Clases ---

const tarea1Clases = new TareaClass("Aprender JavaScript Clases");
const tarea2Clases = new TareaClass("Aprender React Clases");

tarea1Clases.info(); // La tarea Aprender Javascript esta pendiente
tarea1Clases.toggleCompletada();
tarea1Clases.info(); // La tarea Aprender JavaScript está completada
tarea2Clases.info(); // La tarea Aprender React esta pendiente

// ------- EJERCICIO 3 -------
// ------- funciones contructoras ----

