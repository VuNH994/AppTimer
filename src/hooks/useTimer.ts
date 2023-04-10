import { useState, useEffect } from 'react';

interface Props {
  initialMinute: number;
  initialSeconds: number;
}

export const useTimer = ({ initialMinute = 10, initialSeconds = 0 }: Props) => {
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 1) {
        if (minutes === 0) {
          clearInterval(myInterval);
          alert('Congratulation!!');
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    
    return () => {
      clearInterval(myInterval);
    };
  });

  return { minutes, seconds };
};
