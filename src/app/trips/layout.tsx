const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-12 px-4 md:px-6 bg-gray-50 min-h-screen">{children}</div>
  );
};
export default RootLayout;
