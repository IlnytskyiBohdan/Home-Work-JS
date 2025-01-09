"use strict";

// dz 18.1

class Timer {
  constructor(targetElement, startTimer) {
    this.element = document.querySelector(targetElement);
    this.startTimer = startTimer;
    this.timerInterval = null;
  }

  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  }

  updateTimer() {
    this.element.textContent = this.formatTime(this.startTimer);

    if (this.startTimer > 0) {
      this.startTimer--;
    } else {
      clearInterval(this.timerInterval);
    }
  }
  start() {
    this.timerInterval = setInterval(() => this.updateTimer(), 1000);
    this.updateTimer();
  }
}

const myTimer = new Timer("#timer", 85);
myTimer.start();
