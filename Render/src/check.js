import React, { useState } from 'react'

export default function Check() {
    const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      {isChecked ? <p>Checkbox is checked</p> : <p>Checkbox is not checked</p>}
    </div>
  );
}
