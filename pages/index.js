import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import Button from 'components/button/index';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { locale } = router;

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className={styles.container}>
      <Head>
        <title>Hey, what&apos;s up!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-[90vh] items-center justify-center">
        <Button />
      </div>
      <h1 className="text-3xl font-bold underline">{locale}</h1>
      <h1>The current theme is: {theme}</h1>
      <div className="flex items-center space-x-4">
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    </div>
  );
}
