# native-iso-relay - WIP

You will need to setup a [ native development environment](https://facebook.github.io/react-native/docs/getting-started.html).

#### Web:

* `npm install`
* `webpack`
* `npm run start-relay`

Keep the Relay server running!

#### Native

* Start the packager with `npm start`

##### iOS
* `npm run ios`
* open `ios/nativeRelay.xcodeproj` with Xcode and build


##### Android
If you want to use Genymotion (advised), replace `localhost` with your ip address (`ifconfig` -> en0 --> inet) here https://github.com/yldio/native-iso-relay/blob/master/src/app.js#L16.

* launch a simulator instance with Genymotion
* `npm run ad` to compile and launch Android
