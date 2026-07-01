function Header() {
  return (
    <header className="bg-primary text-white py-3 shadow">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">

          {/* Logo */}
          <div>
            <h2 className="m-0">🎓 Student Dashboard</h2>
            <small>Learn • Practice • Grow</small>
          </div>

          {/* Welcome */}
          <div>
            <h5 className="m-0">Welcome, Student 👋</h5>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;