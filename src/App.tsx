import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import LetterOpening from './components/LetterOpening';
import ProposalQuestions from './components/ProposalQuestions';
import CelebrationScreen from './components/CelebrationScreen';
import HomePage from './components/HomePage';
import MemoriesPage from './components/MemoriesPage';
import ReasonsPage from './components/ReasonsPage';
import RosePetals from './components/RosePetals';
import MusicPlayer from './components/MusicPlayer';

type Stage = 'loading' | 'letter' | 'questions' | 'celebration' | 'home' | 'memories' | 'reasons';

function App() {
  const [stage, setStage] = useState<Stage>('loading');
  const [showPetals, setShowPetals] = useState(false);

  const handleNavigate = (destination: string) => {
    if (destination === 'home') setStage('home');
    else if (destination === 'memories') setStage('memories');
    else if (destination === 'reasons') setStage('reasons');
  };

  const handleCelebrationComplete = () => {
    setShowPetals(true);
    setStage('home');
  };

  return (
    <>
      {stage === 'loading' && <LoadingScreen onComplete={() => setStage('letter')} />}
      {stage === 'letter' && <LetterOpening onComplete={() => setStage('questions')} />}
      {stage === 'questions' && <ProposalQuestions onComplete={() => setStage('celebration')} />}
      {stage === 'celebration' && <CelebrationScreen onComplete={handleCelebrationComplete} />}
      {stage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {stage === 'memories' && <MemoriesPage onNavigate={handleNavigate} />}
      {stage === 'reasons' && <ReasonsPage onNavigate={handleNavigate} />}

      {showPetals && <RosePetals />}
      {(stage !== 'loading') && <MusicPlayer />}
    </>
  );
}

export default App;
