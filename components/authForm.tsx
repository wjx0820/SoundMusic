import { Box, Flex, Input, Button, FormLabel } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { FC, useState } from "react"
import NextImage from "next/image"
import { auth } from "../lib/mutations"

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    await auth(mode, { email, password })
    setIsLoading(false)
    router.push("/")
  }

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex justify="center" align="center" height="100px">
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 200px)">
        <Box padding="50px" borderRadius="6px" border="1px">
          <form onSubmit={handleSubmit}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel htmlFor="password" marginTop="20px">
              Password
            </FormLabel>
            <Input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              marginTop="20px"
              bg="green.500"
              isLoading={isLoading}
              fontWeight="bold"
              bgGradient="linear(to-r, teal.500, green.500)"
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

export default AuthForm
