import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link href="/client" className="btn btn-accent">
        get started
      </Link>
    </div>
  );
};

export default HomePage;
