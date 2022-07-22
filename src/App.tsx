import React, { useState } from 'react';
import { useLocalState } from 'uselocalstate';
import './App.sass';
import Mode from './features/mode/component/Mode';
import modeState, { I_ModeState } from './features/mode/initial';
import Settings from './features/settings/component/Settings';
import settingState, { I_SettingsState } from './features/settings/initial';
import Timer from './features/timer/component/Timer';
import timerState, { I_TimerState } from './features/timer/initial';
import Logo from './static/Logo/Logo';

function App() {
  const [settings, setSettings] = useLocalState<I_SettingsState>(settingState)
  const [mode, setMode] = useLocalState<I_ModeState>(modeState)
  const [timer, setTimer] = useState<I_TimerState>(timerState)
  return (
    <div className={`${settings.font} App`}>
      <Logo/>
      <Mode color={settings.color} setMode={setMode} mode={mode}/>
      <Timer
      color={settings.color}
      timer={timer}
      setTimer={setTimer}
      mode={mode}
      setMode={setMode}
      timing={settings.timing}/>
      <Settings settings={settings} setSetting={setSettings}/>
    </div>

  );
}

export default App;
