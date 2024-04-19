import React from 'react';
import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';

interface Props {
  visible: boolean;
}

const SplashScreen: React.FC<Props> = ({ visible }) => {
  return (
    <Dialog visible={visible} modal={true} closable={false} onHide={() => {} }>
      <div style={{ textAlign: 'center' }}>
        <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" animationDuration=".5s" />
      </div>
    </Dialog>
  );
};

export default SplashScreen;
