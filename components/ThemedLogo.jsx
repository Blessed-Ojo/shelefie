import { Image ,useColorScheme} from 'react-native'
import DarkLogo from '../assets/img/logo_dark.png'
import LightLogo from '../assets/img/logo_light.png'

const ThemeLogo = ({...props}) => {
     const colorScheme = useColorScheme()
     const Logo = colorScheme === 'dark'? DarkLogo: LightLogo
  return (
     <Image source={Logo}
     {...props}/>
  )
}

export default ThemeLogo

