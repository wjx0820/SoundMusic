import { Box, Text, Flex } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/react"
import GradientLayout from "../components/gradientLayout"
import { useMe } from "../lib/hooks"
import { prisma } from "../lib/prisma"

const Home = ({ artists }) => {
  const { user } = useMe()

  return (
    <GradientLayout
      color="gray"
      subtitle="歌手"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
      image="https://i.scdn.co/image/ab6761610000f178a9989f6b9885c7aedc29c557"
      roundImage
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: { artists },
  }
}

export default Home
