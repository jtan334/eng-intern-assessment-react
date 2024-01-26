import React from 'react';
import StopWatchButton from './StopWatchButton';

interface StopwatchProps {
  isRunning: boolean;
  elapsedTime: number;
  lapTimes: { minutes: number; seconds: number }[];
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onLap: () => void;
}

const Stopwatch: React.FC<StopwatchProps> = ({
  isRunning,
  elapsedTime,
  lapTimes,
  onStart,
  onStop,
  onReset,
  onLap,
}) => {
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  return (
    <div>
      <h1>{`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</h1>
      <StopWatchButton
        isRunning={isRunning}
        onStart={onStart}
        onStop={onStop}
        onReset={onReset}
        onLap={onLap}
      />
      {lapTimes.map((lapTime, index) => (
        <p key={index}>{`Lap ${index + 1}: ${String(lapTime.minutes).padStart(2, '0')}:${String(
          lapTime.seconds
        ).padStart(2, '0')}`}</p>
      ))}
    </div>
  );
};

export default Stopwatch;