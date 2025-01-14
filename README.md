# Picnotate

### For development:

- Run `yarn run watch` in the terminal
- In browser extensions load unpacked the dist folder [chrome://extensions/](chrome://extensions/)
- When you change something in the code, package will be rebuilt, then in the browser click `command+q` to trigger reload. Which means that when you change a file, go to chrome then do `command+q` then `command+r`, to reload package then refresh the page.

When needed (i.e deployment) add permissions to the manifest file

#### [Popup documentation](https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup)

#### [Content Script documentation](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)

#### This project uses [Vite](https://vitejs.dev/) and [crxjs](https://crxjs.dev/vite-plugin) to build the extension.

#### Reference: [React content script](https://github.com/yosevu/react-content-script).

#### Reference: [How to inject a React app into a Chrome Extension as a Content Script](https://medium.com/@yosevu/how-to-inject-a-react-app-into-a-chrome-extension-as-a-content-script-3a038f611067).
