export default function AppCard() {
  return (
    <div>
      <Card>
        <h2>Card 1</h2>
      </Card>
      <Card>
        <h2>Card 2</h2>
        <p>description</p>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <section
      style={{
        width: '200px',
        height: '200px',
        marginTop: '1rem',
        padding: '0.5rem 1rem',
        borderRadius: '1rem',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </section>
  );
}
