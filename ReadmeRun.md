To crete a new application
  npx @react-native-community/cli@latest init <ProjectName>   


  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/deepanshu.narang/Documents/react_native_bare" && npx react-native run-android
  
  Run instructions for iOS:
    • cd "/Users/deepanshu.narang/Documents/react_native_bare/ios"
    
    • Install Cocoapods
      • bundle install # you need to run this only once in your project.
      • bundle exec pod install
      • cd ..
    
    • npx react-native run-ios
    - or -
    • Open react_native_bare/ios/react_native_bare.xcodeproj in Xcode or run "xed -b ios"
    • Hit the Run button
    
  Run instructions for macOS:
    • See https://microsoft.github.io/react-native-macos for the latest up-to-date instructions.


EXPO
  npx create-expo-app MyApp   
  npx expo start -c  