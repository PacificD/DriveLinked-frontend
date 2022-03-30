/*
 * @Author: Pacific_D
 * @Date: 2022-03-30 22:15:53
 * @LastEditTime: 2022-03-30 22:34:10
 * @LastEditors: Pacific_D
 * @Description: 
 * @FilePath: \cr-frontend\src\pages\App\index.tsx
 */
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { Login } from "../../api/services/user"
import { ColorModeSwitcher } from "../../components/ColorModeSwitcher"
import { Logo } from "../../components/Logo"

export const App = () => {
  //测试API
  useEffect(() => {
    Login({
      username: 'root',
      password: '123456'
    }).then(res => {
      console.log(res)
    })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}