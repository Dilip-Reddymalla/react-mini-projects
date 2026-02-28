import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  });
  const [allAlarms, setAllAlarms] = useState([]);
  const [ringingAlarmId, setRingingAlarmId] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const audioRef = useRef(null);

  const formatTo12Hour = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    let h = parseInt(hours);
    const m = minutes;
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h ? h : 12;
    return `${String(h).padStart(2, "0")}:${m} ${ampm}`;
  };

  const triggerAlarm = (alarmId) => {
    setRingingAlarmId(alarmId);
    setShowNotification(true);

    const soundInterval = setInterval(() => {
      playSound();
    }, 600);

    audioRef.current = soundInterval;
  };

  const playSound = () => {
    const audioContext = new (
      window.AudioContext || window.webkitAudioContext
    )();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800; // Frequency in Hz
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 0.5,
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    allAlarms.forEach((alarm) => {
      if (alarm.enabled && !alarm.isRinging) {
        const currentTime = time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        if (currentTime === alarm.time) {
          setAllAlarms((prevAlarms) =>
            prevAlarms.map((a) =>
              a.id === alarm.id ? { ...a, isRinging: true } : a,
            ),
          );
          triggerAlarm(alarm.id);
        }
      }
    });
  }, [time, allAlarms]);

  const stopAlarm = () => {
    if (audioRef.current) {
      clearInterval(audioRef.current);
    }
    setRingingAlarmId(null);
    setShowNotification(false);

    setAllAlarms(
      allAlarms.map((alarm) =>
        alarm.id === ringingAlarmId
          ? { ...alarm, isRinging: false, enabled: false }
          : alarm,
      ),
    );

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    setAlarmTime(`${hours}:${minutes}`);
  };

  const setAlarmHandler = (e) => {
    e.preventDefault();
    if (alarmTime) {
      const newAlarm = {
        id: Date.now(),
        time: alarmTime,
        enabled: true,
        isRinging: false,
      };
      setAllAlarms([...allAlarms, newAlarm]);
      setAlarmTime("");
    }
  };

  const toggleAlarm = (alarmId) => {
    setAllAlarms(
      allAlarms.map((alarm) =>
        alarm.id === alarmId ? { ...alarm, enabled: !alarm.enabled } : alarm,
      ),
    );
  };

  const deleteAlarm = (alarmId) => {
    setAllAlarms(allAlarms.filter((alarm) => alarm.id !== alarmId));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>⏰ Clock + Alarm App</h1>

        <div className="clock">
          <div className="time-display">{time.toLocaleTimeString()}</div>
          <div className="date-display">{time.toLocaleDateString()}</div>
        </div>

        {showNotification && (
          <div className="notification-popup">
            <div className="notification-content">
              <h2>🔔 Alarm!</h2>
              <p>Time's up!</p>
              <button className="stop-btn" onClick={stopAlarm}>
                Stop Alarm
              </button>
            </div>
          </div>
        )}

        <div className="setAlarm">
          <h2>Set New Alarm</h2>
          <form onSubmit={setAlarmHandler}>
            <input
              type="time"
              value={alarmTime}
              onChange={(e) => setAlarmTime(e.target.value)}
              required
            />
            <button type="submit">Set Alarm</button>
          </form>
        </div>

        <div className="alarmsList">
          <h2>Your Alarms ({allAlarms.length})</h2>
          {allAlarms.length > 0 ? (
            <ul className="alarms-list">
              {allAlarms.map((alarm) => (
                <li
                  key={alarm.id}
                  className={`alarm-item ${alarm.enabled ? "enabled" : "disabled"} ${ringingAlarmId === alarm.id ? "ringing" : ""}`}
                >
                  <div className="alarm-time">
                    <span className="time-text">
                      {formatTo12Hour(alarm.time)}
                    </span>
                  </div>
                  <div className="alarm-controls">
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={alarm.enabled}
                        onChange={() => toggleAlarm(alarm.id)}
                      />
                      <span className="slider"></span>
                    </label>
                    <button
                      className="delete-btn"
                      onClick={() => deleteAlarm(alarm.id)}
                      title="Delete alarm"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-alarms">No alarms set. Create one above!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
