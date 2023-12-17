import { app } from 'electron';
import { Window } from './electron/Window';

const { mainWindow } = Window;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(async () => {
    await Window.create();

    app.on('activate', async () => {
      if (mainWindow === null) await Window.create();
    });
  })
  .catch(console.log);
