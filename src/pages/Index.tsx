
import { students } from '../data/students';
import StudentTable from '../components/StudentTable/StudentTable';

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-[#f5f5f7] flex flex-col items-center">
      <header className="text-center mb-12 mt-8">
        <h1 className="text-3xl font-medium mb-2 tracking-tight">Student Records</h1>
        <p className="text-gray-500 max-w-md mx-auto">
          View and sort student information with this interactive table
        </p>
      </header>
      
      <main className="w-full max-w-[1200px] mx-auto">
        <StudentTable students={students} />
      </main>
      
      <footer className="mt-16 text-center text-sm text-gray-400">
        <p>Designed with precision and care</p>
      </footer>
    </div>
  );
};

export default Index;
