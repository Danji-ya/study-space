import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/Button';
import { ColorModeToggle, ColorModeProvider } from '@/components/ColorMode';

export default function Home() {
  return (
    <ColorModeProvider>
      <main className={styles.main}>
        <ColorModeToggle />
        <Button />
      </main>
    </ColorModeProvider>
  );
}
