import Firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export function createAPI ({ config, version }) {
  Firebase.initializeApp(config)
  return Firebase.database().ref(version)
}
