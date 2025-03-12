
import { students } from '../data/students';
import StudentTable from '../components/StudentTable/StudentTable';
import styles from './Index.module.css';

const Index = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Student Records</h1>
        <p className={styles.subtitle}>
          View and sort student information with this interactive table
        </p>
      </header>
      
      <main className={styles.main}>
        <StudentTable students={students} />
      </main>
      
      <footer className={styles.footer}>
        <p>Designed with precision and care</p>
      </footer>
    </div>
  );
};

export default Index;
