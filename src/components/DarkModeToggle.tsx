import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';


const lightTheme = {
  background: '#f9f9f9',
  color: '#333',
};

const darkTheme = {
  background: '#333',
  color: '#f9f9f9',
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const ToggleButton = styled.button`
  font-size: 14px;
  padding: 8px 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.color};
  border: 2px solid ${({ theme }) => theme.color};
  border-radius: 4px;
  cursor: pointer;
`;

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };
  const [weight, setWeight] = useState('');
  const [waterIntake, setWaterIntake] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
  };

  const calculateWaterIntake = () => {
    const waterPerKg = 2.2 * 30 / 2; // 30 ml of water per kg of body weight
    const parsedWeight = parseFloat(weight);
    if (!isNaN(parsedWeight)) {
      const totalWater = parsedWeight * waterPerKg;
      setWaterIntake(totalWater);
    } else {
      setWaterIntake(0);
    }
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
      <div class="position">
      <h1>คำนวนปริมาณน้ำที่ควรดื่มต่อวัน</h1>
      <label>
        ใส่น้ำหนัก (กิโลกรัม):
        <input type="text" value={weight} onChange={handleChange} />
      </label>
      <br/>
      <br/>
      <button class="border_button" onClick={calculateWaterIntake}>Calculate</button>
      {waterIntake > 0 && (
        <p>ปริมาณน้ำที่ควรดื่มต่อวัน {waterIntake.toFixed(2)} มิลลิลิตร.</p>
      )}
      <br/>
      <br/>
      <ToggleButton onClick={toggleTheme}>
          {isDarkMode ? 'Light' : 'Dark'}
        </ToggleButton>
    </div>
      </Container>
    </ThemeProvider>
  );
};

export default DarkModeToggle;
