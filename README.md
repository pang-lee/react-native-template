<img src='https://github.com/WataruMaeda/react-native-boilerplate/blob/main/__DELELE_ME__/demo.gif' width='32%'>

## What's included
#### Navigation

At the default, you can see 3 types of navigation; stack, tab, and drawer. Here in the [code](https://github.com/WataruMaeda/react-native-boilerplate/tree/main/src/navigator), files are separated by the navigation types. If you don't need drawer navigation for example, you can the remove drawer file and replace the import status [here](https://github.com/WataruMaeda/react-native-boilerplate/blob/main/src/navigator/Navigator.js#L7) to tab or stack navigator.

#### Authentication

If your app requires authorization, you need to implement login, signup function. After the user login or logout, the navigation flow should be different. In this case, the route should be switched by the login status. In the [navigator](https://github.com/WataruMaeda/react-native-boilerplate/blob/main/src/navigator/Navigator.js#L18), you can set the different navigation changed by login status.

The auth logic are inside the src/navigator/Navigator.js, and the backend we use the Firebase and the all config file are inside firebase.config.js

#### Redux

We are using [Redux Toolkit](https://redux-toolkit.js.org/) to simplify the redux setup and minimize boilerplates. 
Redux can contain global state of the app. This is very useful but on the other hand, it takes time to setup if you are not familiar with it. In the boilerplate, you see [slices file](https://github.com/WataruMaeda/react-native-boilerplate/blob/main/src/slices/app.slice.js) which contains actions and reducers in a file. Please follow the [quick start tutorials](https://redux-toolkit.js.org/tutorials/quick-start) to see how store is setup; and how to use Redux state and actions in React Components.

#### Assets

Images, icons and fonts are controlled under [theme](https://github.com/WataruMaeda/react-native-boilerplate/tree/main/src/theme). If you add new assets, you need to import the new assets in each files to access the assets from theme. Also, assets preloading is implemented as well. You can also use svg file in the boilerplate. All the assets are ready to use by importing theme.

#### Absolute path

If your project structure become complicated and has a lot of nested folders, you will have problem with relative paths. In the boilerplate, you can use absolute paths. You can write simple import statement i.e 'components/Button'. No more ../../../components/Button. The configuration is written in `babel.config.js`.

#### Code formatting, fixing and testing on pre commit

It's very important to keep code clean to maintain readability and productivity. In the boilerplate, Eslint, Prettier and Jest configuration are done. It's continuously checking and format your code while you coding (Please enable "Format on Save" option if you prefer to format code after save change). After you submit changes, pre commit script will run to handle checking and formatting your code, run test. If the 3 steps are passed, you will be able to push the change.

## Licence

This project is available under the MIT license. See the [LICENSE](https://github.com/WataruMaeda/react-native-boilerplate/blob/main/LICENSE) file for more info.
