import { useState } from 'react';
import { useTimer } from '../hooks/useTimer';

export default function Home() {
  const [showTimer, setShowTimer] = useState(false);
  const { minutes, seconds } = useTimer({ initialMinute: 0, initialSeconds: 10 });

  const handleStartTimer = () => {
    setShowTimer(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {showTimer ? (
        <div className="text-6xl font-bold">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
      ) : (
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleStartTimer}
        >
          Start
        </button>
      )}
    </div>
  );
}
