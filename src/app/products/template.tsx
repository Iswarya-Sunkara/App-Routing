export default function Template({ children }: { children: React.ReactNode }) {
    return (
      <div style={{ border: "2px solid red", padding: "1rem" }}>
        <h2>Fresh Template Loaded!</h2>
        {children}
      </div>
    );
  }
  