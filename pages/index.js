import Link from "next/link";
import { Button, Heading, Text } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Heading>Your Weekly Commute</Heading>
      <Text>
        <br />
        <b>Let’s calculate the impact of your work commute.</b>
        <br />
        <br /> We’ll ask some questions about how you got to and from your work
        last week. This doesn’t include any travel you may have done as part of
        your work.
        <br />
        <br />
        This form will take approximately 3 minutes to complete.
        <br />
        <br />
      </Text>
      <Link href="/form/1">
        <Button px="12" colorScheme="blue">
          Start
        </Button>
      </Link>
    </Layout>
  );
}
