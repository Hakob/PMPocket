# PMPocket

Project managment pocket

## Generate release keystore for [android](https://reactnative.dev/docs/signed-apk-android)

```bash
$ keytool -genkeypair -v -keystore release.keystore -alias release-alias -keyalg RSA -keysize 2048 -validity 10000
Password:
Retype:
.....
.......
# https://reactnative.dev/docs/signed-apk-android
```
