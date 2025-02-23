"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addExercise = addExercise;
exports.removeExercise = removeExercise;
exports.clearRoutine = clearRoutine;
exports.getRoutine = getRoutine;
exports.getProgress = getProgress;
exports.saveProgress = saveProgress;
exports.clearProgress = clearProgress;
// Utility function to get stored routines from localStorage
function getRoutine() {
    return JSON.parse(localStorage.getItem("routine") || '{"exercises": []}');
}
// Utility function to save routine to localStorage
function saveRoutine(routine) {
    localStorage.setItem("routine", JSON.stringify(routine));
}
// Function to add an exercise to the routine
function addExercise(name, sets, reps) {
    var routine = getRoutine();
    routine.exercises.push({ name: name, sets: sets, reps: reps });
    saveRoutine(routine);
}
// Function to remove an exercise by index
function removeExercise(index) {
    var routine = getRoutine();
    routine.exercises.splice(index, 1);
    saveRoutine(routine);
}
// Function to clear the entire workout routine
function clearRoutine() {
    localStorage.removeItem("routine");
}
// Utility function to get progress tracking data
function getProgress() {
    return JSON.parse(localStorage.getItem("progress") || "[]");
}
// Function to save progress
function saveProgress(date, duration) {
    var progress = getProgress();
    progress.push({ date: date, duration: duration });
    localStorage.setItem("progress", JSON.stringify(progress));
}
// Function to clear progress data
function clearProgress() {
    localStorage.removeItem("progress");
}
