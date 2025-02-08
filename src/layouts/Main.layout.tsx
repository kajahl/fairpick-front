import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="h-screen flex">
      {/* Lewa strona */}
      <div className="w-1/2 bg-gray-900 text-white flex flex-col justify-center items-center p-8">
        <h1 className="text-5xl font-bold tracking-widest">FairPick</h1>
        <p className="mt-4 text-gray-300 text-center max-w-md">
          Fair and repetitive draws.
          <br />
          Transparency guaranteed.
        </p>
      </div>

      {/* Prawa strona */}
      <main className="w-1/2 bg-gray-700 flex flex-col justify-center items-center p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;