import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button type='button' className={styles.back} onClick={() => navigate(-1)}>
      <ChevronLeft /> Back
    </button>
  );
};
