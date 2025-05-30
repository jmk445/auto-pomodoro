chrome.runtime.onStartup.addListener(() => {
  chrome.windows.create({
    url: "popup.html",
    type: "popup",
    width: 320,
    height: 400
  });
});

function startPomodoro() {
  console.log("Pomodoro 시작!");

  // 기본 25분 타이머 설정
  chrome.alarms.create("pomodoro", {
    delayInMinutes: 25
  });

  chrome.notifications.create("pomodoroStart", {
    type: "basic",
    iconUrl: "icon.png",
    title: "Pomodoro 시작",
    message: "25분 동안 집중하세요!",
    priority: 2
  });
}

// 타이머 종료 알림
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "pomodoro") {
    chrome.notifications.create("pomodoroEnd", {
      type: "basic",
      iconUrl: "icon.png",
      title: "휴식 시간!",
      message: "5분 동안 휴식하세요 ☕",
      priority: 2
    });
  }
});
