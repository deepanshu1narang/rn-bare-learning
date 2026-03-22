To crete a new application
  npx @react-native-community/cli@latest init <ProjectName>   


  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/deepanshu.narang/Documents/react_native_bare" && npx react-native run-android

  if running an existing project
  creare a local.properties inside android (folder)
  nano ~/.zshrc
  Add these lines at the bottom:
  bashexport JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/platform-tools
  Save with Ctrl+O → Enter → Ctrl+X, then reload:
  bashsource ~/.zshrc
  
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