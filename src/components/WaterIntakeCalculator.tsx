import React, { useState } from 'react';

const WaterIntakeCalculator: React.FC = () => {
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
    <div>
      <h1>คำนวนปริมาณน้ำที่ควรดื่มต่อวัน</h1>
      <label>
        ใส่น้ำหนัก (กิโลกรัม):
        <input type="text" value={weight} onChange={handleChange} />
      </label>
      <button onClick={calculateWaterIntake}>Calculate</button>
      {waterIntake > 0 && (
        <p>ปริมาณน้ำที่ควรดื่มต่อวัน {waterIntake.toFixed(2)} มิลลิลิตร.</p>
      )}
    </div>
  );
};

export default WaterIntakeCalculator;
