import { Container, styled } from "@material-ui/core";
import { useRouter } from "next/router";
import Navbar from "./navbar";

interface Props {
  children: JSX.Element;
}

const excludePaths = ["/signin", "/signup"];

const SiteLayout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <>
      {!excludePaths.includes(router.pathname) && <Navbar />}
      <Main>
        <Container>{children}</Container>
      </Main>
    </>
  );
};

const Main = styled("main")({});

export default SiteLayout;
