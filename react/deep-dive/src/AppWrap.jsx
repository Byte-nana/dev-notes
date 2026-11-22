export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image='https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
          name='cat'
          size={100}
        />
        <p>Hello!</p>
      </Navbar>

      <Navbar>
        <Avatar
          image='https://images.unsplash.com/photo-1651492017098-3229dc8a8d82?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
          name='dog'
          size={200}
        />
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: 'yellow' }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <img
      src={image}
      alt={name}
      width={size}
      height={size}
      style={{ borderRadius: '50%', objectFit: 'cover' }}
    />
  );
}
