export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-orange-600">
      Private Root Layout
      {children}
    </div>
  );
}
