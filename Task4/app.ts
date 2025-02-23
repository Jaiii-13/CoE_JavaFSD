interface Exercise {
    name: string;
    sets: number;
    reps: number;
}

interface WorkoutRoutine {
    exercises: Exercise[];
}

interface ProgressEntry {
    date: string;
    duration: number;
}

function getRoutine(): WorkoutRoutine {
    return JSON.parse(localStorage.getItem("routine") || '{"exercises": []}');
}

function saveRoutine(routine: WorkoutRoutine): void {
    localStorage.setItem("routine", JSON.stringify(routine));
}

function addExercise(name: string, sets: number, reps: number): void {
    const routine = getRoutine();
    routine.exercises.push({ name, sets, reps });
    saveRoutine(routine);
}


function removeExercise(index: number): void {
    const routine = getRoutine();
    routine.exercises.splice(index, 1);
    saveRoutine(routine);
}


function clearRoutine(): void {
    localStorage.removeItem("routine");
}


function getProgress(): ProgressEntry[] {
    return JSON.parse(localStorage.getItem("progress") || "[]");
}


function saveProgress(date: string, duration: number): void {
    const progress = getProgress();
    progress.push({ date, duration });
    localStorage.setItem("progress", JSON.stringify(progress));
}


function clearProgress(): void {
    localStorage.removeItem("progress");
}


export { addExercise, removeExercise, clearRoutine, getRoutine, getProgress, saveProgress, clearProgress };
