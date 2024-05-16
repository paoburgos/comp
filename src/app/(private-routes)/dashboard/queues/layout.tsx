export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-orange-300">
      Listing Layout
      {children}
    </div>
  );
}
