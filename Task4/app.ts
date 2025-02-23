// Define an Exercise type for type safety
interface Exercise {
    name: string;
    sets: number;
    reps: number;
}

// Define WorkoutRoutine type
interface WorkoutRoutine {
    exercises: Exercise[];
}

// Define Progress Entry type
interface ProgressEntry {
    date: string;
    duration: number;
}

// Utility function to get stored routines from localStorage
function getRoutine(): WorkoutRoutine {
    return JSON.parse(localStorage.getItem("routine") || '{"exercises": []}');
}

// Utility function to save routine to localStorage
function saveRoutine(routine: WorkoutRoutine): void {
    localStorage.setItem("routine", JSON.stringify(routine));
}

// Function to add an exercise to the routine
function addExercise(name: string, sets: number, reps: number): void {
    const routine = getRoutine();
    routine.exercises.push({ name, sets, reps });
    saveRoutine(routine);
}

// Function to remove an exercise by index
function removeExercise(index: number): void {
    const routine = getRoutine();
    routine.exercises.splice(index, 1);
    saveRoutine(routine);
}

// Function to clear the entire workout routine
function clearRoutine(): void {
    localStorage.removeItem("routine");
}

// Utility function to get progress tracking data
function getProgress(): ProgressEntry[] {
    return JSON.parse(localStorage.getItem("progress") || "[]");
}

// Function to save progress
function saveProgress(date: string, duration: number): void {
    const progress = getProgress();
    progress.push({ date, duration });
    localStorage.setItem("progress", JSON.stringify(progress));
}

// Function to clear progress data
function clearProgress(): void {
    localStorage.removeItem("progress");
}

// Export functions for use in JavaScript files
export { addExercise, removeExercise, clearRoutine, getRoutine, getProgress, saveProgress, clearProgress };
