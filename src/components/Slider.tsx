'use client'
import Ticker from 'framer-motion-ticker';

function App() {
  const colors = ['#632bf3', '#f122c8', '#f16022', '#9ef344', '#44d3f3'];
  return (
    <div className="App" style={{position: 'absolute', bottom: '0px'}}>
      <Ticker duration={20}>
        {colors.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item,
              margin: '10px',
              height: '90px',
              width: '200px',
            }}
          />
        ))}
      </Ticker>
    </div>
  );
}
export default App;