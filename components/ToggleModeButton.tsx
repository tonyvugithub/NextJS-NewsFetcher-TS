import React from 'react';
import { toggleTheme, selectThemeMode } from '../store/slices/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

interface ToggleModeButtonProps {}

const ToggleModeButton: React.FC<ToggleModeButtonProps> = () => {
  const themeMode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  return (
    <div className="toggle-mode-button container d-flex justify-content-end my-3">
      <span
        className={`pr-2 ${themeMode == 'light' ? 'brown-text' : 'text-white'}`}
      >
        Theme
      </span>
      <div className="custom-control custom-switch pr-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitches"
          onClick={() => dispatch(toggleTheme())}
        />

        <label className="custom-control-label" htmlFor="customSwitches">
          {themeMode == 'light' ? (
            <i style={{ color: '#ffab00' }} className="fas fa-sun"></i>
          ) : (
            <i style={{ color: 'white' }} className="fas fa-moon"></i>
          )}
        </label>
      </div>
    </div>
  );
};

export default ToggleModeButton;
