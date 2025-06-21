import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Select, Button } from "antd";

const data = [
  { option: 'Friends' },
  { option: 'Sport' },
  { option: 'Family' },
  { option: 'Nature' },
  { option: 'Arts and Craft' },
  { option: 'Meditation' },
];

const SpinWheel = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState(['Family']);

  const handleSpinClick = () => {
    const filtered = data.filter(item =>
      selectedCategories.includes(item.option)
    );

    const randomIndex = Math.floor(Math.random() * filtered.length);
    const realIndex = data.findIndex(item => item.option === filtered[randomIndex].option);

    setPrizeNumber(realIndex);
    setMustSpin(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h2 className="text-2xl font-semibold">Spin Wheel</h2>

      <div className="relative">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={['#f44336', '#4caf50', '#2196f3', '#ff9800', '#9c27b0', '#00bcd4']}
          textColors={['#ffffff']}
          onStopSpinning={() => setMustSpin(false)}
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-green-500"></div>
        </div>
      </div>

      <div className="w-60">
        <Select
          mode="multiple"
          allowClear
          placeholder="Select Task Category"
          defaultValue={['Family']}
          onChange={(value) => setSelectedCategories(value)}
          style={{ width: '100%' }}
          options={data.map(d => ({ label: d.option, value: d.option }))}
        />
      </div>

      <div className="flex gap-4">
        <Button type="primary" onClick={handleSpinClick}>Spin</Button>
        <Button type="default">Go To Task</Button>
      </div>
    </div>
  );
};

export default SpinWheel;
