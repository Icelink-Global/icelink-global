export default function NotFound() {
  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      height: '100vh',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
      color: '#fff',
    }}>
      <div style={{ lineHeight: '48px' }}>
        <h1 style={{
          display: 'inline-block',
          margin: '0 20px 0 0',
          paddingRight: '23px',
          fontSize: '24px',
          fontWeight: 500,
          verticalAlign: 'top',
          borderRight: '1px solid rgba(255, 255, 255, .3)',
        }}>404</h1>
        <div style={{ display: 'inline-block' }}>
          <h2 style={{
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '28px',
            margin: 0,
            color: '#a1a1aa',
          }}>This page could not be found.</h2>
        </div>
      </div>
    </div>
  );
}

