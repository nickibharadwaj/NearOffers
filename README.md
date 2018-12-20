# Ionic-push-notification
Push notification with ionic 3 through onesignal.

## Step 1: Prepare local environment

Install nodeJS, GIT and SASS.

Install Ionic and Cordova by using 
```
npm install -g cordova ionic
```

## Step 2: Clone github repository
```
git clone https://github.com/appseed-io/supermodular2.git
```

## Step 3: Install project’s libraries
```
npm install
```

## Step 4: Run / Build the application
In your terminal, run the application in the browser by typing the following command
```
ionic serve
```

## Step 5: Install Android and/or iOS Tools and SDKs
In order to test this application, you should install Android and iOS tools and SDKs on your machine. Since Ionic is based on Cordova, Cordova provides a very useful guide for installing the requirements for 
[Android platform] 
(https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#installing-the-requirements) 
and [iOS platform] (https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#installing-the-requirements)

## Step 6: Add platforms
```
ionic cordova platform add android
```
or
```
ionic cordova platform add ios
```

## Step 7: Emulate the app
```
ionic cordova emulate android
```
or
```
ionic cordova emulate ios
```

References:
[https://medium.com/appseed-io/how-to-integrate-onesignal-push-notifications-into-an-ionic-3-application-eb2fdc3e6176](https://medium.com/appseed-io/how-to-integrate-onesignal-push-notifications-into-an-ionic-3-application-eb2fdc3e6176)
