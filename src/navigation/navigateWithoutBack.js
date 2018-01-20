import { NavigationActions } from 'react-navigation' // 1.0.0-beta.27

const navigateWithoutBack = (value) => NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: value })
    ]
  })

  export default navigateWithoutBack