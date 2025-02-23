document.addEventListener("DOMContentLoaded", function () {
    const achievementsList = document.getElementById("achievementsList");
    const workoutData = JSON.parse(localStorage.getItem("workoutData")) || [];

    function calculateAchievements() {
        let totalWorkouts = workoutData.length;
        let totalMinutes = workoutData.reduce((sum, entry) => sum + entry.duration, 0);
        let longestWorkout = Math.max(...workoutData.map(entry => entry.duration), 0);

        let achievements = [];

        // Basic Workout Milestones
        if (totalWorkouts >= 1) achievements.push("🏆 First Workout Logged!");
        if (totalWorkouts >= 5) achievements.push("🚀 5 Workouts Completed!");
        if (totalWorkouts >= 10) achievements.push("💪 10 Workouts Done!");
        if (totalWorkouts >= 20) achievements.push("🔥 20 Workouts – Keep Going!");
        if (totalWorkouts >= 50) achievements.push("⚡ 50 Workouts - True Dedication!");
        if (totalWorkouts >= 100) achievements.push("🏅 100 Workouts - Legend Status!");

        // Total Workout Minutes Achievements
        if (totalMinutes >= 100) achievements.push("🔥 100 Minutes of Exercise!");
        if (totalMinutes >= 500) achievements.push("💥 500 Minutes – Halfway to 1000!");
        if (totalMinutes >= 1000) achievements.push("🏆 1000 Minutes of Hard Work!");
        if (totalMinutes >= 5000) achievements.push("🎯 5000 Minutes - True Fitness Warrior!");

        // Longest Workout Achievements
        if (longestWorkout >= 30) achievements.push("🎯 30-Minute Workout Achieved!");
        if (longestWorkout >= 60) achievements.push("⚡ 1 Hour Workout Done!");
        if (longestWorkout >= 90) achievements.push("💪 90-Minute Marathon!");
        if (longestWorkout >= 120) achievements.push("🔥 2 Hours Non-Stop - Beast Mode!");

        // Special Achievements
        if (totalWorkouts >= 7 && workoutData.length >= 7) achievements.push("📆 1 Week of Daily Workouts!");
        if (totalWorkouts >= 30 && workoutData.length >= 30) achievements.push("📆 1 Month Streak - Amazing!");
        if (totalWorkouts >= 365 && workoutData.length >= 365) achievements.push("🌟 1 Year of Consistency!");

        return achievements;
    }

    function displayAchievements() {
        let achievements = calculateAchievements();
        achievementsList.innerHTML = "";

        if (achievements.length === 0) {
            achievementsList.innerHTML = "<p>No achievements yet. Keep working out! 💪</p>";
        } else {
            achievements.forEach(achievement => {
                let li = document.createElement("li");
                li.textContent = achievement;
                achievementsList.appendChild(li);
            });
        }
    }

    displayAchievements();
});
